# AthR Visual Direction

## 1. Design Intent

AthR uses **Soft Pop by serafimcloud on 21st.dev** as its canonical design-token system

Canonical theme:

https://21st.dev/@serafimcloud/themes/soft-pop

The detailed implementation contract is defined in [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)

Soft Pop provides the product's base visual character; AthR provides the information hierarchy, editorial composition, professional density, and interaction behavior

The result should feel like a professional work network with a softer, more human visual character than a conventional freelance marketplace

The actual Work Evidence must remain the most visually important material on screen

## 2. Design Personality

- Professional
- Friendly
- Expressive
- Editorial
- Clear
- Approachable
- Distinctive
- Highly legible
- Content first

The interface can feel playful in controlled details, but professional information must remain easy to compare and trust

## 3. Theme Rule

Do not approximate Soft Pop from memory or screenshots

At implementation time, retrieve the current published token set from the canonical 21st.dev theme and use those values as the base theme source

Do not create screen-specific substitutes for:

- Primary
- Secondary
- Accent
- Muted
- Background
- Foreground
- Card
- Popover
- Border
- Input
- Ring
- Radius
- Theme fonts
- Theme shadows

AthR-specific semantic status tokens may be added only when required for domain meaning

## 4. Anti-Slop Rules

Avoid visual choices that are unrelated to Soft Pop, product meaning, or Work Evidence

Hard guardrails:

- No glassmorphism
- No neon or cyber styling
- No unrelated AI visual language
- No floating abstract blobs
- No glowing objects
- No generic 3D technology objects
- No decorative gradient text
- No fake analytics or charts
- No generic dashboard widget walls
- No robot or AI brain imagery
- No huge empty product heroes
- No excessive container nesting
- No motion without a state or spatial purpose

Do not turn every section into a card

Do not place cards inside cards inside cards

Soft Pop's softness should come from its real token set and component treatment, not from arbitrary decoration

## 5. Typography

Use the typography tokens provided by the canonical Soft Pop theme where present

AthR needs strong hierarchy between:

- Page identity
- Work title
- Professional headline
- Section heading
- Body
- Metadata
- Metrics
- Actions

Do not use oversized landing-page typography inside dense product screens

Metadata may use a compact secondary treatment when it remains highly legible

## 6. Layout Principles

Use a disciplined responsive grid

Soft styling does not mean loose information architecture

Mix:

- Full-width project media
- Editorial grids
- Compact profile rows
- Split layouts
- Horizontal work strips
- Dense search results
- Clean long-form sections
- Focused bounded panels when behavior needs a clear container

Allow Work Evidence to break standard content width when it materially improves presentation

Avoid one repeated universal component shape across every screen

## 7. Navigation

Desktop navigation should be compact

Primary areas:

- Home
- Discover
- Opportunities
- Messages
- Saved
- Profile

Contextual creation actions:

- Share work
- Post opportunity

Navigation should use Soft Pop's surface and interaction tokens without becoming a decorative floating dock unless the layout has a functional reason for that treatment

Mobile navigation should remain direct and keep Work Evidence visible

## 8. Home

Home is the Work Feed

Visual priority:

1. Work or professional opportunity
2. Specialist identity
3. Professional context
4. Useful result or learning
5. Social interaction controls

Different Work Feed types may use distinct compositions

Do not force every type into the same card template

## 9. Discover

Discover should combine Soft Pop's approachable component treatment with professional comparison density

A Specialist result should expose:

- Identity
- Headline
- Expertise
- Availability
- Relevant Work Evidence
- Trust signal

Relevant Case Studies should appear directly in results where useful

Filters should be compact, readable, and easy to reverse

Use pills only for genuinely atomic filters or states

## 10. Profile

The Profile combines professional identity with a curated portfolio

Recommended order:

1. Identity
2. Professional positioning
3. Availability
4. Primary expertise
5. Selected Work
6. Services
7. Experience
8. Collaborators
9. Recommendations

Selected Work should receive more visual area than biography

Soft Pop can shape buttons, badges, surfaces, and interaction states while the profile layout remains editorial and evidence-led

## 11. Portfolio Case Study

The work dominates the Case Study

Recommended rhythm:

- Project identity
- Hero media
- Context
- Contribution
- Work gallery
- Results
- Collaborators
- Next action

Do not apply decorative filters, tints, gradient overlays, or excessive framing to user Work Evidence

Work Metrics should feel like evidence, not dashboard widgets

## 12. Portfolio Builder

The builder should feel friendly, direct, and calm

Use:

- Progressive sections
- Clear labels
- Soft Pop form tokens
- Visible draft state
- Immediate media previews
- Reordering controls
- Inline validation
- Clean preview transition

Avoid:

- One giant multi-column form
- Excessive accordions
- Decorative progress animation
- Too many floating controls
- Nested panels with no behavioral reason

## 13. Opportunity Screens

Opportunity screens should read like structured marketing problems rather than HR vacancies

Prioritize:

- Goal
- Specialty
- Market
- Industry
- Budget context
- Duration
- Start date
- Relevant Work Evidence

Use Soft Pop's character without reducing information density needed for professional comparison

## 14. Messaging

Messaging should be quiet and functional

Emphasize:

- Participant identity
- Conversation context
- Message content
- Primary next action

Use theme surfaces and state tokens consistently

Avoid workplace-chat controls that the MVP does not need

## 15. Motion

Motion communicates interaction and spatial continuity

Good uses:

- Content expand
- Filter transition
- Image reveal
- Save state
- Profile preview
- Portfolio navigation
- Media reorder
- Dialog and sheet entry
- Message arrival

Avoid:

- Constant floating
- Background animation
- Decorative parallax
- Cursor effects
- Scroll hijacking
- Animation on every hover

Respect reduced motion preferences

## 16. Imagery

Real Work Evidence is the primary imagery source

Development fixtures should use realistic marketing artifacts rather than generic stock scenes

Avoid generic imagery of offices, handshakes, meeting rooms, fake dashboards, robots, or abstract technology objects

## 17. Color

Color comes from the canonical Soft Pop token set

Do not invent a parallel AthR palette

Additional semantic aliases must map to domain states and remain accessible

Color may communicate:

- Brand action
- Interaction state
- Availability
- Verification
- Opportunity status
- Error and warning states

Color must not carry meaning alone

## 18. Radius and Shadows

Use the canonical theme's radius and shadow tokens

Do not increase radius globally to make the UI feel softer

Do not turn all buttons into pills

Use shadows for actual elevation and interaction, especially menus, dialogs, sheets, and dragged media

Prefer spacing, surface contrast, and borders for ordinary page grouping

## 19. Component Rules

Every component needs one clear job

Before adding a container ask:

- Does this grouping improve comprehension
- Does it need a bounded surface
- Does it need a border
- Does it need radius
- Does it need elevation
- Does it need an icon

Do not add every treatment by default

## 20. Responsive Rules

Mobile is intentionally composed, not mechanically stacked

Priority:

1. Work Evidence
2. Specialist identity
3. Professional context
4. Primary action
5. Secondary metadata

Keep sticky actions limited and do not obscure portfolio content

## 21. Accessibility

Required:

- Visible focus states
- Keyboard navigation
- Semantic hierarchy
- Appropriate rendered contrast
- Reduced motion support
- Accessible form errors
- Mobile touch targets
- Media descriptions where appropriate

Verify Soft Pop in both supported appearance modes after implementation rather than assuming upstream token contrast is sufficient for every AthR composition

## 22. Final Screen Review

Before approving a major screen ask:

1. Does it clearly use the canonical Soft Pop design system rather than a guessed lookalike
2. Is Work Evidence still more interesting than interface decoration
3. Can the user compare the professional information they came for
4. Is Soft Pop being used with enough restraint for a professional product
5. Is any information repeated only to fill space
6. Are cards being used where an open layout or row would work better
7. Is the primary action obvious
8. Does mobile have a deliberate composition
9. Are light and dark modes coherent
10. Does accessibility hold after applying the actual theme tokens

If a screen feels like a generic template with Soft Pop colors pasted on top, redesign the composition rather than adding more decoration
