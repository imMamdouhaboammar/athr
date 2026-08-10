# Issue Tracker Convention

AthR uses GitHub Issues in `imMamdouhaboammar/athr` as the durable implementation tracker

## Rules

- Product and architecture documents remain in the repository and are the source of truth for accepted behavior and decisions
- Issues describe implementation slices, defects, decisions that still need resolution, or release work
- An issue that depends on a spec links the exact repository document rather than duplicating it
- An implementation issue should state its user-visible outcome, dependencies, acceptance checks, and relevant domain terms
- Keep one independently reviewable outcome per issue

## Planning Flow

1. Resolve product behavior in the relevant focused spec
2. Record hard-to-reverse architectural decisions in `docs/adr/` when they meet the ADR threshold
3. Create ordered GitHub Issues for implementation
4. Apply the repository triage vocabulary from `docs/agents/triage-labels.md`
5. Move an issue to `ready-for-agent` only when its dependencies and acceptance checks are explicit

## Source of Truth

GitHub Issues track work state

Repository documents define product and architecture state
