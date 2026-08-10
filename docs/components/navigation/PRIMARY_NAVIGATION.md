# AthR Primary Navigation

## Status

**Approved, runtime verification pending**

The repository does not yet contain a runnable frontend, so the module cannot honestly be marked Implemented or Verified

## Job

Give authenticated users fast access to the six primary product areas while keeping the interface compact and preserving clear current-location feedback

Primary destinations:

1. Home
2. Discover
3. Opportunities
4. Messages
5. Saved
6. Profile

## Source

The base expandable-tabs interaction was supplied for AthR as an existing React module

AthR keeps the core behavior:

- icon-first compact state
- selected item expands to reveal its label
- spring-based width and gap transition
- separator support
- Soft Pop compatible shadcn token classes

The bank version adds only changes required for reuse and product integration

## Module Split

### Primitive

`components/ui/expandable-tabs.tsx`

The primitive owns:

- expandable label animation
- controlled or uncontrolled selected state
- outside-click collapse behavior
- disabled state
- reduced-motion behavior
- visual selection state
- separator rendering
- horizontal overflow safety

It does not know about AthR routes

### AthR Composition

`components/athr/navigation/primary-nav.tsx`

The composition owns:

- AthR destination labels
- AthR destination icons
- current route matching
- route navigation
- persistent active selection
- Profile destination override

## Dependencies

Runtime dependencies:

```bash
pnpm add usehooks-ts lucide-react framer-motion
```

Repository dependencies expected from the frontend setup:

- React
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn-compatible token classes
- `@/lib/utils` with `cn()`

## Primitive Interface

```ts
interface ExpandableTabsProps {
  tabs: ExpandableTabItem[];
  className?: string;
  activeColor?: string;
  value?: number | null;
  defaultValue?: number | null;
  collapseOnOutsideClick?: boolean;
  ariaLabel?: string;
  onChange?: (index: number | null) => void;
}
```

### `tabs`

Ordered items to render

Each interactive item provides:

- `title`
- Lucide `icon`
- optional `disabled`

Separators use:

```ts
{ type: "separator" }
```

### `value`

Controlled selection index

Use this when selection represents external product state such as the current route

### `defaultValue`

Initial value for uncontrolled usage such as a local tool switcher or demo

### `collapseOnOutsideClick`

Default: `true`

Set to `false` for primary navigation because the selected item communicates current location and should not disappear on unrelated page interaction

### `onChange`

Called with the selected item index or `null` when an uncontrolled selection is cleared

## AthR Composition Interface

```ts
interface AthrPrimaryNavProps {
  className?: string;
  profileHref?: string;
}
```

`profileHref` exists because the final authenticated Profile URL may depend on the current user's username or routing choice

## Route Mapping

Default mapping:

```text
Home          -> /
Discover      -> /discover
Opportunities -> /opportunities
Messages      -> /messages
Saved         -> /saved
Profile       -> /profile by default, override when final profile route is known
```

The route matcher treats nested routes as active descendants

Examples:

```text
/discover/media-buyers          -> Discover active
/opportunities/123              -> Opportunities active
/messages/abc                   -> Messages active
```

Home matches only `/`

## Icon Set

Use Lucide icons consistently

Current mapping:

- Home -> `Home`
- Discover -> `Compass`
- Opportunities -> `BriefcaseBusiness`
- Messages -> `MessageCircle`
- Saved -> `Bookmark`
- Profile -> `UserRound`

Icons are functional navigation cues, not decoration

## Separator

The separator sits between active work surfaces and personal utility surfaces:

```text
Home
Discover
Opportunities
Messages
|
Saved
Profile
```

It may be removed later if navigation testing shows that the distinction adds no comprehension value

## Soft Pop Treatment

Use only canonical theme roles:

- `bg-background`
- `bg-muted`
- `text-foreground`
- `text-muted-foreground`
- `text-primary`
- `border`
- `ring`
- `shadow-sm` where the actual Soft Pop token mapping supports the intended elevation

Do not add local blue, purple, or gradient active states

Do not copy the demo's arbitrary custom-blue example into AthR production UI

## Responsive Behavior

### Wide screens

- Render all destination icons
- Keep only the active destination label expanded
- Keep the full navigation compact enough to sit in the application header

### Narrow screens

- Preserve the same destination order
- Keep items `shrink-0`
- Allow horizontal overflow rather than compressing tap targets below usable size
- Keep only the active label expanded

The final application may later choose a dedicated mobile navigation composition if product testing shows horizontal overflow is not appropriate

Do not fork the primitive preemptively

## State Behavior

### Default

Inactive destinations show icon only with muted foreground treatment

### Hover

Inactive destination receives theme-muted surface and foreground treatment

### Active

Active destination receives theme-muted surface, primary foreground treatment, and expanded label

### Focus

Visible focus ring using theme `ring` and `background` tokens

### Disabled

Interaction is blocked and visual opacity communicates unavailable state

### Reduced Motion

Animation duration becomes zero when the user's reduced-motion preference is active

## Accessibility

- Outer AthR composition uses semantic `<nav aria-label="Primary navigation">`
- Each interactive item has a text `aria-label` even when the visible label is collapsed
- Selected state is exposed with `aria-pressed`
- Decorative icons use `aria-hidden`
- Focus remains visible
- Separator is hidden from accessibility APIs
- Color is not the only indicator because active state also changes visible label and pressed state

## Why Controlled State Matters

The original interaction stored selection only inside the module and cleared selection on outside click

That behavior is useful for a local expandable control but wrong for product navigation because current location is external application state

AthR therefore controls the selection from `usePathname()` and sets `collapseOnOutsideClick={false}`

This keeps one source of truth for current location

## Usage

```tsx
import { AthrPrimaryNav } from "@/components/athr/navigation/primary-nav";

export function AppHeader() {
  return (
    <header>
      <AthrPrimaryNav profileHref="/u/current-username" />
    </header>
  );
}
```

The final authenticated Profile URL should come from real user state rather than the placeholder shown above

## Assets

No image assets are required

Do not introduce stock imagery or logos into this navigation module

## Verification Checklist

### Build

- [ ] Next.js runtime exists
- [ ] shadcn aliases resolve
- [ ] dependencies installed
- [ ] TypeScript passes
- [ ] production build passes

### Behavior

- [ ] every destination routes correctly
- [ ] nested routes keep the correct item active
- [ ] outside click does not clear current route state
- [ ] no duplicate navigation events occur
- [ ] mobile overflow remains usable

### Accessibility

- [ ] keyboard focus is visible
- [ ] buttons expose accessible names
- [ ] selected item exposes state
- [ ] separator is ignored by assistive technology
- [ ] reduced motion removes spring transition

### Design

- [ ] canonical Soft Pop tokens are loaded
- [ ] no one-off palette values are used
- [ ] active state remains readable in light mode
- [ ] active state remains readable in dark mode
- [ ] nav does not visually overpower Work Evidence

## Known Limitation

The current AthR composition uses button-triggered `router.push()` navigation because the supplied interaction primitive is button-based

Before public launch, test expected browser-navigation behavior including opening destinations in a new tab and link semantics

If native link behavior is required, deepen the primitive interface with an explicit render or destination seam rather than duplicating the entire navigation module
