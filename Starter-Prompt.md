# AthR Coding Desk Starter Prompt

Use this prompt at the beginning of **every coding session** for AthR.

This is a hard pre-coding gate.

**Do not edit implementation code, create components, change schemas, install feature dependencies, or start feature work until the Coding Desk is ready and every applicable gate below has been checked.**

If a required tool cannot be prepared, stop and report the exact blocker. Do not silently downgrade the workflow.

---

## Mission

Prepare the complete AthR engineering workspace before coding, then execute the requested task with the correct skills, tools, component sources, tests, and review workflow.

The desired behavior is:

```text
prepare -> verify -> plan -> implement -> test -> review -> verify -> report
```

Not:

```text
start coding -> discover missing tools later -> improvise -> patch around failures
```

---

# Phase 0: Read the Repository Contract

Before touching implementation code, read:

1. `AGENTS.md`
2. `CONTEXT.md`
3. `docs/README.md`
4. the narrowest product/spec docs relevant to the current task
5. `docs/agents/21ST_AGENT_SETUP.md`
6. `docs/agents/REQUIRED_SKILLS_PACK82.md`
7. `docs/components/21ST_COMPONENT_WORKFLOW.md` for UI work
8. `docs/design/DESIGN_SYSTEM.md` for UI work
9. the relevant Component Bank entry if one exists

Do not load the entire docs tree without a reason.

Completion criterion: the agent can state the current task, governing spec, domain terms, relevant architecture constraints, and required verification gate.

---

# Phase 1: Repository and Git Desk

Inspect the workspace before editing:

```bash
git status --short --branch
git remote -v
git log -5 --oneline
```

Confirm:

- correct repository
- correct branch or isolated worktree
- no unrelated user changes will be overwritten
- package manager convention is known
- current implementation state is understood

For non-trivial feature work, use an isolated worktree when the active workflow supports it.

Never use destructive Git operations to make the workspace look clean.

Completion criterion: repository state and isolation strategy are explicit.

---

# Phase 2: Base Toolchain Desk

Detect the actual project runtime and verify the tools it requires.

For the AthR frontend target, verify or prepare:

- Node.js
- the repository package manager
- TypeScript
- Next.js
- Tailwind CSS
- shadcn project structure
- `@/*` import alias
- `/components/ui`
- `/components/athr`
- `@/lib/utils`

If the runnable frontend has not been initialized yet, follow:

`docs/setup/FRONTEND_SETUP.md`

Do not fake typecheck/build status when the runtime does not exist.

Completion criterion: the agent can run the project's real install, lint, typecheck, test, and build commands, or has reported the exact missing runtime prerequisite.

---

# Phase 3: 21st.dev CLI and Skills Gate

21st.dev is a required AthR UI source and agent capability.

Install the CLI if necessary:

```bash
npm i -g @21st-dev/cli
```

Authenticate locally when interactive login is available:

```bash
21st login
```

For CI or non-interactive clients use `API_KEY_21ST` through the environment or secret store. Never place a real key in tracked files.

## Mandatory 21st skills install

Before UI coding, run:

```bash
npx @21st-dev/cli install-skill
```

This is a required bootstrap step, not an optional enhancement.

The current official 21st skill package covers searching, retrieving/installing, AI iteration, registry operations, and design synchronization.

Verify the CLI can be used before relying on it:

```bash
21st whoami
21st search "professional social profile"
```

Completion criterion:

```text
21st CLI available: yes
21st authentication available: yes
21st skills installed: yes
21st search works: yes
```

No UI coding starts until this gate passes or a concrete infrastructure blocker is reported.

---

# Phase 4: 21st MCP Gate

Connect the active coding agent to the canonical MCP endpoint where the client supports it:

`https://21st.dev/api/mcp`

Use:

`docs/agents/21ST_AGENT_SETUP.md`

for the exact Claude Code, Claude Desktop, Codex, or generic MCP-client procedure.

Credential rules:

- prefer OAuth when supported
- otherwise use `API_KEY_21ST`
- keep real secrets outside Git
- never paste a real `21st_sk_...` value into tracked config or docs

Verify the active client sees the 21st tools.

Examples:

```bash
claude mcp list
codex mcp list
```

If MCP is unavailable but the CLI works, the CLI is the fallback for 21st discovery and installation. MCP failure does not remove the search-before-build rule.

Completion criterion: MCP is connected, or the CLI fallback is verified and the MCP limitation is explicit.

---

# Phase 5: `find-skills` Gate

The agent must have the `find-skills` capability before coding so it can discover missing specialist capabilities instead of improvising them.

Bootstrap it first:

```bash
npx skills add vercel-labs/skills@find-skills -g -y
```

Use the Skills CLI to search by job and verify source ownership:

```bash
npx skills find "<task capability>"
npx skills find "<skill-name>" --owner <owner>
```

Do not install a fuzzy similarly named result without checking its source.

Community skills are executable instructions and must be treated as supply-chain dependencies: verify owner, repository, intended skill, and relevance before installation.

Completion criterion: `find-skills` is installed and usable.

---

# Phase 6: Mandatory Pack82 Skills Gate

Install and verify the complete required AthR baseline defined in:

`docs/agents/REQUIRED_SKILLS_PACK82.md`

The manifest contains exactly 82 required skills covering:

- Impeccable design review and refinement
- design taste and high-end frontend quality
- anti-slop review
- Matt Pocock engineering workflows
- Superpowers planning, TDD, debugging, worktrees, review, and verification
- mobile and responsive UI
- browser and computer-use tooling
- clean-code guardrails

For every manifest entry:

1. verify it through `find-skills` / `npx skills find`
2. confirm the expected owner/source
3. install the exact manifest skill
4. report any failure immediately

After installation:

```bash
npx skills check
```

The full pack must be available on the coding desk, but do **not** load all 82 skills into context for every task. Invoke only the skills whose triggers apply to the current phase.

Completion criterion:

```text
find-skills installed: yes
Pack82 checked: 82/82
Pack82 installed: 82/82
skills check reviewed: yes
```

If the count is not 82/82, coding is blocked unless the missing package itself is unavailable and the blocker is explicitly reported.

---

# Phase 7: Process Skills Gate

Before implementation, determine the required process skills for the task.

At minimum apply the relevant triggers from the installed workflows:

- `using-superpowers` at session/workflow start
- `brainstorming` before new behavior or creative implementation
- `writing-plans` for multi-step implementation
- `using-git-worktrees` when isolation is needed
- `test-driven-development` or `tdd` for feature and bug implementation
- `systematic-debugging` / `diagnosing-bugs` for unexplained failures
- `codebase-design` for module/interface design
- `domain-modeling` when domain language or boundaries change
- `requesting-code-review` / code review before integration
- `verification-before-completion` before any completion claim

Do not treat skills as decoration. Follow the active skill's process and completion criteria.

Completion criterion: the agent states which skills are active for the current task and why.

---

# Phase 8: UI Sourcing Gate

For every UI requirement, the sourcing order is mandatory:

```text
Existing AthR Component Bank
-> 21st.dev complete component or screen
-> 21st.dev primitive combination
-> existing shadcn primitive
-> custom implementation only with documented justification
```

Before coding a navbar, card, profile, gallery, feed, messaging view, filter bar, dialog, form, settings screen, opportunity surface, or other common UI pattern:

1. search `components/ui`
2. search `components/athr`
3. search `docs/components`
4. run a meaningful 21st search
5. inspect the strongest candidates
6. install/retrieve the selected candidate using 21st CLI, MCP, or its published registry command
7. adapt it to AthR

Do not recreate an available 21st module from memory or screenshots.

Do not rebuild a complete high-quality component from low-level primitives only to make it look custom.

Custom code requires a documented product, accessibility, security, or adaptation-cost reason.

Completion evidence for a UI task must include:

```text
21st access: MCP / CLI
21st search performed: yes
Candidate selected: <identifier or URL>
Install method: <method>
Primitive path: <path>
AthR composition: <path if applicable>
Dependencies: <list>
```

---

# Phase 9: Design Desk Gate

Canonical base design system:

**Soft Pop by serafimcloud on 21st.dev**

Reference:

`https://21st.dev/@serafimcloud/themes/soft-pop`

Follow:

- `docs/design/DESIGN_SYSTEM.md`
- `docs/design/VISUAL_DIRECTION.md`
- Component Bank rules

Imported UI must be normalized to AthR semantics and Soft Pop tokens.

Use real product content structure and realistic fixture data. Remove source demo brands and irrelevant showcase content.

Use Lucide as the default generic icon set unless a real brand mark or another justified icon source is required.

For visual quality, invoke the relevant Pack82 design-review skills rather than relying on generic aesthetic judgement alone.

Completion criterion: the agent can identify the design source, tokens, selected component provenance, and visual-review skills for the task.

---

# Phase 10: Test and Browser Desk

Before implementation begins, identify how the result will be verified.

The coding desk should have access to the appropriate combination of:

- unit/integration test runner
- typecheck
- lint
- production build
- browser or browser-agent tooling
- responsive inspection
- accessibility inspection
- console/runtime error inspection

Use installed browser capabilities from Pack82 when appropriate instead of judging UI only from source code.

For a visual feature, plan verification for at least:

- desktop
- narrow/mobile viewport
- keyboard focus
- empty/loading/error states when applicable
- reduced motion where motion exists
- actual Soft Pop theme application
- browser console errors

Completion criterion: verification commands and visual/browser checks are named before implementation.

---

# Phase 11: Security and Secret Desk

Before coding:

- inspect `.gitignore`
- use `.env.example` only for variable names/placeholders
- keep `API_KEY_21ST` and all credentials outside tracked files
- do not copy secrets from chat into repository content
- do not expose secrets in screenshots, fixtures, tests, docs, shell history examples, or CI logs

If a credential is exposed, stop and require rotation/revocation before normal work continues.

Completion criterion: secret handling path is explicit and no real credential is present in tracked content.

---

# CODING DESK READY Gate

Before the first implementation edit, output this checklist with real status:

```text
ATHR CODING DESK

Repository inspected: PASS/FAIL
Correct branch/worktree: PASS/FAIL
Relevant specs loaded: PASS/FAIL
Runtime/toolchain ready: PASS/FAIL
21st CLI available: PASS/FAIL
21st authenticated: PASS/FAIL
21st skills installed: PASS/FAIL
21st MCP or CLI fallback verified: PASS/FAIL
find-skills installed: PASS/FAIL
Pack82 verified: <count>/82
Pack82 installed: <count>/82
Relevant process skills selected: PASS/FAIL
Component Bank searched if UI: PASS/FAIL/N/A
21st searched if UI: PASS/FAIL/N/A
Soft Pop source loaded if UI: PASS/FAIL/N/A
Test commands identified: PASS/FAIL
Browser/visual verification identified if UI: PASS/FAIL/N/A
Secret scan/handling checked: PASS/FAIL

DESK STATUS: READY / BLOCKED
BLOCKERS: <none or exact list>
```

**Only `DESK STATUS: READY` permits coding.**

Do not mark a check PASS from assumption. Use direct evidence from the active workspace.

---

# Implementation Rules After the Desk Is Ready

Once the gate passes:

1. follow the approved spec or current user request
2. use TDD where applicable
3. keep changes scoped
4. prefer deep reusable modules over duplicated behavior
5. reuse AthR Component Bank and 21st sources
6. preserve domain vocabulary from `CONTEXT.md`
7. keep authorization server/database enforced where required
8. keep UI responsive and accessible
9. run targeted verification frequently
10. run full applicable verification before claiming completion
11. request/review code quality before integration
12. report evidence, not confidence

---

# Final Completion Gate

Before saying the coding task is complete:

- run the fresh test command
- run fresh typecheck
- run fresh lint where configured
- run fresh production build where configured
- inspect the actual browser result for UI work
- check responsive behavior
- check accessibility basics
- inspect console/runtime errors
- perform the relevant code-review workflow
- confirm no secret was added
- confirm no duplicate/reinvented component was introduced
- update the Component Bank when UI modules changed

Use `verification-before-completion` before making a success claim.

Final report must distinguish:

```text
PASS
FAIL
NOT AVAILABLE
BLOCKED
```

Never convert `NOT AVAILABLE` into `PASS`.

---

# Absolute Rules

1. **Coding desk first. Coding second.**
2. **Install 21st skills with `npx @21st-dev/cli install-skill` before UI coding.**
3. **Install and use `find-skills` before relying on the skills pack.**
4. **Pack82 is the required baseline and must resolve to 82/82 before coding.**
5. **Use the smallest relevant skill set during each task even though Pack82 is installed.**
6. **Search 21st.dev before creating common UI.**
7. **Reuse complete components instead of rebuilding equivalent UI.**
8. **Soft Pop is the canonical base design system.**
9. **Never commit real 21st or other credentials.**
10. **Never claim tests/build/review passed without fresh evidence.**
11. **Infrastructure failure is a blocker to report, not permission to silently skip a gate.**
12. **If the desk is BLOCKED, stop implementation and report the blocker.**
