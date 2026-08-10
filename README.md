# AthR

AthR is a professional work network and freelance marketplace built specifically for digital marketing specialists

The product is centered on one idea:

**People -> Work -> Expertise -> Collaboration -> Opportunity**

AthR is not intended to be another generic freelancer marketplace or a LinkedIn clone

Specialists are discovered through relevant proof of work, professional context, trusted collaboration signals, and current Availability

## Documentation

Start with the full [Documentation Index](docs/README.md)

Core product references:

- [Product Requirements Document](docs/product/PRD.md)
- [Functional Requirements](docs/product/FUNCTIONAL_REQUIREMENTS.md)
- [Non-Functional Requirements](docs/product/NON_FUNCTIONAL_REQUIREMENTS.md)
- [Personas and Jobs to Be Done](docs/product/PERSONAS_JTBD.md)
- [Core User Journeys](docs/product/USER_JOURNEYS.md)
- [Product Blueprint](docs/product/PRODUCT_BLUEPRINT.md)
- [UX and Information Architecture](docs/product/UX_INFORMATION_ARCHITECTURE.md)
- [Portfolio, Trust and Professional Network](docs/product/PORTFOLIO_TRUST_NETWORK.md)
- [Technical Architecture](docs/architecture/TECHNICAL_ARCHITECTURE.md)
- [State Machines](docs/architecture/STATE_MACHINES.md)
- [MVP Roadmap](docs/roadmap/MVP_ROADMAP.md)
- [QA, Security and Edge Cases](docs/quality/QA_SECURITY_EDGE_CASES.md)

## Design System

AthR uses **Soft Pop by serafimcloud on 21st.dev** as the canonical base theme

- [AthR Design System Contract](docs/design/DESIGN_SYSTEM.md)
- [Visual Direction](docs/design/VISUAL_DIRECTION.md)
- Canonical theme: https://21st.dev/@serafimcloud/themes/soft-pop

The theme supplies the base token language; AthR supplies professional information hierarchy, layout, Work Evidence presentation, and interaction rules

## Component Bank

- [Component Bank Index](docs/components/README.md)
- [Primary Navigation](docs/components/navigation/PRIMARY_NAVIGATION.md)
- [Frontend Setup](docs/setup/FRONTEND_SETUP.md)

First approved bank module:

```text
components/ui/expandable-tabs.tsx
components/ui/expandable-tabs.demo.tsx
components/athr/navigation/primary-nav.tsx
```

Reusable UI primitives live under `/components/ui`

AthR product compositions live under `/components/athr/<domain>`

## Prompt Pack

- [Master Product Prompt](docs/prompts/MASTER_PRODUCT_PROMPT.md)
- [UI and UX Master Prompt](docs/prompts/UI_UX_MASTER_PROMPT.md)
- [Implementation and QA Prompt](docs/prompts/IMPLEMENTATION_QA_PROMPT.md)

## Implementation Plans

- [MVP Foundation Plan](docs/superpowers/plans/2026-08-10-athr-mvp-foundation.md)
- [Portfolio and Proof of Work Plan](docs/superpowers/plans/2026-08-10-athr-portfolio.md)
- [Discovery and Network Plan](docs/superpowers/plans/2026-08-10-athr-discovery-network.md)
- [Opportunities and Messaging Plan](docs/superpowers/plans/2026-08-10-athr-opportunities-messaging.md)
- [Trust and Launch Plan](docs/superpowers/plans/2026-08-10-athr-trust-launch.md)

## Recommended Build Order

1. Foundation: auth, Profiles, taxonomy, onboarding
2. Proof of Work: Portfolio Builder, Case Studies, media, Collaborators
3. Discovery: search, filters, Specialist discovery, Work Evidence discovery
4. Network: follow, Work Feed, Saves, Recommendations
5. Opportunity: Project Briefs, Opportunities, Invites, Applications
6. Communication: messaging and notifications
7. Trust: confirmed Work Relationships, Recommendations, verification
8. Later: Crews, contracts, invoices, payments

## MVP Product Rule

The first release should win on three experiences before adding broad marketplace features:

1. Profile
2. Portfolio Builder
3. Discovery

If these three experiences are generic, the product becomes another marketplace

If they are useful, specific to marketing work, and visually distinctive, AthR has a reason to exist
