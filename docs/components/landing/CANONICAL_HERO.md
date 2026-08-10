# AthR Canonical Landing Hero

## Status

**Required / Approved reference / runtime verification pending**

This is the mandatory public landing-page hero direction for AthR

It is not loose inspiration and it should not be replaced by a generic SaaS hero during implementation

The supplied React component is the authoritative composition reference for this entry

## Product Job

The hero should make AthR immediately feel like a distinct professional network built around visible marketing work

It must communicate the relationship between:

**People -> Work -> Expertise -> Opportunity**

The hero should create a strong first visual impression while still showing actual professional context rather than decorative product chrome

## Canonical Composition

Preserve the supplied hero's core composition:

1. full-viewport high-contrast hero field
2. compact navigation above the composition
3. subtle background grid
4. three oversized stacked headline lines with offset alignment
5. deep typographic extrusion/shadow treatment
6. two floating professional cards crossing the headline composition
7. hand-drawn directional accents
8. rotating circular CTA badge
9. restrained vertical floating motion on the professional cards
10. rounded transition into the next explanatory section
11. three concise value blocks directly below the hero when the landing page uses the supplied full composition

Do not replace this with a conventional centered headline + paragraph + two buttons + dashboard screenshot layout

## AthR Adaptation

The source component contains BASE CLUB / Web3-specific demo content

That content must not ship in AthR

Replace:

- BASE CLUB branding -> AthR identity
- wallet action -> AthR primary public action
- `#CLUB / SOCIALFI / PEOPLE` -> approved AthR landing message
- crypto handles -> realistic marketing specialist identities
- points/token values -> professional evidence such as specialty, market, project result, availability, or verified work context
- token feature cards -> AthR product value blocks

Keep the visual hierarchy and spatial composition while changing the product semantics

## Headline Rule

The landing message must use three compact oversized lines because the staggered typography is part of the canonical composition

The copy should express AthR's work-first positioning, not generic community or freelance-marketplace language

Final production copy should be approved in the product copy source before launch

Do not preserve source terms such as `#CLUB`, `SOCIALFI`, token names, staking, rewards, or wallet language

## Floating Cards

The two overlapping cards should become professional evidence cards

Each card should show a deliberately small amount of useful identity/evidence, for example:

- specialist name
- specialty
- market or industry context
- one concise work/result signal
- availability or verification when useful

Do not turn them into mini dashboards

Do not use fake follower counts or vanity metrics

Development fixtures should use realistic marketing work context

## Motion

The source uses `motion/react`

Required dependency when this implementation is integrated:

```bash
npm install motion
```

Preserve subtle vertical floating only for the hero evidence cards and the rotating CTA badge

This is a deliberate landing-page exception to AthR's general rule against constant decorative motion

Requirements:

- motion must remain slow and low-amplitude
- no cursor-following behavior
- no scroll hijacking
- no decorative parallax
- hover motion must not create layout shift
- respect `prefers-reduced-motion`
- reduced-motion mode should keep the complete composition readable without animation

## Limited Glass Treatment Exception

The source uses translucent blurred floating cards

AthR normally avoids glassmorphism

For this canonical public hero only, a restrained translucent treatment is allowed on the two floating evidence cards when it materially preserves the source composition

The treatment must:

- remain limited to hero overlays
- use Soft Pop-compatible semantic tokens
- maintain text contrast
- avoid neon/glow treatment
- not spread to authenticated product screens

Every other product surface continues to follow the normal no-glass rule

## Design System

Soft Pop by serafimcloud remains the canonical AthR base theme

The source's hard-coded blue, lime, white, black, gray, radius, and shadow values are visual reference values, not a new parallel AthR palette

During implementation:

1. retrieve the current Soft Pop tokens from 21st.dev
2. map the hero field to the appropriate primary/background tokens
3. map the contrasting headline/accent elements to semantic theme tokens
4. use the canonical theme typography where compatible with the required oversized composition
5. preserve the source's contrast and hierarchy even if exact hex values change
6. document any intentionally retained source value that cannot be represented by the canonical theme

Do not silently abandon the canonical composition because theme tokens differ from the source

## Typography

The supplied component relies on extremely large uppercase display type with tight leading, tight tracking, offset stacking, and multi-step shadow/extrusion

Those characteristics are required for this landing hero

This is an explicit exception to the rule against oversized typography in dense authenticated product screens

The exception applies only to the public landing hero and closely related campaign landing surfaces approved against this component

## Hand-Drawn Accents

The supplied custom SVG arrows are meaningful visual accents and may remain custom SVGs

Do not replace them with generic Lucide arrows merely to standardize icon dependencies

Lucide remains the default for normal interface icons

Hand-drawn accents must remain sparse and attached to the hero composition rather than becoming a recurring decoration across AthR

## Circular CTA

The circular rotating badge is part of the required composition

Adapt its text and action to AthR

Requirements:

- real accessible button or link semantics
- keyboard focus visible
- reduced-motion alternative
- no duplicated SVG path IDs when multiple instances render
- action must match the primary landing conversion goal

## Navigation

The source navbar is a visual reference, not AthR's final public navigation taxonomy

Use AthR's approved public navigation and brand identity

Do not reintroduce wallet/connect, token, airdrop, or Web3 navigation concepts

Authenticated product navigation continues to use the approved Primary Navigation component rather than this landing navigation treatment

## Lower Feature Section

When the full source composition is used, preserve the rounded transition into three concise explanatory blocks

Replace the source token/reward concepts with three AthR product truths

Each block should communicate one job only and use real product language

Good subjects include:

- show work with context and results
- discover specialists through relevant work
- move from evidence to a qualified conversation or opportunity

Do not use fake charts or fabricated performance data

## Responsive Behavior

The supplied composition already uses responsive typography and positioning as its baseline

The production adaptation must additionally verify:

- headline remains legible without clipping at narrow widths
- floating cards do not hide the core message
- decorative arrows can be reduced or repositioned rather than crowding mobile
- navigation remains usable without copying the desktop layout mechanically
- circular CTA remains reachable and does not overlap content
- lower explanatory blocks stack intentionally
- no horizontal overflow

## Accessibility

Required before verification:

- one semantic `h1` hierarchy for the hero message
- decorative SVGs hidden from assistive technology where appropriate
- meaningful alt text for specialist imagery
- keyboard-operable CTA and navigation
- visible focus treatment
- sufficient rendered contrast
- reduced-motion behavior
- no content that exists only as animation

## Source Dependencies

The supplied reference assumes:

- React
- TypeScript
- Tailwind CSS
- shadcn-compatible `/components/ui` project structure
- `motion` / `motion/react`

Reference implementation path in AthR:

```text
components/ui/hero.tsx
```

Future AthR route-level composition should live at an AthR-specific path rather than embedding route/product logic into the reusable primitive

## 21st.dev Rule

This hero is already a user-selected component reference, so agents must not search 21st.dev for a visually different hero and replace it simply because another candidate exists

21st.dev remains mandatory for:

- obtaining supporting primitives when needed
- checking compatible interaction components
- installing dependencies/components rather than rebuilding common supporting UI
- retrieving the canonical Soft Pop theme

For the hero itself, this Component Bank entry is the selected source of truth

## Verification Status

Current state:

```text
Selected hero: supplied component reference
AthR adaptation contract: Approved
Reference component: planned/approved under components/ui/hero.tsx
Soft Pop normalization: required at runtime integration
Responsive review: pending runnable frontend
Accessibility review: pending runnable frontend
Typecheck: not available in docs-first repository
Build: not available in docs-first repository
```

Do not promote this entry to Verified until the actual frontend exists and the production adaptation passes the repository verification gates
