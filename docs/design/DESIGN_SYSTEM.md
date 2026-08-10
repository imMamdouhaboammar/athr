# AthR Design System

## Canonical Theme

AthR uses **Soft Pop by serafimcloud on 21st.dev** as its canonical visual token system

Source:

https://21st.dev/@serafimcloud/themes/soft-pop

This is a deliberate product decision, not an inspiration link

When implementation begins, import or copy the current published Soft Pop theme tokens from the canonical 21st.dev source and preserve them as the source values for the AthR theme layer

Do not manually approximate the palette, font values, radius scale, shadows, light mode, or dark mode from screenshots

21st themes are complete shadcn-compatible token sets, so AthR should consume the theme as tokens and then build its own product composition on top of those tokens

## Relationship Between Soft Pop and AthR

Soft Pop defines:

- Color tokens
- Surface tokens
- Foreground hierarchy
- Primary, secondary, accent and muted roles
- Border, input and focus ring roles
- Radius
- Font tokens when supplied by the theme
- Shadow tokens when supplied by the theme
- Light and dark mode token values

AthR defines:

- Information hierarchy
- Layout
- Spacing rhythm
- Component composition
- Portfolio media treatment
- Search-result density
- Profile structure
- Work Feed structure
- Opportunity structure
- Messaging structure
- Interaction behavior
- Domain-specific status semantics

The theme must not dictate the product architecture

## Source-of-Truth Rule

Use the canonical Soft Pop theme as the upstream source for base visual tokens

AthR may add semantic aliases such as:

- `--status-available`
- `--status-limited`
- `--status-booked`
- `--verification-self-reported`
- `--verification-verified`
- `--opportunity-open`
- `--opportunity-closed`

Semantic aliases should map into the Soft Pop palette where possible rather than creating unrelated colors

If an additional color is required for accessibility or a product state, document why it cannot be represented with the existing theme tokens

## Theme Integrity

Implementation must support both modes provided by the canonical theme when both are available upstream

Do not alter individual token values screen by screen

Do not create one-off colors in JSX or component files

Do not introduce a second theme library alongside Soft Pop

Do not use default shadcn theme values when they conflict with Soft Pop

## Product Character

AthR should use Soft Pop with professional restraint

The intended result is:

- Friendly without looking childish
- Expressive without looking decorative
- Soft without losing information density
- Distinctive without making every component loud
- Approachable without weakening professional credibility

The strongest visual material remains the user's actual Work Evidence

Soft Pop gives the interface character around that work; it should never visually overpower the portfolio itself

## Surfaces

Use theme surfaces deliberately

Prefer open page composition for large information regions

Use elevated or bounded surfaces for elements with real behavioral or semantic grouping such as:

- Search filters
- Opportunity summaries
- Portfolio builder sections
- Contextual conversation headers
- Verification details
- Dialogs
- Menus

A background color, border, radius and shadow are not automatically required together

## Cards

Cards are valid when an item is independently selectable, movable, actionable, or repeated as a collection

Good card candidates:

- Case Study previews
- Opportunity results
- Selected Work
- Compact Service offerings

Prefer rows, sections, editorial blocks, or open layouts when the information does not need card behavior

Avoid deeply nested cards

## Radius

Use the Soft Pop radius tokens as the base scale

Do not convert the whole interface into oversized pill shapes

Pills are reserved for short atomic states or filters such as:

- Availability
- Verification State
- Selected filter
- Specialty tag when compact treatment is useful

Primary content containers should retain enough geometry to support dense professional information

## Shadows

Use the theme's shadows as interaction and separation tools rather than constant decoration

Good uses:

- Active popover
- Floating menu
- Dragged portfolio asset
- Focused modal or sheet
- Elevated preview during direct manipulation

Static page sections should primarily use spacing, surface contrast and borders

## Typography

Use the font tokens supplied by Soft Pop when the canonical theme defines them

If the theme does not define an appropriate role for a content requirement, additions require an explicit AthR typography decision rather than a one-off local font

Hierarchy should distinguish:

- Display / page identity
- Work title
- Professional headline
- Section heading
- Body
- Metadata
- Metric value
- Control label

Avoid oversized marketing-site typography inside authenticated product screens

## Spacing

Soft Pop supplies visual character; AthR supplies disciplined spacing

Use a consistent spacing scale and avoid arbitrary pixel values

Dense comparison surfaces such as Discover may use tighter vertical rhythm than portfolio presentation surfaces

Do not create large empty regions simply to make the interface feel premium

## Icons

Use icons only where recognition is faster than text or where space is constrained

Icons must use consistent stroke language and sizing

Do not decorate headings or cards with arbitrary icons

Prefer text labels for important actions whose meaning is not universally obvious

## Portfolio Media

Portfolio media may visually break out of surrounding interface surfaces

Do not tint, gradient-overlay, blur, or decorate user Work Evidence merely to make it fit the theme

The theme frames the work; it does not restyle the work

Media should preserve original aspect ratio where the chosen presentation allows it and expose cropping clearly where a fixed preview is required

## Status and Verification

Color must not be the only signal

Availability and Verification State require a text label and may use an icon or shape in addition to color

Examples:

- Available now
- Limited availability
- Booked
- Self reported
- Client verified

Do not make verification badges visually resemble platform certification unless the underlying evidence supports that meaning

## Forms

Use Soft Pop input, border, focus and destructive tokens consistently

Portfolio Builder and Project Brief forms should favor progressive sections over long dense forms

Validation should appear near the affected field and include text, not color alone

Preserve entered data across recoverable errors

## Motion

Soft Pop is a visual theme, not permission for constant animation

Motion is used for state change and spatial continuity:

- Open and close
- Expand and collapse
- Save and unsave state
- Media reorder
- Filter update
- Profile or Work preview
- Message arrival

Respect reduced-motion preferences

## Responsive Behavior

The same Soft Pop tokens apply across breakpoints

Composition changes intentionally by viewport

Do not shrink desktop layouts mechanically

Mobile priority order:

1. Work Evidence
2. Identity
3. Current professional context
4. Primary action
5. Secondary metadata

## Accessibility

Theme adoption does not waive accessibility requirements

Validate actual rendered contrast for:

- Body text
- Muted text
- Buttons
- Focus rings
- Form errors
- Verification labels
- Availability labels
- Disabled controls

Both light and dark modes must pass the product's accessibility checks after the upstream theme is applied

## Implementation Contract

When the frontend is created:

1. Retrieve the canonical Soft Pop theme from the source URL
2. Store the exact upstream token set in the global theme layer
3. Record the retrieval date or upstream revision if one is exposed
4. Add only AthR semantic aliases required by product states
5. Build components against semantic and theme tokens, never hard-coded palette values
6. Verify representative screens in light and dark modes
7. Verify accessibility before treating the theme integration as complete

Completion criterion: every implemented AthR screen uses Soft Pop as the base design token source, while AthR's product-specific layout and interaction rules remain consistent across Profile, Portfolio, Discover, Work Feed, Opportunities and Messaging
