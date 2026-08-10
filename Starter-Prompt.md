# AthR Coding Desk Starter Prompt

Use this prompt at the beginning of **every coding session** for AthR

This is a hard pre-coding gate

**Do not edit implementation code, create components, change schemas, install feature dependencies, or start feature work until the Coding Desk is ready and every applicable gate below has been checked**

If a required tool cannot be prepared, stop and report the exact blocker. Do not silently downgrade the workflow

## Mission

Prepare the complete AthR engineering workspace before coding, then execute the requested task with the correct skills, tools, component sources, tests, and review workflow

```text
prepare -> verify -> plan -> implement -> test -> review -> verify -> report
```

## Phase 0: Read the Repository Contract

Before implementation, read:

1. `AGENTS.md`
2. `CONTEXT.md`
3. `docs/README.md`
4. the narrowest product/spec docs relevant to the task
5. `docs/adr/0004-vite-react-frontend.md`
6. `docs/agents/21ST_AGENT_SETUP.md`
7. `docs/agents/REQUIRED_SKILLS_PACK82.md`
8. `docs/components/21ST_COMPONENT_WORKFLOW.md` for UI work
9. `docs/design/DESIGN_SYSTEM.md` for UI work
10. the relevant Component Bank entry if one exists

Do not load the full docs tree without a reason

If an older historical plan references Next.js, ADR 0004 overrides that frontend-runtime decision

## Phase 1: Repository and Git Desk

Inspect:

```bash
git status --short --branch
git remote -v
git log -5 --oneline
```

Confirm:

- correct repository
- correct branch/worktree
- no unrelated user changes will be overwritten
- package manager convention is known
- current implementation state is understood

Use an isolated worktree for non-trivial work when appropriate

Never use destructive Git operations merely to obtain a clean tree

## Phase 2: Vite Runtime Desk

AthR's canonical frontend is:

```text
Vite
React
TypeScript
React Router
Tailwind CSS
shadcn/ui-compatible structure
Supabase
```

Next.js is not part of the current architecture

Verify or prepare:

- Node.js
- repository package manager
- Vite
- React
- TypeScript
- React Router
- Tailwind CSS
- shadcn-compatible `components.json`
- `@/*` alias -> `src/*`
- `src/components/ui`
- `src/components/athr`
- `src/features`
- `src/lib`
- `src/app` / router/provider bootstrap
- test runner
- lint
- typecheck
- production build

If the runtime is not initialized, follow:

`docs/setup/FRONTEND_SETUP.md`

Do not introduce:

```text
next/image
next/navigation
next/link
Next.js App Router
React Server Components
Server Actions
Next.js route groups
```

If an approved docs-first reference contains a Next.js-specific import, adapt that import during migration instead of changing the approved product behavior

Completion criterion: the active workspace can run the real Vite install/dev/lint/typecheck/test/build workflow, or the exact missing prerequisite is reported

## Phase 3: Modular App Gate

AthR must remain fully modular

Required responsibility direction:

```text
Route
-> Feature / AthR composition
-> Reusable UI
-> Domain/application logic
-> Data-access boundary
```

Check that the working structure supports feature-local modules such as:

```text
src/features/identity
src/features/onboarding
src/features/profile
src/features/portfolio
src/features/discovery
src/features/network
src/features/opportunities
src/features/messaging
src/features/notifications
```

Do not create empty directories only to satisfy this list

Hard modularity rules:

- route components stay thin
- business logic does not live in generic UI primitives
- presentational components do not configure Supabase clients
- feature-specific state stays inside its feature unless genuinely shared
- generic reusable UI lives in `src/components/ui`
- reusable AthR compositions live in `src/components/athr/<domain>`
- feature-local code lives in `src/features/<feature>`
- avoid god components, catch-all utility files, circular feature imports, and duplicate component variants

## Phase 4: 21st.dev CLI and Skills Gate

Install if necessary:

```bash
npm i -g @21st-dev/cli
```

Authenticate:

```bash
21st login
```

Mandatory skill bootstrap before UI coding:

```bash
npx @21st-dev/cli install-skill
```

Verify:

```bash
21st whoami
21st search "professional social profile"
```

Required result:

```text
21st CLI available: yes
21st authentication available: yes
21st skills installed: yes
21st search works: yes
```

No UI coding starts until this passes or a concrete infrastructure blocker is reported

## Phase 5: 21st MCP Gate

Canonical endpoint:

`https://21st.dev/api/mcp`

Follow:

`docs/agents/21ST_AGENT_SETUP.md`

Credential rules:

- prefer OAuth where supported
- otherwise use `API_KEY_21ST`
- keep secrets outside Git
- never place a real `21st_sk_...` value in tracked files
- never expose 21st credentials through `VITE_*`

Verify the active client sees 21st tools, for example:

```bash
claude mcp list
codex mcp list
```

If MCP is unavailable but CLI works, CLI is the allowed fallback. MCP failure does not remove the search-before-build rule

## Phase 6: `find-skills` Gate

Install:

```bash
npx skills add vercel-labs/skills@find-skills -g -y
```

Use:

```bash
npx skills find "<task capability>"
npx skills find "<skill-name>" --owner <owner>
```

Verify owner/source before installing community skills

Completion criterion: `find-skills` is installed and usable

## Phase 7: Mandatory Pack82 Gate

Use:

`docs/agents/REQUIRED_SKILLS_PACK82.md`

For every manifest entry:

1. verify through `find-skills`
2. confirm owner/source
3. install the exact manifest skill
4. report any failure

Then run:

```bash
npx skills check
```

Required result:

```text
find-skills installed: yes
Pack82 checked: 82/82
Pack82 installed: 82/82
skills check reviewed: yes
```

Install the full baseline, but invoke only the skills relevant to the current task

## Phase 8: Process Skills Gate

Apply the relevant workflows, including where triggered:

- `using-superpowers`
- `brainstorming`
- `writing-plans`
- `using-git-worktrees`
- `test-driven-development` / `tdd`
- `systematic-debugging` / `diagnosing-bugs`
- `codebase-design`
- `domain-modeling`
- `requesting-code-review`
- `verification-before-completion`

Skills are execution procedures, not decoration

## Phase 9: UI Sourcing Gate

Mandatory order:

```text
Existing AthR Component Bank
-> 21st.dev complete component or screen
-> 21st.dev primitive combination
-> existing shadcn primitive
-> custom implementation only with documented justification
```

For UI work:

1. search existing `src/components/ui` and migrated/legacy Component Bank paths
2. search `src/components/athr`
3. search `docs/components`
4. run meaningful 21st searches
5. inspect the strongest candidates
6. install/retrieve the selected candidate
7. adapt it to AthR and Vite
8. normalize it to Soft Pop
9. document it

Do not recreate an available 21st module from screenshots or memory

The canonical public hero is already selected. Follow:

`docs/components/landing/CANONICAL_HERO.md`

Do not replace it with another hero

UI evidence must include:

```text
21st access: MCP / CLI
21st search performed: yes
Candidate selected: <identifier or URL>
Install method: <method>
Primitive path: <path>
AthR composition: <path if applicable>
Dependencies: <list>
```

## Phase 10: Design Gate

Canonical base design:

**Soft Pop by serafimcloud on 21st.dev**

https://21st.dev/@serafimcloud/themes/soft-pop

Follow:

- `docs/design/DESIGN_SYSTEM.md`
- `docs/design/VISUAL_DIRECTION.md`
- Component Bank rules

Imported UI must use AthR semantics and Soft Pop tokens

Remove demo brands/content

Use Lucide for generic UI icons unless a real brand mark or justified source is required

Use the relevant installed design-review skills for visual review

## Phase 11: Supabase and Security Gate

Vite is browser-delivered frontend code

Therefore:

- browser-safe Supabase configuration may use `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- Supabase service-role credentials must never appear in the browser bundle
- private API keys must never use `VITE_*`
- authorization must be enforced using RLS/database constraints
- privileged operations belong behind Supabase Edge Functions or another explicit trusted backend boundary
- presentation components must not construct arbitrary Supabase clients

Inspect `.gitignore` and `.env.example`

Never copy credentials from chat into tracked content

## Phase 12: Test and Browser Gate

Identify the actual verification commands before implementation

Required equivalents:

```bash
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

For visual work verify:

- desktop
- mobile/narrow viewport
- keyboard focus
- loading/empty/error states where applicable
- reduced motion
- Soft Pop
- browser console/runtime errors
- no horizontal overflow

Use browser tooling rather than judging UI only from source code

# CODING DESK READY Gate

Before the first implementation edit, output:

```text
ATHR CODING DESK

Repository inspected: PASS/FAIL
Correct branch/worktree: PASS/FAIL
Relevant specs loaded: PASS/FAIL
ADR 0004 Vite architecture loaded: PASS/FAIL
Vite runtime/toolchain ready: PASS/FAIL
React Router ready: PASS/FAIL
Modular feature boundaries reviewed: PASS/FAIL
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
Supabase/browser-secret boundary reviewed: PASS/FAIL
Test commands identified: PASS/FAIL
Browser/visual verification identified if UI: PASS/FAIL/N/A
Secret scan/handling checked: PASS/FAIL
Next.js runtime imports absent or migration plan explicit: PASS/FAIL

DESK STATUS: READY / BLOCKED
BLOCKERS: <none or exact list>
```

**Only `DESK STATUS: READY` permits coding**

Do not mark a check PASS from assumption

# Implementation Rules After READY

1. follow the approved spec/current request
2. preserve Vite + React architecture
3. keep routes thin and features modular
4. use TDD where applicable
5. reuse AthR Component Bank and 21st sources
6. preserve `CONTEXT.md` vocabulary
7. keep authorization database/backend enforced
8. keep browser secrets out of the bundle
9. keep UI responsive and accessible
10. run targeted verification frequently
11. run full verification before completion
12. update Component Bank documentation when UI modules change

# Final Completion Gate

Before claiming completion:

- run fresh tests
- run fresh typecheck
- run fresh lint
- run fresh Vite production build
- inspect the actual browser result for UI work
- inspect responsive behavior
- inspect accessibility basics
- inspect browser console/runtime errors
- perform relevant code review
- confirm no secret was added
- confirm no duplicate/reinvented component was introduced
- confirm no unintended `next/*` dependency/import was added
- confirm feature boundaries remain modular

Use `verification-before-completion`

Final states must distinguish:

```text
PASS
FAIL
NOT AVAILABLE
BLOCKED
```

Never convert `NOT AVAILABLE` into `PASS`

# Absolute Rules

1. **Coding desk first. Coding second**
2. **Vite + React + TypeScript is the canonical frontend**
3. **Next.js is not part of the current runtime**
4. **AthR must remain fully modular**
5. **Install 21st skills with `npx @21st-dev/cli install-skill` before UI coding**
6. **Install/use `find-skills` before relying on Pack82**
7. **Pack82 must resolve to 82/82 before coding**
8. **Search 21st.dev before creating common UI**
9. **Reuse complete components instead of rebuilding equivalents**
10. **Soft Pop is the canonical base design**
11. **Never expose service-role/private credentials through `VITE_*`**
12. **Never claim tests/build/review passed without fresh evidence**
13. **Infrastructure failure is a blocker to report, not permission to skip a gate**
14. **If the desk is BLOCKED, stop implementation and report the blocker**
