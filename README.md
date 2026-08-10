# AthR

**A professional work network and freelance marketplace for digital marketing specialists**

AthR is built around one idea

> **Find the person whose work proves they can solve this**

The product model is

```text
People -> Work -> Expertise -> Collaboration -> Opportunity
```

AthR is not a generic freelance marketplace, a LinkedIn clone, or a catalog of isolated gigs

Specialists are discovered through relevant work, professional context, collaboration history, trust signals, availability, and fit for the problem at hand

## What AthR is building

AthR combines five connected experiences

- **Professional identity** with expertise, availability, markets, industries, services, and experience
- **Work Evidence** through structured marketing case studies instead of a generic image gallery
- **Discovery** driven by relevant work and context instead of follower count
- **Professional network** built around collaborators, recommendations, saves, follows, and a work-focused feed
- **Opportunities** that move naturally from evidence to a qualified conversation, invitation, application, or collaboration

A single account can work, hire, collaborate, and switch intent without creating separate identities

## Built for marketing work

AthR is designed for disciplines such as

- Performance Marketing
- Paid Social
- Paid Search
- Media Buying
- SEO
- GEO / AEO
- Growth
- Content Strategy
- Copywriting
- Creative Strategy
- Social Media
- CRM and Lifecycle
- Email
- CRO
- Analytics and Tracking
- Marketing Automation
- Influencer Marketing
- Community
- Brand Strategy
- Product Marketing
- E-commerce Marketing

## Work Evidence first

The core portfolio object is a structured Marketing Case

A case can capture

- Project or client
- Specialist role
- Collaborators
- Objective
- Market and industry
- Channels
- Work and media
- Personal contribution
- Results and disclosed metrics
- Confidentiality
- Verification state

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

The MVP intentionally excludes broad additions such as payments, escrow, advanced contracts, meetings, courses, generic communities, gamification, or AI features without a proven product job

## Canonical design direction

AthR uses **Soft Pop by serafimcloud on 21st.dev** as the canonical base theme

Canonical theme

https://21st.dev/@serafimcloud/themes/soft-pop

Soft Pop defines the base tokens for color, surfaces, radius, typography, borders, focus, and elevation

AthR defines the product composition, information hierarchy, professional density, Work Evidence presentation, routes, state, and interaction behavior

Read

- [Design System Contract](docs/design/DESIGN_SYSTEM.md)
- [Visual Direction](docs/design/VISUAL_DIRECTION.md)

## Required public landing hero

The public landing hero is already selected and is **not an open design search**

It uses a distinctive composition built around

- Oversized stacked typography
- Offset headline alignment
- Professional evidence cards crossing the typography
- Hand-drawn directional accents
- Circular CTA treatment
- Restrained `motion/react` movement
- A rounded transition into three concise product-value blocks

The original visual reference has been adapted away from Web3 semantics and toward AthR specialists, work evidence, discovery, and opportunities

Canonical contract

[docs/components/landing/CANONICAL_HERO.md](docs/components/landing/CANONICAL_HERO.md)

Reference implementation

```text
components/ui/hero.tsx
```

Agents must adapt this approved hero rather than replace it with a generic SaaS hero or a different 21st.dev template

## Component Bank

AthR keeps approved reusable UI in a documented Component Bank

Current approved references

| Area | Module | Primitive | AthR composition | Status |
|---|---|---|---|---|
| Landing | Canonical Public Hero | `components/ui/hero.tsx` | Route composition pending | Required / Approved |
| Navigation | Primary Navigation | `components/ui/expandable-tabs.tsx` | `components/athr/navigation/primary-nav.tsx` | Approved |
| Feed | Post Card | `components/ui/post-card.tsx` | `components/athr/feed/work-post-card.tsx` | Approved |

The repository is still docs-first, so these references remain **runtime verification pending** until the frontend application is initialized and passes the real build, typecheck, accessibility, responsive, and browser checks

Read

- [Component Bank](docs/components/README.md)
- [21st Component Workflow](docs/components/21ST_COMPONENT_WORKFLOW.md)
- [Frontend Setup](docs/setup/FRONTEND_SETUP.md)

## 21st.dev first

AthR coding agents do not reinvent common UI

For a new UI requirement the sourcing order is

```text
Existing AthR Component Bank
-> 21st.dev complete component or screen
-> 21st.dev primitive combination
-> existing shadcn primitive
-> custom implementation only with documented justification
```

Required 21st bootstrap

```bash
npm i -g @21st-dev/cli
21st login
npx @21st-dev/cli install-skill
```

21st can be used through the CLI or MCP depending on the active coding client

Full setup for Claude Code, Claude Desktop, Codex, CI, and generic MCP clients

[docs/agents/21ST_AGENT_SETUP.md](docs/agents/21ST_AGENT_SETUP.md)

Real 21st credentials must remain outside tracked repository files

## Coding Desk

Every coding session starts from

[Starter-Prompt.md](Starter-Prompt.md)

This is a hard pre-coding gate

Implementation does not begin until the active agent can report

```text
DESK STATUS: READY
```

The desk checks

- Repository and branch/worktree state
- Relevant product and architecture docs
- Runtime and package-manager readiness
- 21st CLI and authentication
- 21st agent skills
- 21st MCP or verified CLI fallback
- `find-skills`
- Required Pack82 skills
- Relevant planning, TDD, debugging, architecture, design, and review skills
- Component Bank and 21st search for UI tasks
- Soft Pop source for UI tasks
- Test commands
- Browser, responsive, and accessibility checks
- Secret handling

If a required capability is unavailable, the agent reports the blocker instead of silently downgrading the workflow

## Required Skills Pack82

AthR defines an explicit baseline of 82 coding-agent skills covering

- Impeccable design review and refinement
- Frontend design taste
- Anti-slop review
- Matt Pocock engineering workflows
- Superpowers planning, TDD, debugging, worktrees, review, and verification
- Mobile and responsive UI
- Browser and computer-use tooling
- Clean-code guardrails

Manifest

[docs/agents/REQUIRED_SKILLS_PACK82.md](docs/agents/REQUIRED_SKILLS_PACK82.md)

The baseline also requires `find-skills` so agents can discover specialist capabilities rather than improvising them

Installing the pack does not mean loading all 82 skills into every task

Agents invoke the smallest relevant set for the current phase

## Technical direction

The planned application stack is

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui-compatible component structure
- Supabase Postgres
- Supabase Auth
- Supabase Storage
- Supabase Realtime where justified
- PostgreSQL full-text search plus structured filters for the initial discovery implementation

Private and user-owned data should be protected by database-enforced authorization and RLS

Vector search is not a default dependency and should only be introduced when product data demonstrates a real need

## Repository structure

```text
app/                         # Next.js routes once runtime is initialized
components/
  ui/                        # Reusable primitives
  athr/                      # AthR-specific compositions
lib/
public/
docs/
  agents/
  architecture/
  components/
  design/
  product/
  prompts/
  quality/
  roadmap/
  superpowers/
AGENTS.md
CLAUDE.md
GEMINI.md
Starter-Prompt.md
CONTEXT.md
```

## Documentation

Start with the [Documentation Index](docs/README.md)

Core references

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

## Prompt Pack

- [Master Product Prompt](docs/prompts/MASTER_PRODUCT_PROMPT.md)
- [UI and UX Master Prompt](docs/prompts/UI_UX_MASTER_PROMPT.md)
- [Implementation and QA Prompt](docs/prompts/IMPLEMENTATION_QA_PROMPT.md)

## Implementation plans

- [MVP Foundation](docs/superpowers/plans/2026-08-10-athr-mvp-foundation.md)
- [Portfolio and Work Evidence](docs/superpowers/plans/2026-08-10-athr-portfolio.md)
- [Discovery and Network](docs/superpowers/plans/2026-08-10-athr-discovery-network.md)
- [Opportunities and Messaging](docs/superpowers/plans/2026-08-10-athr-opportunities-messaging.md)
- [Trust and Launch](docs/superpowers/plans/2026-08-10-athr-trust-launch.md)

## Recommended build order

1. Foundation: auth, profiles, taxonomy, onboarding
2. Work Evidence: Portfolio Builder, Case Studies, media, collaborators
3. Discovery: search, filters, specialist discovery, work discovery
4. Network: follow, Work Feed, saves, recommendations
5. Opportunities: briefs, opportunities, invites, applications
6. Communication: messaging and notifications
7. Trust: confirmed work relationships, recommendations, verification
8. Later: Crews, contracts, invoices, payments

## Product quality bar

The first release needs to make three experiences meaningfully better than a generic marketplace

1. Profile
2. Portfolio Builder
3. Discovery

The core test remains simple

> **Can AthR help someone find the right marketing specialist because the work proves the fit**

## North-star metric

**Qualified work conversations created per active specialist**
