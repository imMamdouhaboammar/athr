# AthR Post Card

## Status

**Approved, runtime verification pending**

## Job

Represent a professional Work Feed item with strong author identity, useful work context, optional media, and restrained social actions

## Source and Adaptation Rule

The initial reference was supplied as an existing React Post Card

Future replacements or variants must follow `docs/components/21ST_COMPONENT_WORKFLOW.md`: search the AthR bank and 21st.dev before creating a new card from scratch

Do not keep parallel Post Card implementations simply because another visual treatment looks interesting

## Local Modules

Primitive:

```text
components/ui/post-card.tsx
```

AthR composition:

```text
components/athr/feed/work-post-card.tsx
```

Demo:

```text
components/ui/post-card.demo.tsx
```

## Primitive Responsibility

`PostCard` owns:

- author identity
- avatar or initials fallback
- handle and timestamp
- optional eyebrow slot
- body content slot
- single media slot
- optional footer context slot
- Like action
- Save action
- Share action
- controlled and uncontrolled Like/Save state
- focus and pressed semantics
- narrow-screen action-label behavior

It does not know AthR Work Feed content types

## AthR Composition Responsibility

`WorkPostCard` maps AthR Work Feed types into the primitive

Supported types:

```text
case_study
breakdown
teardown
experiment
availability
collaboration_request
opportunity
```

It may also show a concise professional context label

## Dependencies

- React
- Next.js `Image`
- `lucide-react`
- Tailwind CSS
- shadcn-compatible token classes
- `@/lib/utils`

The supplied reference used `react-icons`

AthR replaced those generic action icons with Lucide because Lucide is already the standard UI icon dependency for the bank

## State Model

Production usage should normally control Like and Save state from the feature layer so persistence, optimistic updates, error rollback, and server truth remain outside the visual primitive

Uncontrolled state exists for demos and isolated use

## Media

The current primitive intentionally supports one main media asset

Do not add carousel, document viewer, video player, or gallery behavior directly into this primitive merely because a future post needs it

Search 21st.dev for a strong media module and compose it when that requirement becomes real

Work Evidence must not be tinted or visually modified just to match Soft Pop

## Soft Pop

Use canonical roles such as:

```text
bg-card
text-card-foreground
bg-muted
text-muted-foreground
text-foreground
text-primary
border-border
ring-ring
```

Do not restore hard-coded red Like states or blue Save states from the reference demo

## Responsive Behavior

- card width is fluid up to its maximum content width
- action buttons remain three equal interaction areas
- action text hides on small screens while accessible labels remain
- avatar and author metadata must not force horizontal overflow
- media remains full width inside the card

## Accessibility

- Like and Save expose `aria-pressed`
- every action has an accessible name
- active controls receive a visible focus ring
- author identity is interactive only when an author action exists
- decorative icons are hidden from assistive technology
- media requires useful alt text
- selected state is not communicated by color alone

## Demo Assets

The current demo uses Unsplash development fixtures

`next/image` therefore requires `images.unsplash.com` in the runtime remote image configuration

Production Work Evidence should use AthR-controlled storage

## Verification Gate

- [ ] 21st.dev sourcing policy reviewed before introducing any replacement or major variant
- [ ] Next.js runtime exists
- [ ] dependencies resolve
- [ ] TypeScript passes
- [ ] production build passes
- [ ] Like controlled state works
- [ ] Like uncontrolled state works
- [ ] Save controlled state works
- [ ] Save uncontrolled state works
- [ ] Share callback works
- [ ] Share is disabled without a handler
- [ ] author interactive and static modes are correct
- [ ] narrow-screen layout remains usable
- [ ] keyboard focus is visible
- [ ] Soft Pop light appearance is coherent
- [ ] Soft Pop dark appearance is coherent

## Known Limitations

The current primitive has one media slot and no comments or reaction counts

Those capabilities should not be added until product requirements need them, and new UI behavior must follow the 21st.dev-first sourcing rule rather than being generated from scratch by default
