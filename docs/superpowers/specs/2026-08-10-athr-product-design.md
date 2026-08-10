# AthR Product Design Spec

## Product Definition

AthR is a professional work network and freelance marketplace built specifically for digital marketing specialists

The product combines professional identity, proof of work, specialist discovery, collaboration, communication, opportunities, and hiring in one focused experience

The central product model is:

**People -> Work -> Expertise -> Collaboration -> Opportunity**

The specialist should be discovered primarily through evidence of relevant work rather than generic titles, follower count, keyword stuffing, or a single public rating

## Product Position

AthR should not behave like a generic jobs board with profiles attached

It should also not behave like a general professional social feed with freelance features attached

The core experience should connect five things:

1. Who the person is professionally
2. What they have actually worked on
3. What they are good at
4. Who they have worked with
5. What work they are available for now

## Primary Users

### Specialist

Examples include:

- Performance Marketer
- Paid Social Specialist
- Paid Search Specialist
- Media Buyer
- SEO Specialist
- GEO / AEO Specialist
- Growth Marketer
- Content Strategist
- Copywriter
- Creative Strategist
- Social Media Manager
- CRM Specialist
- Lifecycle Marketer
- Email Marketer
- CRO Specialist
- Analytics Specialist
- Tracking Specialist
- Marketing Automation Specialist
- Influencer Marketer
- Community Manager
- Brand Strategist
- Product Marketer
- E-commerce Specialist

### Client or Hiring User

Examples include:

- Founder
- Marketing Manager
- CMO
- Agency
- Brand
- Startup
- Small Business

Account types must not be permanently rigid

A specialist may hire another specialist and a hiring user may also publish work or offer expertise

The onboarding question should capture current intent, not permanent identity:

- I want to find work
- I want to hire
- Both

## Core Product Loops

### Specialist Loop

Create profile -> publish work -> get discovered -> receive opportunity -> collaborate -> complete project -> receive recommendation -> turn completed project into stronger work evidence

### Hiring Loop

Describe need -> discover relevant work -> inspect specialist -> message or invite -> collaborate -> recommend specialist

### Network Loop

See useful work -> follow specialist -> discover related work and collaborators -> save or message -> create a work relationship

## MVP Scope

The first release includes:

- Authentication
- Onboarding
- Specialist profiles
- Client profiles
- Portfolio builder
- Structured marketing case studies
- Portfolio media
- Expertise taxonomy
- Industries
- Markets
- Languages
- Tools
- Availability
- Services
- Search
- Discovery
- Work Feed
- Follow
- Save
- Messaging
- Opportunities
- Project briefs
- Applications
- Invites
- Recommendations
- Collaborator relationships
- Notifications

The first release does not include:

- Escrow
- Complex payment flows
- Complex contracts
- Video meetings
- Courses
- Events
- General purpose communities
- Gamification
- AI chat assistants placed across the product
- Complex recommendation infrastructure
- Fake analytics dashboards

## Profile Model

A professional profile should contain:

### Identity

- Name
- Username
- Photo
- Professional role
- Location
- Timezone
- Languages

### Positioning

Use a concise professional headline rather than a long generic biography

Example:

`Paid Social for DTC brands spending $30k-$200k/mo`

### Expertise

- Primary specialties
- Secondary skills
- Industries
- Markets
- Tools

### Availability

- Available now
- Limited availability
- Booked
- Hours per week if relevant
- Project based
- Retainer
- Consulting

### Evidence

- Selected work
- Full portfolio
- Experience
- Recommendations
- Collaborators
- Services

## Portfolio Model

A portfolio project is a structured marketing case study rather than a simple gallery

Each project can contain:

- Project title
- Client or brand
- Role
- Contribution
- Collaborators
- Objective
- Industry
- Markets
- Channels
- Tools
- Timeline
- Budget range when disclosed
- Media
- Description
- Actions performed
- Results
- Result metrics
- Confidentiality status

Result metrics may include:

- ROAS
- CAC
- CPL
- Revenue
- CTR
- Conversion rate
- Retention
- Traffic

Metrics can be marked as:

- Self reported
- Client verified

Every case study should answer:

1. What was the problem
2. What did I personally own
3. Who worked with me
4. What did I do
5. What changed

## Portfolio Builder

Portfolio creation should avoid a long intimidating form

Recommended flow:

1. Add project title and cover
2. Add source material: upload images, video, PDF, website link, campaign assets
3. Select objective, industry, markets, channels and tools
4. Explain personal contribution
5. Add collaborators
6. Add result metrics when disclosure is possible
7. Mark confidentiality and verification status
8. Preview
9. Publish

Support draft, autosave, preview and publish states

The product should make it possible to move from an empty profile to a credible first case study quickly

## Work Feed

The feed should be centered on useful professional work rather than generic social posting

Supported content types:

- Case Study
- Breakdown
- Teardown
- Experiment
- Availability update
- Collaboration request
- Opportunity

Work media and useful evidence should receive more visual weight than commentary

## Discovery

Discovery should combine structured filters with text intent

Examples:

`Meta buyer with DTC fashion experience in Saudi Arabia`

Relevant signals include:

- Specialty
- Skill
- Relevant portfolio work
- Industry experience
- Market experience
- Language
- Availability
- Budget fit
- Recommendations
- Verified work
- Previous collaboration
- Recency

Follower count must not become the default ranking proxy

Search results should expose relevant work directly rather than requiring every user to open the full profile first

## Project Brief

The project brief should use marketing-specific fields

Possible fields:

- Goal
- Channel
- Market
- Industry
- Business model
- Current marketing situation
- Current spend when relevant
- Required specialty
- Expected deliverables
- Project budget
- Duration
- Start date
- Required availability
- Required tools
- Individual or multiple specialists

After completion, the user should see relevant specialists and relevant work examples

## Messaging

Messaging should remain simple in the MVP

A conversation can include a context reference such as:

- Portfolio project
- Opportunity
- Service
- Profile

Example:

`Regarding: Ramadan Performance Campaign`

The product should not attempt to reproduce a full workplace chat application in the first release

## Trust and Reputation

AthR should not reduce trust to one generic star rating

Trust signals include:

- Worked together
- Client verified project
- Repeat client
- Repeat collaborator
- Completed project
- Recommended for a specific skill
- Response reliability
- Verified identity
- Confirmed collaboration

## Collaboration Graph

Users can tag collaborators on portfolio projects

The collaborator can confirm the relationship

Profiles may show:

- Previous collaborators
- Frequently works with

A later release may allow a specialist to publish a reusable Crew composed of several specialists

Example:

DTC Growth Crew

- Creative Strategist
- Media Buyer
- Copywriter
- Designer
- Tracking Specialist

This is intentionally outside the first MVP

## Information Architecture

Primary navigation:

- Home
- Discover
- Opportunities
- Messages
- Saved
- Profile

Primary creation actions:

- Share work
- Post opportunity

Key routes:

- `/`
- `/discover`
- `/opportunities`
- `/messages`
- `/saved`
- `/settings`
- `/u/[username]`
- `/u/[username]/work/[slug]`
- `/work/new`
- `/work/[id]/edit`
- `/opportunities/new`
- `/opportunities/[id]`
- `/companies/[slug]`

## Activation

A specialist is activated when they have:

- Completed the core profile
- Selected primary expertise
- Set availability
- Published at least one portfolio project

A hiring user is activated when they have completed at least one meaningful hiring action:

- Saved a specialist
- Messaged a specialist
- Created a project brief

## North Star and Supporting Metrics

Primary working metric:

**Qualified work conversations created per active specialist**

Supporting funnel metrics:

- Profile completion rate
- Portfolio publication rate
- Work view -> profile visit
- Profile -> message
- Brief -> relevant match view
- Match -> conversation
- Conversation -> project
- Project -> recommendation
- Completed work -> new portfolio evidence

## Visual Direction

The product should feel like an editorial professional network built around excellent work

The visual identity should combine:

- Professional directory
- Editorial publication
- Portfolio experience
- Focused freelance marketplace

The work itself should be the most visually interesting material

Avoid generic SaaS conventions where they do not serve the content

Do not use:

- Glassmorphism
- Neon
- Random gradients
- Purple AI palette
- Floating blobs
- Generic 3D objects
- Gradient text
- Fake charts
- Generic dashboard cards
- Huge rounded containers everywhere
- Excessive shadows
- Random decorative icons
- Robot imagery
- Excessive motion

## Technical Direction

Recommended starting stack:

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- shadcn/ui primitives used as behavior and accessibility primitives, not default visual styling
- Supabase PostgreSQL
- Supabase Auth
- Supabase Storage
- Supabase Realtime where needed

Start search with PostgreSQL text search and structured filters

Do not add vector search or dedicated search infrastructure until product behavior proves it is needed

## Data Domains

Core entities:

- users
- profiles
- specialties
- skills
- profile_skills
- industries
- profile_industries
- markets
- profile_markets
- tools
- profile_tools
- portfolio_projects
- portfolio_media
- portfolio_metrics
- project_collaborators
- services
- availability
- posts
- post_media
- comments
- reactions
- follows
- saves
- companies
- company_members
- opportunities
- opportunity_skills
- applications
- invites
- conversations
- conversation_members
- messages
- recommendations
- work_relationships
- notifications
- reports

These names are a domain map, not permission to create all tables blindly

Normalization and ownership rules must be confirmed during implementation

## Product Priorities

The highest quality bar in the first release applies to:

1. Profile
2. Portfolio Builder
3. Discovery

These three experiences determine whether AthR has a distinct reason to exist

## Acceptance Criteria for Product Design

The product design is coherent when:

- A specialist can understand why publishing work improves discovery
- A hiring user can move from need to relevant proof of work without browsing generic profiles endlessly
- Collaboration context is visible and confirmable
- The feed has a professional work purpose
- Profiles expose evidence before generic biography
- Reputation is based on multiple work signals
- The first release can ship without payment infrastructure
- The UI direction cannot be mistaken for a generic AI SaaS template
