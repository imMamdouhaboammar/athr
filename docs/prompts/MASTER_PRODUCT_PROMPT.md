# AthR Master Product Prompt

Use this prompt when starting product planning or implementation with a coding agent

```text
You are designing and building a production-quality professional network and freelance marketplace exclusively for digital marketing specialists

The product name is AthR

This is NOT another generic Upwork clone
This is NOT LinkedIn with a jobs page
This is NOT a SaaS dashboard
This is NOT an AI-themed product

PRODUCT THESIS

Build a professional work network where:

People -> Work -> Expertise -> Collaboration -> Opportunity

A specialist should be discovered primarily through evidence of their work, not generic titles, follower counts, or keyword-stuffed profiles

The product combines:

1. Professional identity
2. Portfolio and proof of work
3. Specialist discovery
4. Professional networking
5. Collaboration
6. Freelance opportunities
7. Client hiring

TARGET PROFESSIONALS

The platform is built specifically for digital marketing disciplines including:

- Performance Marketing
- Paid Social
- Paid Search
- Media Buying
- SEO
- GEO / AEO
- Growth Marketing
- Content Strategy
- Copywriting
- Creative Strategy
- Social Media
- CRM
- Lifecycle Marketing
- Email Marketing
- CRO
- Analytics
- Marketing Tracking
- Marketing Automation
- Influencer Marketing
- Community
- Brand Strategy
- Product Marketing
- E-commerce Marketing

USER TYPES

Do not create unnecessarily rigid account types

A user may:

- offer services
- hire specialists
- collaborate with specialists
- publish professional work

Primary modes:

Specialist
Client / Hiring user

CORE PRODUCT LOOP

Specialist:
Create profile
-> publish work
-> get discovered
-> receive opportunity
-> collaborate
-> complete project
-> receive recommendation
-> turn project into stronger work evidence

Client:
Describe need
-> discover relevant work
-> inspect specialist
-> message or invite
-> collaborate
-> recommend specialist

CORE MVP

Build:

Authentication
Onboarding
Specialist profiles
Client profiles
Portfolio builder
Structured marketing case studies
Portfolio media
Expertise taxonomy
Industries
Markets
Tools
Availability
Services
Search
Discovery
Work Feed
Follow
Save
Messaging
Opportunities
Project briefs
Applications
Invites
Recommendations
Collaborator relationships
Notifications

Do NOT implement in the first MVP:

Escrow
Complex payments
Complex contracts
Video calls
Courses
Events
Generic communities
Gamification
AI chat assistants
Fake analytics dashboards
Heavy recommendation infrastructure

PORTFOLIO MODEL

A portfolio project is not merely an image gallery

Each case study can contain:

Project title
Client / brand
Role
Contribution
Collaborators
Objective
Industry
Markets
Channels
Tools
Timeline
Budget range if disclosed
Media
Description
Actions performed
Results
Result metrics
Confidentiality status

Metrics may be marked:

Self reported
Client verified

Examples:

ROAS
CAC
CPL
Revenue
CTR
Conversion rate
Retention
Traffic

A specialist must be able to clearly state:

What was the problem?
What did I personally own?
Who worked with me?
What did I do?
What changed?

COLLABORATION GRAPH

Allow users to tag actual collaborators on portfolio projects

Collaborators can confirm the relationship

Profiles should show confirmed relationship evidence only

Possible later profile sections:

Frequently works with
Previous collaborators

A later release can support specialist teams or Crews

DISCOVERY

Do not rank specialists simply by follower count

Relevant signals include:

Specialty
Skill
Relevant work
Industry experience
Market experience
Language
Availability
Budget fit
Recommendations
Verified work
Previous collaboration
Recency

PROJECT BRIEF

Create a marketing-specific project brief builder

Possible fields:

Goal
Channel
Market
Industry
Business model
Current marketing situation
Current spend if relevant
Required specialty
Expected deliverables
Project budget
Duration
Start date
Required availability
Required tools
Individual vs multiple specialists

After the brief, show relevant specialists and relevant portfolio projects

WORK FEED

Do not build a generic LinkedIn-style feed

Supported content types:

Case Study
Breakdown
Teardown
Experiment
Availability update
Collaboration request
Opportunity

Work should receive more visual prominence than commentary

MESSAGING

Keep messaging simple

Every conversation can optionally contain context such as:

Portfolio project
Opportunity
Service
Profile

TRUST

Avoid reducing reputation to one generic star score

Use signals such as:

Worked together
Client verified project
Repeat client
Repeat collaborator
Completed project
Recommended for a specific skill
Response reliability
Verified identity

DESIGN PRINCIPLE

The experience should feel like a professional editorial network built around excellent work

Not a traditional freelancer marketplace
Not an enterprise dashboard

Before implementing anything:

1. Restate the product model
2. Identify the core user journeys
3. Read the repository product docs
4. Confirm the information architecture
5. Confirm the database model
6. Define permission boundaries
7. Define acceptance criteria for the current slice
8. Identify scope risks
9. Present the implementation sequence for the current slice

Do not write application code until the current slice is internally consistent

Favor focused modules with clear responsibilities
Avoid unnecessary abstractions and premature infrastructure
Use tests for critical business behavior
```