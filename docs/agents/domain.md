# Domain Documentation Convention

AthR currently uses a single domain context

## Canonical Locations

- Domain language: `/CONTEXT.md`
- Architectural decisions: `/docs/adr/`
- Product requirements: `/docs/product/`
- Technical architecture: `/docs/architecture/`

## Rules

- `CONTEXT.md` contains domain terms and definitions only
- Product behavior belongs in product specs, not the glossary
- Implementation details belong in architecture documents or code
- Record an ADR only for a decision that is costly to reverse, non-obvious without context, and the result of a real trade-off
- When terminology changes, update `CONTEXT.md` first, then align dependent documents

## Future Split

Do not introduce `CONTEXT-MAP.md` until the repository contains genuinely independent bounded contexts that need their own language and decisions
