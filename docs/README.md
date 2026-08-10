# AthR Documentation Index

Use this file as the human and agent entry point for project documentation

## Product

- [`product/PRD.md`](product/PRD.md) — buildable product requirements and user stories
- [`product/FUNCTIONAL_REQUIREMENTS.md`](product/FUNCTIONAL_REQUIREMENTS.md) — traceable MVP behavior requirements
- [`product/NON_FUNCTIONAL_REQUIREMENTS.md`](product/NON_FUNCTIONAL_REQUIREMENTS.md) — quality requirements across performance, reliability, security, privacy, accessibility, maintainability, and design-system use
- [`product/PERSONAS_JTBD.md`](product/PERSONAS_JTBD.md) — recurring professional situations and Jobs to Be Done
- [`product/USER_JOURNEYS.md`](product/USER_JOURNEYS.md) — core end-to-end journeys and recovery states
- [`product/PRODUCT_BLUEPRINT.md`](product/PRODUCT_BLUEPRINT.md) — product model and scope framing
- [`product/UX_INFORMATION_ARCHITECTURE.md`](product/UX_INFORMATION_ARCHITECTURE.md) — navigation, route, and UX structure
- [`product/PORTFOLIO_TRUST_NETWORK.md`](product/PORTFOLIO_TRUST_NETWORK.md) — Work Evidence, trust, and Collaboration model

## Domain Language

- [`../CONTEXT.md`](../CONTEXT.md) — canonical AthR domain vocabulary

## Design

- [`design/DESIGN_SYSTEM.md`](design/DESIGN_SYSTEM.md) — Soft Pop theme contract and AthR token rules
- [`design/VISUAL_DIRECTION.md`](design/VISUAL_DIRECTION.md) — visual composition, interaction, and anti-slop rules

Canonical base theme:

https://21st.dev/@serafimcloud/themes/soft-pop

## Component Bank

- [`components/21ST_COMPONENT_WORKFLOW.md`](components/21ST_COMPONENT_WORKFLOW.md) — mandatory 21st.dev-first sourcing workflow; custom UI is the fallback
- [`components/README.md`](components/README.md) — bank rules, status vocabulary, and catalog
- [`components/navigation/PRIMARY_NAVIGATION.md`](components/navigation/PRIMARY_NAVIGATION.md) — approved navigation module
- [`components/feed/POST_CARD.md`](components/feed/POST_CARD.md) — approved Work Feed Post Card module

Current approved bank files:

```text
/components/ui/expandable-tabs.tsx
/components/ui/expandable-tabs.demo.tsx
/components/athr/navigation/primary-nav.tsx
/components/ui/post-card.tsx
/components/ui/post-card.demo.tsx
/components/athr/feed/work-post-card.tsx
```

## Architecture

- [`architecture/TECHNICAL_ARCHITECTURE.md`](architecture/TECHNICAL_ARCHITECTURE.md) — starting technical architecture and data domains
- [`architecture/STATE_MACHINES.md`](architecture/STATE_MACHINES.md) — lifecycle rules for records with meaningful state

## Architectural Decisions

- [`adr/0001-flexible-professional-intent.md`](adr/0001-flexible-professional-intent.md)
- [`adr/0002-work-evidence-is-a-first-class-domain.md`](adr/0002-work-evidence-is-a-first-class-domain.md)
- [`adr/0003-database-enforced-authorization.md`](adr/0003-database-enforced-authorization.md)

## Frontend Setup

- [`setup/FRONTEND_SETUP.md`](setup/FRONTEND_SETUP.md) — initialize Next.js, Tailwind, TypeScript, shadcn, 21st CLI, Soft Pop, and Component Bank dependencies safely in the existing repository

## Roadmap

- [`roadmap/MVP_ROADMAP.md`](roadmap/MVP_ROADMAP.md)

## Quality

- [`quality/QA_SECURITY_EDGE_CASES.md`](quality/QA_SECURITY_EDGE_CASES.md)

## Prompt Pack

- [`prompts/MASTER_PRODUCT_PROMPT.md`](prompts/MASTER_PRODUCT_PROMPT.md)
- [`prompts/UI_UX_MASTER_PROMPT.md`](prompts/UI_UX_MASTER_PROMPT.md) — includes mandatory 21st.dev-first UI sourcing
- [`prompts/IMPLEMENTATION_QA_PROMPT.md`](prompts/IMPLEMENTATION_QA_PROMPT.md)

## Agent Conventions

- [`agents/issue-tracker.md`](agents/issue-tracker.md)
- [`agents/triage-labels.md`](agents/triage-labels.md)
- [`agents/domain.md`](agents/domain.md)
- [`../AGENTS.md`](../AGENTS.md) — includes the non-negotiable component sourcing rule

## Implementation Plans

- [`superpowers/plans/2026-08-10-athr-mvp-foundation.md`](superpowers/plans/2026-08-10-athr-mvp-foundation.md)
- [`superpowers/plans/2026-08-10-athr-portfolio.md`](superpowers/plans/2026-08-10-athr-portfolio.md)
- [`superpowers/plans/2026-08-10-athr-discovery-network.md`](superpowers/plans/2026-08-10-athr-discovery-network.md)
- [`superpowers/plans/2026-08-10-athr-opportunities-messaging.md`](superpowers/plans/2026-08-10-athr-opportunities-messaging.md)
- [`superpowers/plans/2026-08-10-athr-trust-launch.md`](superpowers/plans/2026-08-10-athr-trust-launch.md)

## Working Rule

Load the narrowest document that governs the current task

For UI work, search the existing AthR Component Bank and 21st.dev before custom implementation

Do not duplicate requirements into a new document merely for convenience; link to the existing source of truth and add only new decisions or behavior
