# AthR Frontend Setup

## Current State

AthR's canonical frontend runtime is **Vite + React + TypeScript**

Next.js is not part of the current architecture

See:

`docs/adr/0004-vite-react-frontend.md`

The repository may still contain docs-first component references that predate the runnable frontend. Those references are not considered runtime-verified until they compile and pass browser verification inside the Vite application

## Target Stack

- Vite
- React
- TypeScript
- React Router
- Tailwind CSS
- shadcn/ui-compatible structure
- TanStack Query where useful for server-state caching
- Supabase JavaScript client behind explicit data-access modules
- `motion` where justified
- `lucide-react`

## Target Structure

Recommended direction:

```text
src/
  app/
    router/
    providers/
  routes/
  features/
  components/
    ui/
    athr/
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
components.json
package.json
tsconfig.json
vite.config.ts
```

Do not create empty folders only to imitate this diagram

Create responsibility boundaries when the implementation needs them

## Import Alias

Keep a stable `@/*` alias pointing to `src/*`

Example Vite alias direction:

```ts
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
}
```

The final `vite.config.ts` and `tsconfig` path configuration are the source of truth

## Existing Component Bank Migration

Approved docs-first references currently live at root-level paths such as:

```text
components/ui/hero.tsx
components/ui/expandable-tabs.tsx
components/ui/post-card.tsx
components/athr/navigation/primary-nav.tsx
components/athr/feed/work-post-card.tsx
```

When the Vite runtime is initialized, normalize these under:

```text
src/components/ui/
src/components/athr/
```

while preserving imports such as:

```text
@/components/ui/...
@/components/athr/...
```

Do not duplicate the same component at both paths after migration

Update Component Bank documentation to the final path once migration is complete

## Initialize Vite Safely

The repository is not empty

Do not run a scaffold command that overwrites existing documentation or approved component references

A safe approach is to scaffold in a temporary sibling directory:

```bash
pnpm create vite athr-vite-scaffold --template react-ts
```

Then deliberately merge the required runtime files into AthR

Before removing the temporary scaffold, verify the AthR root contains the expected Vite runtime files, including:

```text
index.html
package.json
tsconfig.json
vite.config.ts
src/
public/
```

Do not retain demo Vite assets or default showcase content

## Install Core Runtime Dependencies

Use the repository package-manager convention discovered by the coding desk

Typical baseline:

```bash
pnpm add react-router-dom @supabase/supabase-js @tanstack/react-query lucide-react motion
```

Install only dependencies actually required by the active implementation

Do not add a global state library by default

## Tailwind CSS

Configure Tailwind using the current supported Vite integration selected by the active toolchain

Do not copy stale framework-specific Tailwind configuration from Next.js examples

The actual generated project configuration is the source of truth

## Initialize shadcn

From the AthR repository root:

```bash
pnpm dlx shadcn@latest init
```

Configure aliases so generated modules resolve through the Vite source tree:

```text
components -> @/components
ui         -> @/components/ui
utils      -> @/lib/utils
```

The generated `components.json` becomes the source of truth after initialization

## Install and Authenticate 21st CLI

21st.dev is AthR's required external UI source

```bash
npm i -g @21st-dev/cli
21st login
npx @21st-dev/cli install-skill
```

For CI or non-interactive usage, keep credentials in the environment/secret store

Never commit a real 21st credential

Never expose a 21st credential through `VITE_*`

## Mandatory 21st Search Workflow

Before implementing a common UI pattern, search the existing AthR Component Bank and 21st.dev first

Examples:

```bash
21st search "professional social navigation"
21st search "social post card"
21st search "portfolio gallery"
21st search "profile header"
21st search "filter bar"
21st search "messaging sidebar"
21st search "project brief form"
```

After selecting a candidate, use the exact install method supplied by 21st or its registry entry

Examples may include:

```bash
21st add <scope>/<component-name>
```

or a published shadcn registry command

Do not construct registry paths from memory

Full policy:

`docs/components/21ST_COMPONENT_WORKFLOW.md`

## UI Sourcing Order

```text
Existing AthR Component Bank
-> 21st.dev complete component or screen
-> 21st.dev primitive combination
-> existing shadcn primitive
-> custom implementation only with documented justification
```

The canonical public landing hero is already selected and must not be replaced by another generic hero

See:

`docs/components/landing/CANONICAL_HERO.md`

## Soft Pop Theme

Canonical theme:

https://21st.dev/@serafimcloud/themes/soft-pop

At implementation time:

1. retrieve the current published Soft Pop token set
2. apply it in the application's global style/theme entry
3. preserve published appearance modes where supported
4. keep AthR-specific status colors semantic
5. do not approximate the theme from screenshots

See:

`docs/design/DESIGN_SYSTEM.md`

## Vite Environment Rules

Browser-safe public configuration may use Vite environment variables

Examples:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

Never place any of the following in `VITE_*`:

- Supabase service-role credentials
- private API keys
- 21st credentials
- admin secrets
- signing secrets

Anything available through `import.meta.env.VITE_*` is part of the browser-facing application configuration

## Supabase Boundary

The Vite frontend may use the browser-safe Supabase client through explicit feature/query modules

Do not import and configure arbitrary Supabase clients inside presentation components

Authorization must be enforced using Supabase RLS and database constraints

Privileged operations that require elevated credentials belong in Supabase Edge Functions or another deliberate backend boundary

## Routing

Use React Router

Keep route files thin

Recommended pattern:

```text
route
-> feature composition
-> reusable AthR/generic components
-> feature hooks/query modules
-> Supabase/data-access boundary
```

Do not put direct data access, permissions, mutation logic, and a large UI tree in one route component

## TanStack Query

Use TanStack Query when a feature benefits from server-state caching, invalidation, background refresh, pagination, or mutation coordination

Do not wrap every local value in TanStack Query

Local UI state stays local

## Images

Vite does not provide `next/image`

Use standard accessible image rendering or a focused image component that handles loading, responsive sizing, aspect ratio, and fallbacks where needed

Production Work Evidence should use AthR-controlled storage rather than stock-image hosts

Do not import `next/image`

## Navigation Adaptation

The older navigation reference may contain framework-specific routing assumptions

During Vite integration:

- replace `next/navigation` with React Router APIs
- preserve the visual/interaction contract
- keep route state explicit
- verify keyboard focus and reduced motion

Do not keep Next.js imports in the Vite runtime

## Post Card Adaptation

The older Post Card reference may contain `next/image`

During Vite integration:

- replace it with framework-neutral image rendering
- preserve responsive media behavior
- keep Lucide for generic action icons
- retain controlled/uncontrolled interaction behavior where designed

## Verification Commands

Use the actual project scripts as source of truth

The runtime should support equivalents of:

```bash
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

For UI work, browser verification is mandatory after build/typecheck

## UI Verification Evidence

A UI task is not complete until it can report:

```text
21st search performed: yes/no
Candidate selected: identifier or URL
Install method: method
Dependencies added: list
Adaptations: summary
Soft Pop applied: yes/no
Responsive review: pass/fail
Accessibility review: pass/fail
Typecheck: pass/fail
Build: pass/fail
Browser review: pass/fail
```

If `21st search performed` is `no`, a documented exception is required unless the module was already an approved selected Component Bank source
