# Triage Label Vocabulary

Use this vocabulary for AthR GitHub Issues

| Label | Meaning | Exit condition |
|---|---|---|
| `needs-triage` | Newly reported work whose validity, ownership, or scope has not been resolved | The issue has an owner category and a clear next state |
| `needs-info` | Work is blocked by missing facts that cannot be safely inferred from repository context | The missing facts are supplied and reflected in the issue |
| `ready-for-agent` | The issue has sufficient context, dependencies, and acceptance checks for implementation | Implementation begins or the issue is reclassified |
| `ready-for-human` | A human decision, credential, approval, business choice, or external action is required | The human action is completed and recorded |
| `wontfix` | The issue is intentionally rejected, duplicated, obsolete, or outside AthR's current scope | Terminal state unless new evidence changes the decision |

## Usage Rules

- Use one primary triage label at a time
- Preserve domain and priority labels separately from this state vocabulary
- `ready-for-agent` requires a concrete outcome and checkable acceptance conditions
- Do not use `ready-for-agent` as a substitute for prioritization
- Product uncertainty belongs in a focused spec or decision issue before implementation starts
