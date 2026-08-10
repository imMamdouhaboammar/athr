# AthR UI and UX Master Prompt

Use this prompt with a product designer, frontend agent or design-focused coding agent

```text
Design and implement AthR, a professional work network and freelance marketplace for digital marketing specialists

NON-NEGOTIABLE COMPONENT SOURCING WORKFLOW

Do not reinvent common UI

Before creating any UI module from scratch:

1. Search the existing AthR Component Bank
2. Search 21st.dev using the official CLI
3. Inspect complete components, screens and templates before reaching for small primitives
4. Install the strongest suitable candidate through `21st add` or the exact shadcn registry command published by that component
5. Adapt the installed source to AthR
6. Only write a custom module when no suitable candidate exists or adapting existing candidates would produce a worse implementation

Default decision order:

Existing AthR Component Bank
-> 21st.dev complete component or screen
-> 21st.dev primitive combination
-> existing shadcn primitive
-> custom implementation only with a documented reason

Typical search flow:

21st search "professional social navigation"
21st search "social post card"
21st search "portfolio gallery"
21st search "profile header"
21st search "filter bar"
21st search "messaging sidebar"

Do not reproduce an installable 21st.dev component manually from screenshots or memory

Do not assemble a weaker custom screen from many generic primitives when a strong complete 21st.dev screen already solves most of the interaction

After installation, preserve useful interaction quality but replace demo content, irrelevant styling, redundant dependencies and product semantics that do not fit AthR

Every finished UI task should record:

21st search performed
candidate selected
install method
local primitive path
AthR composition path if applicable
dependencies added
adaptations made
Soft Pop status
responsive review
accessibility review
typecheck
build

CANONICAL DESIGN SYSTEM

Use Soft Pop by serafimcloud on 21st.dev as the base design system:
https://21st.dev/@serafimcloud/themes/soft-pop

This theme is mandatory, not loose inspiration

Retrieve the actual current published Soft Pop token set at implementation time
Do not approximate its colors, radius, fonts, shadows, light mode or dark mode from memory or screenshots

Use the Soft Pop tokens for the base visual language and build AthR-specific product composition on top of them

Soft Pop defines the token layer
AthR defines layout, hierarchy, information density, Work Evidence presentation and interaction behavior

Do not replace Soft Pop with default shadcn styling or another theme
Do not invent a parallel palette
Use semantic AthR aliases only for real domain states such as Availability, Verification State and Opportunity status

PRODUCT VISUAL IDEA

Create a professional work network where real Work Evidence is the main visual material

The experience combines:
professional identity
portfolio
professional discovery
focused freelance marketplace
work-centered network

The result should feel friendly and expressive without becoming childish or decorative

Do not imitate LinkedIn, Upwork, Fiverr, Contra, Behance or Dribbble directly

DESIGN CHARACTER

Professional
Friendly
Expressive
Editorial
Clear
Approachable
Distinctive
Highly legible
Content first

SOFT POP WITH PROFESSIONAL RESTRAINT

Use Soft Pop's actual token character for surfaces, controls, borders, focus, radius, typography and elevation

Do not interpret "soft" as:
excessive pills
huge rounded rectangles
a card around every section
large empty spacing
constant shadows
playful decoration unrelated to the user's work

The user's portfolio must remain visually stronger than the interface around it

ANTI-SLOP GUARDRAILS

No glassmorphism
No neon or cyber styling
No unrelated AI visual language
No floating abstract blobs
No glowing technology objects
No generic 3D decoration
No decorative gradient text
No fake analytics
No fake charts
No generic dashboard widget wall
No robot imagery
No huge empty product hero
No nested card stacks
No animation without interaction meaning

TYPOGRAPHY

Use the typography tokens supplied by Soft Pop when present

Create strong hierarchy between:
page identity
work title
professional headline
section heading
body
metadata
metrics
actions

Do not use oversized marketing-site typography inside dense authenticated screens

LAYOUT

Use a disciplined responsive grid

Mix:
full-width Work Evidence
editorial grids
compact professional rows
split layouts
horizontal work strips
dense discovery results
clean long-form sections
focused panels where behavior genuinely needs a container

Do not create one universal card component for every content type

NAVIGATION

Keep primary navigation compact

Primary areas:
Home
Discover
Opportunities
Messages
Saved
Profile

Contextual creation actions:
Share work
Post opportunity

Do not turn navigation into a decorative floating dock unless there is a functional reason

HOME

Home is the Work Feed

Prioritize:
Case Studies
professional breakdowns
experiments
Availability updates
collaboration requests
relevant Opportunities

Different content types may use different compositions

Generic commentary should not visually overpower work

DISCOVER

Create a comparison-friendly discovery experience

Search may accept intent such as:
Paid social specialist with DTC fashion experience in Saudi Arabia

Useful filters include:
Specialty
Skill
Industry
Market
Availability
Language
Engagement type
Rate or budget fit where supported

Results should expose relevant Work Evidence directly beside the Specialist when possible

Do not use follower count as the main visual or ranking signal

PROFILE

The Profile is professional identity plus curated Work Evidence

Hierarchy:
Identity
Professional positioning
Availability
Primary expertise
Selected Work
Services
Experience
Collaborators
Recommendations

Selected Work receives more visual area than biography

PORTFOLIO

The Portfolio is one of the highest-quality experiences in the product

Support:
image
video
carousel
document
website
campaign creative

Case Study rhythm:
Project identity
Hero media
Context
Contribution
Work gallery
Results
Collaborators
Next action

Do not tint or decorate user Work Evidence to make it match Soft Pop
Soft Pop frames the work; it does not restyle the work

Present Work Metrics as evidence, not dashboard widgets
Always make Verification State clear

PORTFOLIO BUILDER

Use progressive sections
clear labels
Soft Pop form tokens
visible draft state
autosave feedback
immediate media previews
reordering controls
inline validation
preview before publish

Preserve entered information across recoverable errors

PROJECT BRIEF AND OPPORTUNITIES

Project Briefs should read like structured marketing needs rather than HR job descriptions

Prioritize:
goal
Specialty
Market
Industry
current situation
expected work
budget context
duration
start date
Availability needs

After a brief, move naturally into relevant Specialists and Work Evidence

MESSAGING

Keep messaging quiet and professional

Show conversation context clearly, such as:
Regarding a Portfolio Project
Regarding an Opportunity
Regarding a Service

Do not recreate Slack or a full workplace communication product

STATUS AND TRUST

Use text plus visual treatment for:
Available now
Limited availability
Booked
Self reported
Client verified
Opportunity states

Color cannot be the only indicator

Do not make self-reported claims look platform-certified

MOTION

Use motion for state change and spatial continuity only:
open and close
expand and collapse
filter change
save state
profile preview
portfolio navigation
media reorder
dialog or sheet transition
message arrival

Respect reduced-motion preferences

RESPONSIVE DESIGN

Do not mechanically stack desktop UI

Mobile priority:
Work Evidence
Identity
Professional context
Primary action
Secondary metadata

Use sticky actions sparingly

ACCESSIBILITY

Verify rendered contrast after applying the actual Soft Pop tokens

Maintain:
keyboard navigation
visible focus states
semantic hierarchy
reduced motion
accessible errors
touch targets suitable for mobile
media descriptions where appropriate

Verify both supported appearance modes

FINAL QUALITY TEST

Before accepting a screen ask:

Did the agent search AthR and 21st.dev before writing custom UI?
If no, stop and search first

Was a strong existing complete component or screen ignored without a documented reason?
If yes, reconsider the implementation

Does it use the actual Soft Pop design system rather than a guessed lookalike?
If no, correct the token layer

Could this screen belong unchanged to a generic SaaS template?
If yes, redesign the composition

Is real Work Evidence more visually important than decoration?
If no, reduce the interface treatment

Can a professional compare the information they came for quickly?
If no, improve hierarchy and density

Is Soft Pop being used with enough restraint for a professional work product?
If no, simplify

Does every container, border, radius, icon and animation have a functional reason?
If no, remove or simplify it
```
