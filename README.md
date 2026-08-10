# AthR

**A professional work network and freelance marketplace for digital marketing specialists**

AthR is built around one idea

> **Find the person whose work proves they can solve this**

```text
People -> Work -> Expertise -> Collaboration -> Opportunity
```

AthR is not a generic freelance marketplace, a LinkedIn clone, or a catalog of isolated gigs

Specialists are discovered through relevant work, professional context, collaboration history, trust signals, availability, and fit for the problem at hand

## What AthR is building

AthR combines five connected experiences

- **Professional identity** with expertise, availability, markets, industries, services, and experience
- **Work Evidence** through structured marketing case studies instead of a generic gallery
- **Discovery** driven by relevant work and context instead of follower count
- **Professional network** built around collaborators, recommendations, saves, follows, and a work-focused feed
- **Opportunities** that move naturally from evidence to a qualified conversation, invitation, application, or collaboration

A single account can work, hire, collaborate, and switch intent without creating separate identities

## Built for marketing work

AthR is designed for Performance Marketing, Paid Social, Paid Search, Media Buying, SEO, GEO/AEO, Growth, Content Strategy, Copywriting, Creative Strategy, Social Media, CRM, Lifecycle, Email, CRO, Analytics, Tracking, Marketing Automation, Influencer Marketing, Community, Brand Strategy, Product Marketing, and E-commerce Marketing

## Work Evidence first

The core portfolio object is a structured Marketing Case

A case can capture project/client context, role, collaborators, objective, market, industry, channels, work/media, personal contribution, disclosed results, confidentiality, and verification state

Relevant evidence can include ROAS, CAC, CPL, revenue, CVR, retention, traffic, CTR, or another result appropriate to the work

AthR treats the work itself as a first-class product object rather than an attachment to a profile

## Core product areas

```text
Home / Work Feed
Discover People
Discover Work
Specialist Profiles
Portfolio Builder
Case Studies
Opportunities
Applications and Invites
Messages
Saved
Recommendations
Collaborators
Notifications
```

The MVP intentionally excludes payments, escrow, advanced contracts, meetings, courses, generic communities, gamification, or AI features without a proven product job

## Canonical frontend architecture

AthR uses **Vite + React + TypeScript**

Next.js is not part of the current frontend architecture

Canonical frontend stack:

- Vite
- React
- TypeScript
- React Router
- Tailwind CSS
- shadcn/ui-compatible component structure
- TanStack Query where server-state caching materially helps
- Supabase Postgres
- Supabase Auth
- Supabase Storage
- Supabase Realtime where justified
- `motion` where justified
- `lucide-react` for generic interface icons

The accepted architecture decision is documented in:

[ADR 0004: Vite React Frontend](docs/adr/0004-vite-react-frontend.md)

Earlier Next.js references in historical plans are superseded by ADR 0004

## Fully modular app

AthR must not become a page-first frontend where routing, fetching, permissions, mutations, and presentation accumulate in large route files

Target responsibility model:

```text
Route
  -> Feature / AthR composition
    -> Reusable UI
      -> Domain/application logic
        -> Data-access boundary
```

Recommended direction:

```text
src/
  app/                    # application bootstrap, providers, router
  routes/                 # thin route compositions
  features/
    identity/
    onboarding/
    profile/
    portfolio/
    discovery/
    network/
    opportunities/
    messaging/
    notifications/
  components/
    ui/                   # reusable generic primitives
    athr/                 # reusable AthR compositions
  lib/
    supabase/
    query/
    validation/
    permissions/
  hooks/
  providers/
  types/
  styles/
public/
supabase/
tests/
```

The exact folders may evolve, but feature boundaries, thin routes, typed interfaces, and data-access separation are mandatory

## Supabase security boundary

Vite is a browser application, so authorization cannot depend on frontend visibility checks

Private and user-owned data must be protected by Supabase Row Level Security and database constraints

Only browser-safe values may use `VITE_*`

Examples:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

Never expose service-role credentials, private API keys, or 21st credentials through the Vite bundle

Privileged trusted operations belong behind Supabase Edge Functions or another explicit backend boundary

## Canonical design direction

AthR uses **Soft Pop by serafimcloud on 21st.dev** as the canonical base theme

Canonical theme:

https://21st.dev/@serafimcloud/themes/soft-pop

Soft Pop defines the base tokens for color, surfaces, radius, typography, borders, focus, and elevation

AthR defines product composition, information hierarchy, professional density, Work Evidence presentation, routes, state, and interaction behavior

Read:

- [Design System Contract](docs/design/DESIGN_SYSTEM.md)
- [Visual Direction](docs/design/VISUAL_DIRECTION.md)

## Required public landing hero

The public landing hero is already selected and is **not an open design search**

It preserves:

- oversized stacked typography
- offset headline alignment
- professional evidence cards crossing the typography
- hand-drawn directional accents
- circular CTA treatment
- restrained `motion/react` movement
- rounded transition into three concise product-value blocks

Canonical contract:

[docs/components/landing/CANONICAL_HERO.md](docs/components/landing/CANONICAL_HERO.md)

Reference implementation:

```text
components/ui/hero.tsx
```

During Vite runtime initialization, the component may be normalized under `src/components/ui/hero.tsx` while preserving the `@/components/ui/...` import contract

Agents must adapt this approved hero rather than replace it with a generic SaaS hero or a different 21st.dev template

## Component Bank

Current approved references:

| Area | Module | Primitive | AthR composition | Status |
|---|---|---|---|---|
| Landing | Canonical Public Hero | `components/ui/hero.tsx` | Route composition pending | Required / Approved |
| Navigation | Primary Navigation | `components/ui/expandable-tabs.tsx` | `components/athr/navigation/primary-nav.tsx` | Approved |
| Feed | Post Card | `components/ui/post-card.tsx` | `components/athr/feed/work-post-card.tsx` | Approved |

These references remain runtime-verification pending until the Vite application passes real build, typecheck, accessibility, responsive, and browser checks

Read:

- [Component Bank](docs/components/README.md)
- [21st Component Workflow](docs/components/21ST_COMPONENT_WORKFLOW.md)
- [Frontend Setup](docs/setup/FRONTEND_SETUP.md)

## 21st.dev first

AthR coding agents do not reinvent common UI

```text
Existing AthR Component Bank
-> 21st.dev complete component or screen
-> 21st.dev primitive combination
-> existing shadcn primitive
-> custom implementation only with documented justification
```

Required bootstrap:

```bash
npm i -g @21st-dev/cli
21st login
npx @21st-dev/cli install-skill
```

21st can be used through CLI or MCP depending on the active coding client

Full setup:

[docs/agents/21ST_AGENT_SETUP.md](docs/agents/21ST_AGENT_SETUP.md)

Real 21st credentials must remain outside tracked repository files and must never be exposed through `VITE_*`

## Coding Desk

Every coding session starts from:

[Starter-Prompt.md](Starter-Prompt.md)

Implementation does not begin until the active agent can truthfully report:

```text
DESK STATUS: READY
```

The desk verifies repository state, Vite runtime/toolchain, 21st CLI/MCP, Pack82, `find-skills`, relevant process skills, Component Bank search, Soft Pop, verification commands, browser tooling, accessibility checks, and secret handling

## Required Skills Pack82

Manifest:

[docs/agents/REQUIRED_SKILLS_PACK82.md](docs/agents/REQUIRED_SKILLS_PACK82.md)

The pack is a capability baseline, not an instruction to load all 82 skills into every task

Agents invoke the smallest relevant set for the current phase

## Search direction

Initial discovery uses PostgreSQL full-text search plus structured filters

Vector search is not a default dependency and should only be introduced when product data demonstrates a real need

Follower count must not dominate discovery relevance

## Documentation

Start with the [Documentation Index](docs/README.md)

Core references:

- [PRD](docs/product/PRD.md)
- [Functional Requirements](docs/product/FUNCTIONAL_REQUIREMENTS.md)
- [Non-Functional Requirements](docs/product/NON_FUNCTIONAL_REQUIREMENTS.md)
- [Personas and JTBD](docs/product/PERSONAS_JTBD.md)
- [User Journeys](docs/product/USER_JOURNEYS.md)
- [Product Blueprint](docs/product/PRODUCT_BLUEPRINT.md)
- [UX and Information Architecture](docs/product/UX_INFORMATION_ARCHITECTURE.md)
- [Portfolio, Trust and Professional Network](docs/product/PORTFOLIO_TRUST_NETWORK.md)
- [Technical Architecture](docs/architecture/TECHNICAL_ARCHITECTURE.md)
- [State Machines](docs/architecture/STATE_MACHINES.md)
- [MVP Roadmap](docs/roadmap/MVP_ROADMAP.md)
- [QA, Security and Edge Cases](docs/quality/QA_SECURITY_EDGE_CASES.md)

## Prompt Pack

- [Master Product Prompt](docs/prompts/MASTER_PRODUCT_PROMPT.md)
- [UI and UX Master Prompt](docs/prompts/UI_UX_MASTER_PROMPT.md)
- [Implementation and QA Prompt](docs/prompts/IMPLEMENTATION_QA_PROMPT.md)

## Recommended build order

1. Foundation: Vite runtime, providers, routing, auth, profiles, taxonomy, onboarding
2. Work Evidence: Portfolio Builder, Case Studies, media, collaborators
3. Discovery: search, filters, specialist discovery, work discovery
4. Network: follow, Work Feed, saves, recommendations
5. Opportunities: briefs, opportunities, invites, applications
6. Communication: messaging and notifications
7. Trust: confirmed work relationships, recommendations, verification
8. Later: Crews, contracts, invoices, payments

## Product quality bar

The first release needs to make three experiences meaningfully better than a generic marketplace:

1. Profile
2. Portfolio Builder
3. Discovery

> **Can AthR help someone find the right marketing specialist because the work proves the fit**

## North-star metric

**Qualified work conversations created per active specialist**
