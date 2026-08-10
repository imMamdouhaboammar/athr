# AthR Frontend Setup

## Current State

The repository currently contains product documentation and approved component reference files, but it does not yet contain:

- `package.json`
- Next.js runtime
- TypeScript configuration
- Tailwind CSS configuration
- `components.json`
- shadcn initialization
- `lib/utils.ts`

Because of that, Component Bank modules are not considered runtime-verified yet

## Target Structure

AthR uses the conventional root-level shadcn structure:

```text
app/
components/
  ui/
  athr/
lib/
  utils.ts
public/
docs/
components.json
package.json
tsconfig.json
```

The default reusable primitive path is:

`/components/ui`

Keep this path even when an imported component originally uses another folder because:

- shadcn registry output expects a predictable primitive location
- generated imports commonly target `@/components/ui/...`
- it separates generic UI primitives from AthR domain compositions under `/components/athr`
- agents and maintainers can resolve module responsibility from the path without searching the whole repository

## Initialize Next.js Safely in This Existing Repository

The repository is not empty, so do not run a destructive scaffold command that overwrites existing docs or approved component files

One safe approach is to scaffold in a temporary sibling directory and merge the runtime files deliberately:

```bash
pnpm dlx create-next-app@latest athr-web-scaffold \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --use-pnpm \
  --import-alias "@/*"
```

Then copy the generated runtime files into the AthR repository while preserving existing `docs/` and `components/`

Before deleting the temporary scaffold, verify that the AthR root contains at least:

```text
app/
package.json
tsconfig.json
next.config.*
postcss.config.*
public/
```

## Initialize shadcn

From the AthR repository root:

```bash
pnpm dlx shadcn@latest init
```

Configure the aliases so generated modules resolve through:

```text
components -> @/components
ui         -> @/components/ui
utils      -> @/lib/utils
```

The exact generated `components.json` should remain the source of truth once shadcn is initialized

## Install Navigation Dependencies

The approved expandable navigation primitive requires:

```bash
pnpm add usehooks-ts lucide-react framer-motion
```

`@/lib/utils` is expected from the shadcn setup and should provide the repository `cn()` helper

Do not create a second competing class-merging helper inside the navigation feature

## Soft Pop Theme

Canonical theme:

https://21st.dev/@serafimcloud/themes/soft-pop

At implementation time:

1. Open the canonical theme
2. Retrieve or apply its current published token set
3. Put the theme tokens in the application's global theme layer
4. Preserve both published appearance modes where provided
5. Keep AthR-specific status colors as semantic aliases rather than local component values
6. Do not approximate the theme from screenshots

See `docs/design/DESIGN_SYSTEM.md`

## First Component Bank Files

Already approved in the repository:

```text
components/ui/expandable-tabs.tsx
components/ui/expandable-tabs.demo.tsx
components/athr/navigation/primary-nav.tsx
```

After the runtime exists, these files should compile without moving them

## Verification Commands

Use the scripts produced by the actual project setup as the source of truth

At minimum the runtime must support equivalents of:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

If `typecheck` or `test` scripts do not yet exist, add them before promoting Component Bank modules to Verified

## Navigation Verification Gate

The Primary Navigation is Verified only when all of the following are true:

- Next.js resolves `next/navigation`
- `@/components/ui/expandable-tabs` resolves
- `@/lib/utils` resolves
- `framer-motion`, `usehooks-ts`, and `lucide-react` are installed
- TypeScript passes
- Production build passes
- Active route expands the correct label
- Outside clicks do not clear the active route state in AthR Primary Navigation
- Keyboard focus is visible
- Reduced-motion preference removes the spring animation
- The navigation remains usable at narrow viewport widths
- The actual Soft Pop tokens are active
