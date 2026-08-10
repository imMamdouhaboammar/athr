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

## Install and Authenticate 21st CLI

21st.dev is AthR's default external UI sourcing layer

Install the official CLI globally:

```bash
npm i -g @21st-dev/cli
```

Authenticate once:

```bash
21st login
```

For CI or non-interactive usage, use the official API-key mechanism supported by the CLI rather than committing credentials to the repository

## Mandatory UI Search Workflow

Before implementing any new common UI pattern, search 21st.dev first

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

After selecting a candidate, install it through the official CLI:

```bash
21st add <scope>/<component-name>
```

Some 21st.dev component pages expose a shadcn registry command instead, for example:

```bash
npx shadcn@latest add https://21st.dev/r/<scope>/<component>
```

Use the exact command provided by the selected component page rather than constructing registry paths manually

The full policy is defined in:

`docs/components/21ST_COMPONENT_WORKFLOW.md`

## Do Not Reinvent Existing UI

The required decision order is:

```text
Existing AthR Component Bank
-> 21st.dev complete component or screen
-> 21st.dev primitive combination
-> existing shadcn primitive in the repo
-> custom implementation only with a documented reason
```

For complex pages, search complete 21st.dev screens and templates before assembling the page manually from small primitives

The agent is expected to import useful existing code, then adapt it to AthR's product requirements, not reproduce it from screenshots

## Dependencies After 21st Install

A 21st.dev installation may add npm dependencies

After every install:

1. Inspect new dependencies
2. Keep dependencies required for real interaction behavior
3. Remove redundant generic icon packages when Lucide already covers the same UI icons
4. Do not rewrite sophisticated interaction code merely to avoid a justified dependency
5. Run typecheck and production build after dependency cleanup

## Standard UI Icons

AthR's default generic UI icon set is:

```text
lucide-react
```

If an imported component uses another generic icon library only for icons available in Lucide, replace those imports during adaptation

Do not replace real brand logos with Lucide icons

## Install Navigation Dependencies

The approved expandable navigation primitive requires:

```bash
pnpm add usehooks-ts lucide-react framer-motion
```

`@/lib/utils` is expected from the shadcn setup and should provide the repository `cn()` helper

Do not create a second competing class-merging helper inside the navigation feature

## Post Card Dependencies

The approved Post Card uses dependencies already expected in the AthR stack:

- React
- Next.js `Image`
- `lucide-react`

The supplied reference used `react-icons`, but AthR does not need to add it because the required generic action icons are covered by Lucide

If demo or development fixtures use remote images with `next/image`, allow the exact remote host in `next.config.*`

For the current Unsplash demo fixture:

```ts
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
```

Production user Work Evidence should use AthR-controlled storage rather than public stock-image hosts

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

## Approved Component Bank Files

Currently approved in the repository:

```text
components/ui/expandable-tabs.tsx
components/ui/expandable-tabs.demo.tsx
components/athr/navigation/primary-nav.tsx
components/ui/post-card.tsx
components/ui/post-card.demo.tsx
components/athr/feed/work-post-card.tsx
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

## UI Task Verification Evidence

A UI task is not complete until the implementation record can state:

```text
21st search performed: yes/no
Candidate selected: identifier or URL
Install method: 21st add / shadcn registry / existing AthR module
Dependencies added: list
Adaptations: summary
Soft Pop applied: yes/no
Responsive review: pass/fail
Accessibility review: pass/fail
Typecheck: pass/fail
Build: pass/fail
```

If `21st search performed` is `no`, a documented custom-component exception is required

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

## Post Card Verification Gate

The Post Card is Verified only when all of the following are true:

- `next/image` resolves
- `lucide-react` resolves
- configured remote demo images render when used
- TypeScript passes
- production build passes
- Like and Save work in controlled and uncontrolled modes
- Share is disabled when no handler exists
- author identity is not rendered as a disabled control when non-interactive
- keyboard focus is visible on all active controls
- action labels collapse appropriately on narrow screens
- actual Soft Pop tokens are active
