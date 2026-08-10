# AthR Agent Guidance

Start with [CONTEXT.md](CONTEXT.md) for domain language and [docs/README.md](docs/README.md) for the documentation index

## Agent skills

- Planning or specs: read [docs/agents/issue-tracker.md](docs/agents/issue-tracker.md), [docs/agents/triage-labels.md](docs/agents/triage-labels.md), and [docs/agents/domain.md](docs/agents/domain.md)
- Product behavior: follow [docs/product/PRD.md](docs/product/PRD.md) and the focused product documents it references
- Architecture or schema work: follow [docs/architecture/TECHNICAL_ARCHITECTURE.md](docs/architecture/TECHNICAL_ARCHITECTURE.md), [docs/architecture/PERMISSIONS_MATRIX.md](docs/architecture/PERMISSIONS_MATRIX.md), and relevant ADRs under `docs/adr/`
- UI work: follow [docs/design/VISUAL_DIRECTION.md](docs/design/VISUAL_DIRECTION.md) and [docs/design/SCREEN_AND_INTERACTION_SYSTEM.md](docs/design/SCREEN_AND_INTERACTION_SYSTEM.md)
- Testing or release work: follow [docs/quality/QA_SECURITY_EDGE_CASES.md](docs/quality/QA_SECURITY_EDGE_CASES.md), [docs/quality/ACCEPTANCE_TEST_MATRIX.md](docs/quality/ACCEPTANCE_TEST_MATRIX.md), and [docs/operations/RELEASE_RUNBOOK.md](docs/operations/RELEASE_RUNBOOK.md)

Prefer the narrowest relevant document rather than loading the full docs tree

When documents conflict, treat `CONTEXT.md` as authoritative for terminology, ADRs as authoritative for accepted architectural decisions, and the newest approved focused spec as authoritative for feature behavior
