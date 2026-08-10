# AthR UX and Information Architecture

## 1. UX Goal

AthR should feel like a professional network designed around work evidence, not a dashboard with social features attached

The interface should help users answer these questions quickly:

- Who is this person professionally
- What have they actually worked on
- Is that work relevant to me
- Are they available
- Can I trust the relationship signals around them
- What is the fastest useful next action

## 2. Primary Navigation

Desktop primary navigation:

- Home
- Discover
- Opportunities
- Messages
- Saved
- Profile

Primary creation actions:

- Share work
- Post opportunity

Mobile navigation should preserve the same mental model without simply stacking the desktop layout

## 3. Route Map

### Public and discovery

- `/`
- `/discover`
- `/discover/people`
- `/discover/work`
- `/opportunities`
- `/opportunities/[id]`
- `/u/[username]`
- `/u/[username]/work/[slug]`
- `/companies/[slug]`

### Authenticated creation

- `/work/new`
- `/work/[id]/edit`
- `/opportunities/new`
- `/opportunities/[id]/edit`

### Private

- `/messages`
- `/messages/[conversationId]`
- `/saved`
- `/notifications`
- `/settings`

### Onboarding

- `/onboarding/intent`
- `/onboarding/profile`
- `/onboarding/expertise`
- `/onboarding/availability`
- `/onboarding/work`

## 4. Entry Journeys

### New specialist

Signup -> choose intent -> core identity -> select expertise -> set availability -> create first portfolio project -> preview profile -> enter Work Feed

Activation is reached only after the user has meaningful evidence, not merely an account

### New hiring user

Signup -> choose intent -> basic professional identity -> company context if relevant -> choose whether to browse or create a brief -> discover relevant specialists -> save or message

Do not force a project post before allowing discovery

### Returning specialist

Home -> relevant work and opportunities -> profile views or messages -> update availability or publish new work

### Returning hiring user

Home or Discover -> saved specialists -> relevant new work -> project brief or message

## 5. Home: Work Feed

Home is not a generic posting feed

Recommended composition:

### Top context

- Compact greeting or current status
- Availability control for specialists
- Fast creation entry for Share work or Post opportunity

### Feed modules

- New case studies from followed specialists
- Relevant professional breakdowns
- Experiments
- Collaboration requests
- Relevant opportunities
- Availability updates from saved or followed specialists

### Feed item rules

Every feed type should have its own structure

Do not use one universal card for all content

A case study item can prioritize project media and evidence

A teardown can prioritize the analyzed artifact and a concise point of view

An opportunity can prioritize goal, specialty, market, duration and budget context

## 6. Discover

Discover should support both browsing and intent-driven search

### Search entry

Support queries such as:

`Meta buyer with DTC fashion experience in Saudi Arabia`

### Primary result modes

- People
- Work

### Filters

- Specialty
- Skill
- Industry
- Market
- Availability
- Language
- Project type
- Rate or budget range when available
- Tool experience when relevant

### Person result anatomy

- Name and photo
- Headline
- Primary specialty
- Market and industry evidence
- Availability
- Relevant work preview
- Recommendation or collaboration signal
- Save
- Message or View profile

### Work result anatomy

- Project title
- Specialist identity
- Cover media
- Objective
- Channels
- Market
- Result summary when disclosed
- Verification state

## 7. Specialist Profile

Recommended information hierarchy:

### Header

- Photo
- Name
- Role
- Professional headline
- Location and timezone
- Languages
- Availability
- Message
- Save
- Follow

### Expertise strip

- Primary specialties
- Selected skills
- Markets
- Industries

### Selected work

Show three to six high-quality projects before long biography or work history

### Services

Optional fixed-scope or consulting offers

### Experience

Professional history where useful

### Collaborators

Confirmed previous collaborators and frequent collaborators when enough evidence exists

### Recommendations

Skill-specific recommendations rather than a generic testimonial wall

## 8. Portfolio Case Study Page

Recommended sequence:

### Project identity

- Project title
- Brand or client when discloseable
- Specialist role
- Date or timeline

### Hero media

The actual work should dominate the top of the page

### Context

- Objective
- Industry
- Market
- Channels
- Tools

### Contribution

Explain exactly what the specialist owned

### Work gallery

Support image, video, carousel, document, website and campaign assets

### Results

Use restrained metric presentation

Do not create a fake analytics dashboard

### Collaborators

Show confirmed collaboration and roles

### Next action

- Message about this work
- Save specialist
- View related work

## 9. Portfolio Builder UX

Use progressive sections instead of a giant form

### Step 1: Start

- Project title
- Client or brand
- Cover or first asset

### Step 2: Context

- Objective
- Industry
- Market
- Channels
- Tools

### Step 3: Contribution

- Role
- Personal contribution
- Actions taken

### Step 4: Work

- Upload media
- Reorder
- Add captions
- Select cover

### Step 5: Collaborators

- Search existing user
- Invite by email later if needed
- Assign role

### Step 6: Results

- Result narrative
- Optional metrics
- Verification status

### Step 7: Privacy

- Public client name or hidden
- Public metrics or hidden
- Confidential notes excluded from public view

### Step 8: Preview and Publish

Persistent draft state and autosave are required

## 10. Project Brief UX

The brief should behave like a focused sequence of meaningful decisions

Recommended steps:

1. What are you trying to achieve
2. Which market is involved
3. Which channels are already active
4. What is the current marketing situation
5. Which specialist do you think you need
6. What should be delivered
7. What is the budget range
8. When should work start
9. Is this one person or multiple specialists

After completion:

- Show relevant specialists
- Show relevant work samples
- Let the user publish as an opportunity
- Let the user directly invite selected specialists

## 11. Opportunities

### Opportunity list

Show:

- Goal
- Required specialty
- Market
- Industry
- Duration
- Budget context
- Posted date
- Application status for current user

### Opportunity detail

Show business context before a long description

Primary actions:

- Apply
- Save
- Ask a question through message when permitted

### Application flow

Keep it short

Use existing profile evidence rather than asking the specialist to retype their career history

Suggested application inputs:

- Short context-specific note
- Relevant portfolio projects
- Availability confirmation
- Rate or project amount when required

## 12. Messaging

Messaging should remain compact and contextual

Conversation header can show:

- Other participant
- Context reference
- Opportunity or portfolio project title

Supported basics:

- Text
- Links
- Attachments later if required
- Read state
- Block and report controls

Do not implement channels, threads, huddles or workplace chat concepts in V1

## 13. Saved

Saved can contain separate views for:

- People
- Work
- Opportunities

The feature should support real hiring workflows, not merely a heart icon

Later it may evolve into private talent lists

## 14. Notifications

Prioritize notifications that can change a user's next action

Examples:

- New message
- Opportunity invite
- Application status change
- Collaborator confirmation request
- Recommendation received
- Relevant saved specialist becomes available
- Someone confirms a shared project

Avoid noisy engagement notifications in the early product

## 15. Empty States

Every core area needs an intentional empty state

Examples:

### Empty portfolio

Explain the value of adding one credible project and offer a clear creation action

### Empty saved list

Lead to discovery with relevant filters

### Empty messages

Lead to discover or opportunities instead of showing decorative art only

### Empty search

Offer filter relaxation and nearby specialties or markets rather than a dead end

## 16. Mobile Principles

- Prioritize portfolio media and discovery
- Keep filters reachable without permanently occupying the screen
- Use bottom sheets selectively for filters and actions
- Keep key profile actions visible without covering content
- Do not turn every desktop section into a vertical card stack
- Preserve strong typography and whitespace discipline

## 17. Accessibility Requirements

- Full keyboard navigation
- Visible focus states
- Semantic headings
- Labeled form controls
- Clear validation errors
- Appropriate contrast
- Reduced motion support
- Touch target sizing suitable for mobile
- Media alt text or accessible descriptions when appropriate

## 18. UX Acceptance Criteria

A screen is not complete unless:

- Its primary user job is obvious
- The main action is clear
- Empty state exists
- Loading state exists
- Error state exists
- Mobile behavior is intentional
- Keyboard behavior is tested
- Work evidence is more prominent than decorative UI
- No information is duplicated simply to fill space
