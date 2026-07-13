# Release Checklist

Steps to cut a new version. Run in order; each step unblocks the next.

---

## 1. Bump the version

```bash
npm version X.Y.Z --no-git-tag-version
```

This updates `package.json` only. Do not let npm create a git tag.

---

## 2. Update version references in manifests and READMEs

These files embed the version number literally:

| File | What to change |
| --- | --- |
| `README.md` | All `data-vizard@X.Y.Z` references in the Verify section |
| `plugins/data-vizard/README.md` | Same Verify section smoke-test commands |
| `plugins/data-vizard/.claude-plugin/plugin.json` | `"version"` field |
| `plugins/data-vizard/.codex-plugin/plugin.json` | `"version"` field (includes build suffix) |
| `extensions/data-vizard/gemini-extension.json` | `"version"` field |
| `.claude-plugin/marketplace.json` | Both `"version"` fields (top-level and inside `plugins[]`) |

Quick scan to catch anything missed:

```bash
grep -rn "X\.Y\.Z-PREV" README.md plugins/ extensions/ .claude-plugin/ changelog.html faq.html
```

---

## 3. Update CHANGELOG.md

Move the `## Unreleased` section to `## X.Y.Z - YYYY-MM-DD` with today's date. Write the bullet list before branching, not at the last minute.

---

## 4. Update changelog.html

Find the "Unreleased" `<h2>` block and change it to the version number and release date. Match the existing markup pattern for the release header and date pill.

Add a new empty `## Unreleased` block at the top for the next cycle.

---

## 5. Review index.html

Check whether any of the following need updating for this release:

- **Skills list** — new or renamed skills in the feature grid
- **Compatibility table** — new host support or changed status
- **Showcase / outcome cards** — new visualizations built with this release worth featuring; update the version tag on the card (`v0.X.Y`) if relevant
- **Install command** — if the quickstart snippet references a pinned version, bump it
- **`og:description` / meta description** — if the product description changed significantly

---

## 6. Review README.md content (beyond version refs)

Beyond the smoke-test version strings updated in step 2, check:

- **Skills list** — new or renamed skills in the Quickstart section
- **Compatibility table** — new host support or changed status
- **Install prerequisites** — any new requirements
- **Package Contents** — if new files are now shipped with the npm package
- **Release Checklist section at the bottom** — keep it aligned with this file

---

## 7. Review faq.html

Check whether any answers need updating:

- **Compatibility table** — new host support
- **Install / update commands** — if the flow changed
- **Troubleshooting entries** — if a known issue was fixed or a new one should be documented
- **"How do I update" answer** — confirm the command is still correct

---

## 8. Verify locally

```bash
npm pack --dry-run --json
node bin/data-vizard.js install --dry-run --root /tmp/data-vizard-local-smoke
```

---

## 9. Commit, push, open PR

```bash
git add -p   # stage only release files — never commit .env or credentials
git commit -m "Shipping vX.Y.Z"
git push
gh pr create ...
```

---

## 10. After PR is merged: publish to npm

```bash
npm publish
```

Then smoke-test the published package:

```bash
cd /tmp
NPM_CONFIG_CACHE=/tmp/data-vizard-npm-cache npx --yes data-vizard@X.Y.Z --version
NPM_CONFIG_CACHE=/tmp/data-vizard-npm-cache npx --yes data-vizard@X.Y.Z install --dry-run --root /tmp/data-vizard-published-smoke
```

---

## Notes

- `data-vizard install` is both install and update — no separate update subcommand exists yet.
- `claude plugin uninstall data-vizard@data-vizard` and `claude plugin marketplace remove data-vizard` are two separate operations; both are needed for a clean Claude Code uninstall. A `data-vizard uninstall` CLI command is planned for 0.1.6.
- `.herenow/state.json` contains claim tokens — never commit it (already in `.gitignore`).
- Do not skip the smoke test after publishing; npm cache can serve a stale tarball.
