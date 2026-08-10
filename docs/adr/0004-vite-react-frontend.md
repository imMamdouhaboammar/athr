# ADR 0004: Vite React Frontend

## Status

Accepted

## Decision

AthR's canonical frontend runtime is **Vite + React + TypeScript**

Next.js is not part of the current frontend architecture

This decision supersedes earlier Next.js references in historical plans, prompts, setup notes, and architecture drafts

## Canonical Frontend Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui-compatible component structure
- React Router for client-side routing
- TanStack Query for server-state fetching/caching where it materially improves the feature
- Supabase JavaScript client behind explicit data-access modules
- Supabase Postgres/Auth/Storage/Realtime as required
- `motion` where justified by the interaction
- `lucide-react` for generic interface icons

## Application Shape

AthR is a modular client application rather than a page-first monolith

Recommended responsibility boundaries:

```text
src/
  app/                    # app bootstrap, providers, router composition
  routes/                 # thin route-level compositions
  features/               # feature-local UI, hooks, schemas, queries, actions
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
    athr/                 # reusable AthR-specific compositions
  lib/                    # cross-feature infrastructure and utilities
    supabase/
    query/
    validation/
    permissions/
  hooks/                  # truly cross-feature hooks only
  providers/
  types/
  styles/
public/
supabase/
  migrations/
  seed/
tests/
```

The actual repository may evolve from this layout when evidence supports a better boundary, but the modularity constraints remain mandatory

## Routing

Use React Router

Routes should stay thin and compose feature modules

Route components must not accumulate business logic, direct database calls, large forms, permissions logic, and presentation in the same file

## Data Access

Vite does not provide a server runtime by itself

Therefore:

- browser-safe public/user-scoped Supabase access may use the Supabase client through feature/query modules
- authorization must be enforced by Supabase Row Level Security and database constraints, not by frontend visibility checks
- privileged operations requiring service-role credentials must never execute in the Vite browser bundle
- privileged or trusted server operations should use Supabase Edge Functions or another explicitly introduced backend boundary
- secrets that grant elevated access must never use `VITE_` environment variables

## Environment Variables

Only browser-safe values may use Vite's public environment convention

Examples:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

Never expose service-role keys or private API credentials through `VITE_*`

21st.dev credentials remain local agent/developer credentials and must not be shipped in the application bundle

## Rendering

AthR is initially a Vite client application

Do not introduce Next.js concepts such as:

- App Router
- React Server Components
- Server Actions
- `next/image`
- `next/navigation`
- Next.js route groups

If SSR, static prerendering, or a dedicated API becomes a demonstrated product requirement later, evaluate it as a separate architectural decision rather than silently reintroducing Next.js

## Component Architecture

Canonical UI sourcing order remains:

```text
Existing AthR Component Bank
-> 21st.dev complete component or screen
-> 21st.dev primitive combination
-> existing shadcn primitive
-> custom implementation only with documented justification
```

The canonical public landing hero remains the approved `components/ui/hero.tsx` reference until the Vite runtime is normalized under the final source layout

During runtime initialization, preserve stable aliases such as `@/components/ui/...` rather than changing imports unnecessarily

## Verification

The frontend must expose real project commands equivalent to:

```bash
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

For UI work, browser verification remains required in addition to build/typecheck

## Consequences

Benefits:

- smaller and simpler frontend runtime
- explicit modular boundaries
- no framework-specific server/client ambiguity
- easier independent feature composition
- direct compatibility with React/shadcn/21st components

Tradeoffs:

- no built-in SSR/server actions
- authorization must be designed correctly around Supabase RLS and explicit trusted backend boundaries
- SEO-sensitive public content may later require prerendering/SSR evaluation

These tradeoffs are accepted for the current product direction
