# AthR Agent Guidance

Start with [CONTEXT.md](CONTEXT.md) for domain language and [docs/README.md](docs/README.md) for the documentation index

## Agent skills

- Planning or specs: read [docs/agents/issue-tracker.md](docs/agents/issue-tracker.md), [docs/agents/triage-labels.md](docs/agents/triage-labels.md), and [docs/agents/domain.md](docs/agents/domain.md)
- Product behavior: follow [docs/product/PRD.md](docs/product/PRD.md), [docs/product/FUNCTIONAL_REQUIREMENTS.md](docs/product/FUNCTIONAL_REQUIREMENTS.md), and the focused product documents they reference
- Architecture or schema work: follow [docs/architecture/TECHNICAL_ARCHITECTURE.md](docs/architecture/TECHNICAL_ARCHITECTURE.md), [docs/architecture/STATE_MACHINES.md](docs/architecture/STATE_MACHINES.md), and relevant ADRs under `docs/adr/`
- UI work: follow [docs/design/DESIGN_SYSTEM.md](docs/design/DESIGN_SYSTEM.md), [docs/design/VISUAL_DIRECTION.md](docs/design/VISUAL_DIRECTION.md), and [docs/components/README.md](docs/components/README.md)
- Navigation work: read [docs/components/navigation/PRIMARY_NAVIGATION.md](docs/components/navigation/PRIMARY_NAVIGATION.md) before changing the approved navigation primitive or AthR composition
- Frontend setup: follow [docs/setup/FRONTEND_SETUP.md](docs/setup/FRONTEND_SETUP.md) before claiming Component Bank code is runtime-verified
- Testing work: follow [docs/quality/QA_SECURITY_EDGE_CASES.md](docs/quality/QA_SECURITY_EDGE_CASES.md) and the verification gate in the relevant Component Bank entry

Prefer the narrowest relevant document rather than loading the full docs tree

Use `/components/ui` for reusable UI primitives and `/components/athr/<domain>` for AthR product compositions

When documents conflict, treat `CONTEXT.md` as authoritative for terminology, ADRs as authoritative for accepted architectural decisions, the newest approved focused spec as authoritative for feature behavior, and `docs/design/DESIGN_SYSTEM.md` as authoritative for theme usage
