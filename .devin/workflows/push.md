---
description: Commit the current working-tree changes and push them to the GitHub remote
---

Commit the current changes and push them to the GitHub remote.

1. Run `git status` and `git diff` to review what changed. If the working tree
   is clean and the branch is already up to date with its upstream, report that
   there is nothing to push and stop.
2. Run `git log -5 --oneline` to match the repo's existing commit message style.
3. Stage the relevant changes with `git add`.
4. Commit with a concise message describing the "why" of the change. If a commit
   message was provided as an argument, use it verbatim.
5. Determine the current branch with `git rev-parse --abbrev-ref HEAD`, then push
   with `git push origin <branch>`. If the branch has no upstream, use
   `git push -u origin <branch>`.
6. Report the commit hash, branch name, and the push result.

Rules:

- NEVER force-push or rewrite history.
- NEVER push when there is nothing to commit and the branch is already up to date.
- Do not modify git config.
