# AthR Component Bank

The Component Bank is the implementation catalog for reusable AthR interface modules

It is not a gallery of visual experiments

Every entry records the module's job, source, interface, product composition, states, responsive behavior, accessibility requirements, dependencies, and verification status

## Canonical Design System

Base theme:

**Soft Pop by serafimcloud on 21st.dev**

https://21st.dev/@serafimcloud/themes/soft-pop

Theme rules live in [`../design/DESIGN_SYSTEM.md`](../design/DESIGN_SYSTEM.md)

All bank modules use theme or AthR semantic tokens rather than one-off palette values

## Module Layers

### UI Primitive

Location:

`/components/ui`

Purpose:

Reusable interaction and presentation modules with little or no AthR domain knowledge

A UI primitive may originate from shadcn, 21st.dev, or a supplied implementation, but it is adapted to the repository's accessibility, token, and interface standards before approval

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

Pages consume AthR compositions and domain modules rather than reimplementing shared behavior

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
| Navigation | Primary Navigation | `components/ui/expandable-tabs.tsx` | `components/athr/navigation/primary-nav.tsx` | Approved, runtime verification pending |

## Required Entry Documentation

Every bank module must document:

1. Job
2. Why it belongs in the bank
3. Source or provenance
4. Primitive interface
5. AthR composition interface when applicable
6. Dependencies
7. Design-system behavior
8. States
9. Responsive behavior
10. Keyboard and screen-reader behavior
11. Empty, loading, error, or unavailable states when relevant
12. Example usage
13. Verification checklist
14. Known limitations

## Selection Rules

Prefer an existing high-quality primitive when it already solves the interaction well

Adapt the primitive rather than rewriting it when the required changes are limited to:

- Tokens
- Accessibility
- Controlled state
- Responsive behavior
- Small interface improvements

Create an AthR composition when product concerns such as routes, Work Evidence, Availability, permissions, or Opportunity state enter the module

Do not make a generic UI primitive know about AthR domain entities

Do not install a visually attractive module if its interaction model conflicts with the product job

Do not keep two modules that solve the same job without a documented reason

## Verification Rule

The repository is currently docs-first and does not yet contain a runnable Next.js/shadcn application

Until the frontend runtime is initialized, code stored under `/components` is **Approved** reference implementation, not **Verified** runtime code

Follow [`../setup/FRONTEND_SETUP.md`](../setup/FRONTEND_SETUP.md) before promoting modules to Implemented or Verified
