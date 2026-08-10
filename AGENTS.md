# AthR Agent Guidance

## Hard pre-coding gate

Before **any implementation work**, run the workflow in [`Starter-Prompt.md`](Starter-Prompt.md)

The agent must prepare and verify the complete coding desk before editing implementation code

The desk must finish with:

```text
DESK STATUS: READY
```

If the desk is `BLOCKED`, stop implementation and report the exact blockers

Do not mark tools, skills, tests, MCP access, or runtime checks as passing from assumption

Required baseline skills live in [`docs/agents/REQUIRED_SKILLS_PACK82.md`](docs/agents/REQUIRED_SKILLS_PACK82.md)

The baseline requires:

- `find-skills` installed and usable
- Pack82 verified and installed as 82/82
- 21st agent skills installed with `npx @21st-dev/cli install-skill`
- relevant process skills selected for the current task

Start with [CONTEXT.md](CONTEXT.md) for domain language and [docs/README.md](docs/README.md) for the documentation index

## 21st.dev first

For any UI task, read [docs/agents/21ST_AGENT_SETUP.md](docs/agents/21ST_AGENT_SETUP.md) and [docs/components/21ST_COMPONENT_WORKFLOW.md](docs/components/21ST_COMPONENT_WORKFLOW.md) before implementation

The required 21st bootstrap includes:

```bash
npm i -g @21st-dev/cli
npx @21st-dev/cli install-skill
```

Authenticate through local login, OAuth, or the `API_KEY_21ST` environment variable according to the active client

The active coding agent must then use 21st through MCP or CLI to search existing components, screens, templates, and themes before creating common custom UI

Default order:

```text
Coding Desk READY
-> Existing AthR Component Bank
-> 21st.dev complete component or screen
-> 21st.dev primitive combination
-> existing shadcn primitive in the repo
-> custom implementation only with a documented reason
```

Keep real `21st_sk_...` credentials outside tracked repository content

If MCP is unavailable, use the 21st CLI; infrastructure failure does not remove the skills-bootstrap or search-before-build requirements

Adapt selected 21st modules to AthR domain behavior, Soft Pop tokens, accessibility, responsive behavior, and product requirements

### Canonical public landing hero

The public landing hero is already selected and is not an open design search

Before changing or implementing it, read [`docs/components/landing/CANONICAL_HERO.md`](docs/components/landing/CANONICAL_HERO.md)

Reference implementation:

`components/ui/hero.tsx`

Preserve the approved oversized stacked typography, overlapping professional evidence cards, hand-drawn accents, circular CTA, motion character, and rounded transition into the next section

Adapt product copy, routes, evidence, and tokens to AthR rather than replacing the hero with a conventional SaaS template or a different 21st.dev hero

21st.dev remains required for supporting components and the canonical Soft Pop theme, but another hero candidate does not override this approved Component Bank entry

## Agent skills

- Coding-session bootstrap: follow [`Starter-Prompt.md`](Starter-Prompt.md)
- Required skills baseline: follow [`docs/agents/REQUIRED_SKILLS_PACK82.md`](docs/agents/REQUIRED_SKILLS_PACK82.md)
- Planning or specs: read [docs/agents/issue-tracker.md](docs/agents/issue-tracker.md), [docs/agents/triage-labels.md](docs/agents/triage-labels.md), and [docs/agents/domain.md](docs/agents/domain.md)
- Product behavior: follow [docs/product/PRD.md](docs/product/PRD.md), [docs/product/FUNCTIONAL_REQUIREMENTS.md](docs/product/FUNCTIONAL_REQUIREMENTS.md), and the focused product documents they reference
- Architecture or schema work: follow [docs/architecture/TECHNICAL_ARCHITECTURE.md](docs/architecture/TECHNICAL_ARCHITECTURE.md), [docs/architecture/STATE_MACHINES.md](docs/architecture/STATE_MACHINES.md), and relevant ADRs under `docs/adr/`
- UI work: first pass the coding-desk gate, then follow [docs/agents/21ST_AGENT_SETUP.md](docs/agents/21ST_AGENT_SETUP.md), [docs/components/21ST_COMPONENT_WORKFLOW.md](docs/components/21ST_COMPONENT_WORKFLOW.md), [docs/design/DESIGN_SYSTEM.md](docs/design/DESIGN_SYSTEM.md), [docs/design/VISUAL_DIRECTION.md](docs/design/VISUAL_DIRECTION.md), and [docs/components/README.md](docs/components/README.md)
- Landing hero work: follow [`docs/components/landing/CANONICAL_HERO.md`](docs/components/landing/CANONICAL_HERO.md); this selected hero overrides generic hero discovery while preserving the rest of the 21st sourcing workflow
- Navigation work: read [docs/components/navigation/PRIMARY_NAVIGATION.md](docs/components/navigation/PRIMARY_NAVIGATION.md) before changing the approved navigation primitive or AthR composition
- Frontend setup: follow [docs/setup/FRONTEND_SETUP.md](docs/setup/FRONTEND_SETUP.md) before claiming Component Bank code is runtime-verified
- Testing work: follow [docs/quality/QA_SECURITY_EDGE_CASES.md](docs/quality/QA_SECURITY_EDGE_CASES.md) and the verification gate in the relevant Component Bank entry

Prefer the narrowest relevant document rather than loading the full docs tree

Use `/components/ui` for reusable UI primitives and `/components/athr/<domain>` for AthR product compositions

When documents conflict, treat `Starter-Prompt.md` as authoritative for pre-coding readiness, `CONTEXT.md` as authoritative for terminology, ADRs as authoritative for accepted architectural decisions, the newest approved focused spec as authoritative for feature behavior, `docs/agents/21ST_AGENT_SETUP.md` as authoritative for 21st connectivity/credentials, `docs/agents/REQUIRED_SKILLS_PACK82.md` as authoritative for the baseline skill manifest, `docs/components/21ST_COMPONENT_WORKFLOW.md` as authoritative for UI sourcing, `docs/components/landing/CANONICAL_HERO.md` as authoritative for the selected public landing hero, and `docs/design/DESIGN_SYSTEM.md` as authoritative for theme usage
