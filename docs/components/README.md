# AthR Component Bank

The Component Bank is the implementation catalog for reusable AthR interface modules

It is not a gallery of visual experiments

Every entry records the module's job, source, interface, product composition, states, responsive behavior, accessibility requirements, dependencies, and verification status

## Non-Negotiable Sourcing Rule

**Do not reinvent the wheel**

Before creating any new UI module, the coding agent must:

1. Search the existing AthR Component Bank
2. Search 21st.dev
3. Inspect complete components, screens, templates, and primitives that solve the job
4. Install the strongest suitable candidate through the official 21st CLI or its published shadcn registry command
5. Adapt that code to AthR
6. Only create a custom module when no suitable candidate exists or adaptation is demonstrably worse

The full workflow is defined in [`21ST_COMPONENT_WORKFLOW.md`](21ST_COMPONENT_WORKFLOW.md)

Default decision order:

```text
Existing AthR Component Bank
-> 21st.dev complete component or screen
-> 21st.dev primitive combination
-> existing shadcn primitive in the repo
-> custom implementation only with a documented reason
```

A coding agent must not start implementing a common UI pattern from scratch before completing that search

### Selected-source exception

When a module is already explicitly selected and Approved in this bank, the sourcing search is closed for that module unless the user requests a redesign or the selected source proves technically unusable

The public landing hero is one such selected module

Follow [`landing/CANONICAL_HERO.md`](landing/CANONICAL_HERO.md) and adapt `components/ui/hero.tsx`

Do not replace it with a different generic 21st.dev hero merely because another candidate is available

21st.dev remains required for its supporting components, dependencies, and canonical Soft Pop source

## Canonical Design System

Base theme:

**Soft Pop by serafimcloud on 21st.dev**

https://21st.dev/@serafimcloud/themes/soft-pop

Theme rules live in [`../design/DESIGN_SYSTEM.md`](../design/DESIGN_SYSTEM.md)

All bank modules use theme or AthR semantic tokens rather than one-off palette values

21st.dev supplies component source and interaction references

Soft Pop supplies the canonical base design tokens

AthR supplies product semantics, information architecture, domain state, permissions, and final composition

## Module Layers

### UI Primitive

Location:

`/components/ui`

Purpose:

Reusable interaction and presentation modules with little or no AthR domain knowledge

A UI primitive should preferably originate from the existing bank, 21st.dev, or shadcn rather than being generated from scratch

After installation it is adapted to the repository's accessibility, token, responsive, and interface standards before approval

### AthR Composition

Location:

`/components/athr/<domain>`

Purpose:

Product-specific modules that combine UI primitives with AthR routes, terminology, data, permissions, or workflow state

Keep domain knowledge here rather than embedding it into general primitives

### Page Composition

Location once the application exists:

`/app/...`

Purpose:

Route-level composition only

For complex surfaces, search 21st.dev screens and templates before composing the page from low-level primitives

Pages consume approved AthR compositions and domain modules rather than reimplementing shared behavior

## Status Vocabulary

**Candidate**
A module being evaluated; not yet part of the product standard

**Approved**
The design and interface are accepted, but the runtime may not yet exist or verification may still be pending

**Implemented**
The module exists in the application code and required dependencies are present

**Verified**
The module passes typecheck, tests where applicable, responsive review, accessibility review, and theme review in the real runtime

## Bank

| Area | Module | Primitive | AthR composition | Status |
|---|---|---|---|---|
| Landing | Canonical Public Hero | `components/ui/hero.tsx` | route composition pending | Required / Approved, runtime verification pending |
| Navigation | Primary Navigation | `components/ui/expandable-tabs.tsx` | `components/athr/navigation/primary-nav.tsx` | Approved, runtime verification pending |
| Feed | Post Card | `components/ui/post-card.tsx` | `components/athr/feed/work-post-card.tsx` | Approved, runtime verification pending |

## Required Entry Documentation

Every bank module must document:

1. Job
2. Why it belongs in the bank
3. Source or provenance
4. 21st.dev identifier or source URL when sourced there
5. Install command used when available
6. Why the selected candidate was chosen
7. Primitive interface
8. AthR composition interface when applicable
9. Dependencies
10. Design-system behavior
11. States
12. Responsive behavior
13. Keyboard and screen-reader behavior
14. Empty, loading, error, or unavailable states when relevant
15. Example usage
16. Adaptations made after installation
17. Verification checklist
18. Known limitations

## Selection Rules

Prefer a complete high-quality 21st.dev module when it already solves the interaction well

Do not rebuild the same result manually from generic primitives merely to make it custom

Adapt the imported module rather than rewriting it when the required changes are limited to:

- Tokens
- Accessibility
- Controlled state
- Responsive behavior
- Product content
- Domain semantics
- Routes
- Small interface improvements

Create an AthR composition when product concerns such as routes, Work Evidence, Availability, permissions, or Opportunity state enter the module

Do not make a generic UI primitive know about AthR domain entities

Do not install a visually attractive module if its interaction model conflicts with the product job

Do not keep two modules that solve the same job without a documented experiment or replacement reason

## Custom Implementation Exception

A custom module is acceptable only when one or more of these conditions are documented:

- no useful existing AthR module exists
- a meaningful 21st.dev search found no relevant candidate
- existing candidates conflict with the required product behavior
- adaptation cost is higher than a focused implementation
- available candidates fail important accessibility or responsive requirements
- the behavior is genuinely AthR-specific rather than a generic UI pattern
- privacy or security requirements make the existing implementation unsuitable

Preference alone is not sufficient justification

## Agent Evidence

Every completed UI task should be able to report:

```text
21st search performed: yes/no/not applicable because selected bank source
Candidate selected: identifier, URL, or approved bank entry
Install method: 21st add / shadcn command / existing AthR module / supplied selected source
Primitive path: path
AthR composition path: path if applicable
Dependencies added: list
Adaptations made: summary
Soft Pop applied: yes/no
Responsive review: pass/fail
Accessibility review: pass/fail
Typecheck: pass/fail
Build: pass/fail
```

If `21st search performed` is `no`, the task needs either a documented exception or an already-selected Approved Component Bank source such as the canonical public hero

## Verification Rule

The repository is currently docs-first and does not yet contain a runnable Next.js/shadcn application

Until the frontend runtime is initialized, code stored under `/components` is **Approved** reference implementation, not **Verified** runtime code

Follow [`../setup/FRONTEND_SETUP.md`](../setup/FRONTEND_SETUP.md) before promoting modules to Implemented or Verified
