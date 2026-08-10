# AthR MVP Roadmap

## Objective

Ship a focused first release that proves one behavior:

A digital marketing specialist can publish credible work, be discovered for relevant expertise, start a qualified professional conversation, and build stronger reputation from completed work

## Phase 0: Product and Design Foundation

### Deliverables

- Product spec approved
- Core journeys approved
- Information architecture approved
- Visual direction approved
- Data ownership rules approved
- MVP acceptance criteria approved

### Exit criteria

- No core feature depends on undefined business rules
- Profile, portfolio and discovery hierarchy are clear
- Out-of-scope list is explicit

## Phase 1: Identity and Onboarding

### Build

- Supabase project configuration
- Auth
- Session handling
- Protected application shell
- Profile model
- Username
- Professional headline
- Languages
- Location and timezone
- Intent selection
- Taxonomy seed data
- Skills and specialties
- Industries
- Markets
- Tools
- Availability
- Specialist onboarding
- Hiring onboarding

### Activation target

A new specialist can create a professional identity and reach the first portfolio creation step

### Exit criteria

- Signup and login work reliably
- Protected routes are enforced
- Profile writes respect ownership
- Taxonomy selections persist correctly
- Partial onboarding can resume
- Mobile onboarding is usable

## Phase 2: Portfolio and Proof of Work

### Build

- Portfolio project data model
- Draft state
- Autosave
- Media upload
- Media ordering
- Cover selection
- Structured context
- Contribution fields
- Results
- Metrics
- Confidentiality controls
- Collaborator requests
- Preview
- Publish
- Public case study page
- Selected work on profile

### Activation target

A specialist can publish one complete, credible case study without external portfolio tooling

### Exit criteria

- Drafts are private
- Published projects are public according to visibility
- Media ownership is enforced
- Broken upload states recover cleanly
- Collaborators cannot be shown as confirmed without consent
- Case studies work well on mobile

## Phase 3: Discovery

### Build

- Public profile indexing
- Portfolio indexing
- Text search
- Specialty filters
- Skill filters
- Industry filters
- Market filters
- Availability filter
- Language filter
- People results
- Work results
- Save person
- Save work
- Empty search state

### Product target

A hiring user can move from a marketing need to a small set of relevant specialists with visible evidence

### Exit criteria

- Results show relevant work without a profile click
- Filters combine correctly
- Search handles empty and long queries
- Private content never appears
- Search remains usable on mobile

## Phase 4: Professional Network

### Build

- Follow
- Unfollow
- Work Feed
- Case Study feed item
- Breakdown feed item
- Teardown feed item
- Experiment feed item
- Availability update
- Collaboration request
- Save opportunities later in Phase 5
- Recommendation creation and display

### Product target

Users return because useful work and professional relationships create relevant new context

### Exit criteria

- Feed types are visually distinct
- Follow state is consistent
- Feed does not depend on vanity ranking
- Recommendations are skill-specific
- Blocked users do not appear where they should be excluded

## Phase 5: Opportunities and Project Briefs

### Build

- Marketing-specific project brief
- Draft opportunity
- Publish opportunity
- Edit opportunity
- Close opportunity
- Opportunity discovery
- Save opportunity
- Apply
- Attach relevant portfolio projects
- Withdraw application
- Invite specialist
- Applicant review states

### Product target

A hiring user can turn a marketing problem into a structured opportunity and reach relevant specialists

### Exit criteria

- Duplicate applications are impossible
- Closed opportunities reject new applications
- Opportunity owners see only allowed applicant data
- Applicants see only their own application state
- Brief can feed discovery filters

## Phase 6: Messaging and Notifications

### Build

- Conversations
- Conversation membership
- Context references
- Text messaging
- Realtime message delivery
- Read state
- Message list
- New message notification
- Invite notification
- Application status notification
- Collaborator confirmation notification
- Recommendation notification

### Product target

A useful work or opportunity context can turn into a direct professional conversation without leaving AthR

### Exit criteria

- Non-members cannot read conversations
- Non-members cannot write messages
- Context remains visible
- Messaging works under reconnect conditions
- Important notifications are actionable

## Phase 7: Trust, Safety and Launch Readiness

### Build

- Collaborator confirmation lifecycle
- Work relationship evidence
- Metric verification state
- Block
- Report
- Moderation status
- Account deletion handling
- Content deletion handling
- Abuse controls
- Error monitoring
- Product analytics for core funnel

### Product target

AthR can open to real users without relying on manual trust assumptions

### Exit criteria

- Reports can be created and tracked
- Block behavior is consistent across search, feed and messaging
- Deleted users do not corrupt project pages
- Verification claims cannot be forged through normal client requests
- Core funnel events are measurable

## Phase 8: Private Beta

### Suggested beta groups

- Media buyers
- Creative strategists
- Copywriters
- SEO specialists
- Growth marketers
- CRM or lifecycle marketers
- A small group of founders, marketing managers and agencies

### Beta questions

- Can specialists create a portfolio without help
- Does the portfolio express personal contribution clearly
- Can hiring users find relevant work faster than browsing generic profiles
- Are availability states useful
- Does the Work Feed contain professional value
- Do users understand recommendation context
- Do contextual conversations feel natural

### Beta gate

Do not add broad new feature categories while major friction remains in profile, portfolio or discovery

## Phase 9: Post-MVP Candidates

Only after core behavior is proven, consider:

- Crew profiles
- Combined specialist inquiries
- Contracts
- Milestones
- Invoices
- Payments
- Private talent lists
- Agency freelancer rosters
- Company workspaces
- Advanced matching
- Portfolio analytics
- Verified client accounts
- Referral flows

## Product Metrics by Phase

### Identity

- Signup completion
- Onboarding completion
- Specialist activation

### Portfolio

- First project started
- First project published
- Average time to first publication
- Portfolio completion depth

### Discovery

- Search to result click
- Work result to profile visit
- Profile to save
- Profile to message

### Opportunity

- Brief completion
- Opportunity publication
- Relevant application rate
- Invite acceptance

### Messaging

- Qualified conversation started
- Response rate
- Conversation linked to work or opportunity

### Trust

- Collaborator confirmation rate
- Recommendation rate
- Completed project to new work evidence

## North Star

**Qualified work conversations created per active specialist**

The goal is not maximum screen time

The goal is more relevant professional work relationships
