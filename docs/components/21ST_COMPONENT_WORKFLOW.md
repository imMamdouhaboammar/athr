# AthR 21st.dev Component Workflow

## Non-Negotiable Rule

**Do not reinvent a UI module that already exists at sufficient quality**

AthR uses 21st.dev as the default sourcing layer for UI modules, screens, templates, themes, and useful interaction patterns

The coding agent must search 21st.dev before designing or implementing a new UI module from scratch

Custom UI implementation is the fallback, not the default

## Required Workflow

For every new UI requirement:

1. Define the exact product job
2. Search the existing AthR Component Bank
3. Search 21st.dev for suitable modules
4. Inspect the strongest relevant candidates
5. Prefer an existing complete module or screen over assembling a weaker version from many generic primitives
6. Install the selected source through the 21st CLI or the component's shadcn registry command
7. Preserve the installed module's useful interaction behavior
8. Adapt it to AthR domain requirements
9. Apply the canonical Soft Pop theme and AthR semantic tokens
10. Remove demo content, irrelevant styling, unnecessary dependencies, and behaviors that do not fit AthR
11. Add the finished module to the AthR Component Bank
12. Verify behavior, responsive treatment, accessibility, type safety, and production build

Only after steps 1 through 5 fail to produce a suitable candidate may the agent design a new UI module from scratch

## CLI First

The preferred agent workflow uses the official 21st CLI

Install and authenticate:

```bash
npm i -g @21st-dev/cli
21st login
```

Search before coding:

```bash
21st search "professional social navigation"
21st search "social post card"
21st search "portfolio gallery"
21st search "profile header"
21st search "messaging sidebar"
21st search "filter bar"
```

Install a selected module:

```bash
21st add <scope>/<component-name>
```

When a 21st component page exposes a shadcn registry install command, that command is also acceptable

Example shape:

```bash
npx shadcn@latest add https://21st.dev/r/<scope>/<component>
```

Use the exact install command shown by the selected component rather than guessing its registry path

## Search Before Generate

A coding agent must not begin with prompts such as:

- build me a navbar from scratch
- create a card component
- make a portfolio carousel
- create a messaging panel

Instead begin with:

```text
What existing AthR or 21st.dev module already solves most of this interaction?
```

The default decision order is:

```text
Existing AthR Component Bank
-> 21st.dev complete component or screen
-> 21st.dev primitive combination
-> shadcn primitive already present in the repo
-> custom AthR implementation only when justified
```

## Prefer Complete Components

When a high-quality complete 21st.dev module covers the requested job, prefer installing and adapting it rather than reconstructing the same design from Button, Card, Avatar, Badge, and other primitives manually

Example:

If AthR needs a polished portfolio gallery and 21st.dev contains a gallery that already solves:

- responsive media layout
- keyboard navigation
- touch interaction
- transition behavior
- media sizing

install that gallery and adapt it

Do not recreate it solely to make the code look more original

## Prefer Real Screens for Complex Surfaces

For complex product areas such as:

- Discover
- Profile
- Portfolio Builder
- Work Feed
- Opportunity detail
- Application review
- Messaging
- Settings

search both components and full screens/templates before implementation

A high-quality existing screen can supply better layout relationships than combining unrelated small modules after the fact

AthR should adapt the screen to its information architecture rather than inherit irrelevant product semantics

## Selection Criteria

Do not choose a component simply because it looks attractive in isolation

Score candidates against:

### Product Fit

Does it solve the actual AthR interaction?

### Information Fit

Can it carry AthR's real professional information without awkward hacks?

### Soft Pop Compatibility

Can it use the canonical theme tokens cleanly?

### Accessibility

Does it have or allow correct keyboard, focus, labeling, and reduced-motion behavior?

### Responsive Behavior

Does it remain useful on AthR's target small and large screens?

### Dependency Cost

Does it introduce a large dependency for a small visual effect?

### Adaptation Cost

Would adapting the component require more complexity than choosing another candidate?

### Code Ownership

Can the installed code live naturally inside AthR's local component structure and be maintained by the project?

## Adapt, Do Not Blindly Copy

21st.dev is the component source, not the product specification

After installation, the coding agent must adapt:

- labels
- fixture content
- props
- domain types
- route behavior
- permissions
- loading states
- empty states
- errors
- responsive composition
- accessibility gaps
- Soft Pop tokens
- AthR status semantics

Do not keep irrelevant demo behavior merely because it shipped with the component

## Preserve Good Behavior

Do not strip useful interaction quality during adaptation

Examples:

- animation timing that provides spatial continuity
- working keyboard behavior
- touch-friendly interaction
- carefully implemented responsive transitions
- sensible media handling
- accessible focus behavior

If a behavior is removed, the replacement should be at least as usable for AthR's actual job

## Theme Rule

Every imported 21st.dev module must be normalized to:

**Soft Pop by serafimcloud on 21st.dev**

Canonical theme:

https://21st.dev/@serafimcloud/themes/soft-pop

Prefer semantic classes such as:

```text
bg-background
bg-card
bg-muted
text-foreground
text-muted-foreground
text-primary
border-border
ring-ring
```

Do not preserve arbitrary component-specific colors when they are only decorative

Retain a source color only when it has real semantic meaning that AthR's theme cannot represent, and document that decision

## Icons

Prefer the icon library already established in AthR before accepting another icon dependency from an imported component

Current default:

```text
lucide-react
```

If a 21st.dev module arrives with another generic icon package, replace those icons with equivalent Lucide icons when doing so does not reduce meaning or product quality

Do not replace actual brand logos with Lucide icons

## Dependencies

The CLI-installed module may add npm dependencies

After installation:

1. Inspect every new dependency
2. Keep dependencies required for meaningful behavior
3. Remove dependencies used only for trivial decoration when AthR already has an equivalent
4. Never rewrite a sophisticated module solely to avoid one justified dependency
5. Run the actual build and typecheck after dependency changes

## File Placement

Generic reusable imported modules:

```text
/components/ui
```

AthR-specific compositions:

```text
/components/athr/<domain>
```

Examples:

```text
/components/ui/expandable-tabs.tsx
/components/athr/navigation/primary-nav.tsx

/components/ui/post-card.tsx
/components/athr/feed/work-post-card.tsx
```

Do not embed AthR route logic or domain terminology into a generic imported primitive unless that module is intentionally being converted into an AthR-only composition

## Component Bank Requirement

After a module is selected and adapted, document it under:

```text
/docs/components/<area>/<MODULE>.md
```

Record:

- source URL or 21st identifier
- original component name
- install command used
- why this candidate was selected
- alternatives rejected when relevant
- local primitive path
- AthR composition path
- dependencies
- modifications made after install
- Soft Pop treatment
- supported states
- responsive behavior
- accessibility behavior
- verification status

## No Duplicate Reinvention

Before creating a new module, search:

```text
/components/ui
/components/athr
/docs/components
21st.dev
```

If an equivalent module already exists, extend or deepen the existing module where that improves locality

Do not create:

```text
profile-card.tsx
profile-card-v2.tsx
new-profile-card.tsx
modern-profile-card.tsx
```

as separate competing implementations without a documented experiment or replacement plan

## Exception: When Custom Code Is Correct

A custom module is allowed when one or more of the following are true:

1. No relevant component exists after a meaningful 21st.dev search
2. Available components conflict with AthR's product behavior
3. Adaptation would require more complexity than a focused implementation
4. Available implementations fail accessibility or responsive requirements in ways that are expensive to repair
5. The interaction is uniquely tied to AthR's domain and is not a generic UI pattern
6. Security or privacy requirements make the imported behavior inappropriate

The agent must record the reason in the Component Bank entry or implementation issue

`I preferred writing it myself` is not a valid reason

## Forbidden Agent Behavior

Do not:

- start coding a common UI pattern before searching 21st.dev
- reproduce a 21st.dev component manually from screenshots when installable source exists
- recreate an installed component with a visually similar custom implementation without a product reason
- install several near-duplicate components and leave all of them in the codebase
- keep demo brands, names, copy, or fake analytics in AthR production surfaces
- preserve hard-coded colors that fight Soft Pop
- add a new icon package for icons already available in the project's standard icon set
- call custom code "better" without verifying the existing candidate first

## Agent Completion Evidence

For UI tasks, the coding agent should be able to state:

```text
21st search performed: yes
Candidate selected: <identifier or URL>
Install method: <21st add or shadcn command>
Local primitive: <path>
AthR composition: <path if applicable>
Dependencies added: <list>
Adaptations: <summary>
Soft Pop applied: yes
Responsive review: pass/fail
Accessibility review: pass/fail
Typecheck: pass/fail
Build: pass/fail
```

If `21st search performed` is `no`, the UI task is incomplete unless it falls under a documented exception
