#!/usr/bin/env python3
"""
compute_stats.py
Runs git commands to gather repository statistics and writes them to STATS.md.
Triggered automatically by the update-stats GitHub Actions workflow on every push.
"""

import subprocess
import re
from datetime import datetime, timezone


def run(cmd: str) -> str:
    """Run a shell command and return stripped stdout."""
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    return result.stdout.strip()


# ── Commit count ──────────────────────────────────────────────────────────────
total_commits = run("git rev-list --count HEAD")

# ── First & latest commit dates ───────────────────────────────────────────────
first_commit_date  = run("git log --reverse --format='%ad' --date=short | head -1").strip("'")
latest_commit_date = run("git log -1 --format='%ad' --date=short")

# ── Contributor count ─────────────────────────────────────────────────────────
contributors = run("git shortlog -sn --no-merges | wc -l")

# ── Aggregate line additions / deletions across ALL commits ──────────────────
# git log --numstat prints: <added>\t<removed>\t<file> for every changed file
numstat_output = run("git log --numstat --no-merges --format=''")

total_added   = 0
total_removed = 0

for line in numstat_output.splitlines():
    parts = line.split("\t")
    if len(parts) < 2:
        continue
    added_str, removed_str = parts[0], parts[1]
    # Binary files show '-' instead of a number — skip them
    if added_str.isdigit() and removed_str.isdigit():
        total_added   += int(added_str)
        total_removed += int(removed_str)

net_lines = total_added - total_removed

# ── Per-commit averages ───────────────────────────────────────────────────────
commit_count = int(total_commits) if total_commits.isdigit() else 1
avg_added    = round(total_added   / commit_count, 1)
avg_removed  = round(total_removed / commit_count, 1)

# ── Most recently changed files (last commit) ─────────────────────────────────
last_commit_files = run("git diff-tree --no-commit-id -r --name-only HEAD")
last_commit_file_list = [f"- `{f}`" for f in last_commit_files.splitlines() if f]
last_files_block = "\n".join(last_commit_file_list) if last_commit_file_list else "- *(no files)*"

# ── Most active files (all time, top 10) ──────────────────────────────────────
# Count how many commits touched each file
top_files_raw = run(
    "git log --no-merges --name-only --format='' | sort | uniq -c | sort -rn | head -10"
)
top_files_rows = []
for line in top_files_raw.splitlines():
    line = line.strip()
    if not line:
        continue
    match = re.match(r"(\d+)\s+(.+)", line)
    if match:
        count, filepath = match.group(1), match.group(2)
        top_files_rows.append(f"| `{filepath}` | {count} |")

top_files_table = "\n".join(top_files_rows) if top_files_rows else "| *(none yet)* | 0 |"

# ── Timestamp ────────────────────────────────────────────────────────────────
now_utc = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")

# ── Write STATS.md ────────────────────────────────────────────────────────────
content = f"""# 📊 Repository Stats

> Auto-generated on every push via GitHub Actions. Last updated: **{now_utc}**

---

## 🔢 Overview

| Metric | Value |
|--------|-------|
| 🔁 Total commits | **{total_commits}** |
| 👥 Contributors | **{contributors}** |
| 📅 First commit | `{first_commit_date}` |
| 🕐 Latest commit | `{latest_commit_date}` |

---

## 📝 Line Changes (all time)

| Metric | Value |
|--------|-------|
| ✅ Lines added | **+{total_added:,}** |
| ❌ Lines removed | **-{total_removed:,}** |
| 📐 Net lines | **{net_lines:+,}** |
| ⌀ Avg added per commit | **+{avg_added}** |
| ⌀ Avg removed per commit | **-{avg_removed}** |

---

## 📂 Last Commit — Files Changed

{last_files_block}

---

## 🏆 Most Active Files (all time)

| File | Commits touched |
|------|----------------|
{top_files_table}

---

*This file is maintained automatically — do not edit by hand.*
"""

with open("STATS.md", "w", encoding="utf-8") as fh:
    fh.write(content)

print("✅ STATS.md written successfully.")
print(f"   Commits : {total_commits}")
print(f"   Added   : +{total_added:,}")
print(f"   Removed : -{total_removed:,}")
print(f"   Net     : {net_lines:+,}")
