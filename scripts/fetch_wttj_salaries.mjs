import fs from "node:fs/promises";
import path from "node:path";

const API_URL = "https://api.exp.welcometothejungle.com/graphql";
const PROJECT = "wttj-salaries-london";
const ROOT = process.cwd();
const RAW_DIR = path.join(ROOT, "data", PROJECT, "raw");
const CURATED_DIR = path.join(ROOT, "data", PROJECT, "curated");

const ALL_JOB_SUBFUNCTIONS_QUERY = `
  query AllJobSubFunctions {
    jobSubFunctions {
      id
      value
    }
  }
`;

const SALARY_TRAJECTORY_QUERY = `
  query SalaryTrajectory($subFunctionId: ID!, $location: Location!) {
    salaryStatistics {
      median: salaryTrajectory(
        subFunctionId: $subFunctionId
        location: $location
        percentile: 0.5
      ) {
        currency
        numRawDatapoints
        datapoints {
          label
          value
        }
      }
      firstQuartile: salaryTrajectory(
        subFunctionId: $subFunctionId
        location: $location
        percentile: 0.25
      ) {
        datapoints {
          label
          value
        }
      }
      lastQuartile: salaryTrajectory(
        subFunctionId: $subFunctionId
        location: $location
        percentile: 0.75
      ) {
        datapoints {
          label
          value
        }
      }
      firstDecile: salaryTrajectory(
        subFunctionId: $subFunctionId
        location: $location
        percentile: 0.1
      ) {
        datapoints {
          label
          value
        }
      }
      lastDecile: salaryTrajectory(
        subFunctionId: $subFunctionId
        location: $location
        percentile: 0.9
      ) {
        datapoints {
          label
          value
        }
      }
    }
  }
`;

async function graphql(operationName, query, variables = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  let response;
  try {
    response = await fetch(API_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ operationName, query, variables }),
      signal: controller.signal
    });
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    throw new Error(`GraphQL HTTP ${response.status} for ${operationName}`);
  }

  const payload = await response.json();
  if (payload.errors) {
    throw new Error(`${operationName} failed: ${JSON.stringify(payload.errors)}`);
  }

  return payload.data;
}

function indexByYears(points = []) {
  return new Map(points.map((point) => [Number(point.label), Number(point.value)]));
}

function flattenTrajectory(role, location) {
  const stats = role.salaryStatistics;
  const series = {
    median: indexByYears(stats.median?.datapoints),
    firstQuartile: indexByYears(stats.firstQuartile?.datapoints),
    lastQuartile: indexByYears(stats.lastQuartile?.datapoints),
    firstDecile: indexByYears(stats.firstDecile?.datapoints),
    lastDecile: indexByYears(stats.lastDecile?.datapoints)
  };

  const years = new Set();
  for (const values of Object.values(series)) {
    for (const year of values.keys()) years.add(year);
  }

  return [...years]
    .sort((a, b) => a - b)
    .map((yearsExperience) => ({
      role_id: role.id,
      role: role.value,
      location,
      currency: stats.median?.currency ?? "",
      num_raw_datapoints: stats.median?.numRawDatapoints ?? "",
      years_experience: yearsExperience,
      first_decile: series.firstDecile.get(yearsExperience) ?? "",
      first_quartile: series.firstQuartile.get(yearsExperience) ?? "",
      median: series.median.get(yearsExperience) ?? "",
      last_quartile: series.lastQuartile.get(yearsExperience) ?? "",
      last_decile: series.lastDecile.get(yearsExperience) ?? ""
    }));
}

function toCsv(rows) {
  if (rows.length === 0) return "";
  const headers = Object.keys(rows[0]);
  const escape = (value) => {
    const text = String(value ?? "");
    if (/[",\n]/.test(text)) return `"${text.replace(/"/g, "\"\"")}"`;
    return text;
  };

  return [
    headers.join(","),
    ...rows.map((row) => headers.map((header) => escape(row[header])).join(","))
  ].join("\n");
}

async function main() {
  const location = process.argv[2] ?? "LONDON";
  const rolesData = await graphql(
    "AllJobSubFunctions",
    ALL_JOB_SUBFUNCTIONS_QUERY
  );

  const roles = rolesData.jobSubFunctions;
  const rawRoles = [];
  const flatRows = [];

  for (const [index, role] of roles.entries()) {
    console.log(`Fetching ${index + 1}/${roles.length}: ${role.value}`);
    const data = await graphql("SalaryTrajectory", SALARY_TRAJECTORY_QUERY, {
      subFunctionId: role.id,
      location
    });

    const rawRole = {
      ...role,
      location,
      salaryStatistics: data.salaryStatistics
    };

    rawRoles.push(rawRole);
    flatRows.push(...flattenTrajectory(rawRole, location));
    await new Promise((resolve) => setTimeout(resolve, 150));
  }

  const summary = {
    fetchedAt: new Date().toISOString(),
    source: API_URL,
    location,
    roleCount: roles.length,
    rowCount: flatRows.length
  };

  await fs.writeFile(
    path.join(RAW_DIR, "salary-trajectories.json"),
    JSON.stringify({ summary, roles: rawRoles }, null, 2)
  );
  await fs.writeFile(
    path.join(CURATED_DIR, "salary-trajectories-flat.json"),
    JSON.stringify(flatRows, null, 2)
  );
  await fs.writeFile(
    path.join(CURATED_DIR, "salary-trajectories-flat.csv"),
    `${toCsv(flatRows)}\n`
  );
  await fs.writeFile(
    path.join(CURATED_DIR, "summary.json"),
    JSON.stringify(summary, null, 2)
  );

  console.log(JSON.stringify(summary, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
