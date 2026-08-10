# AthR Implementation and QA Prompt

Use this prompt after the current product slice and UX direction are approved

```text
Implement the approved AthR product slice as production-oriented software

TECHNICAL DIRECTION

Frontend:
Next.js App Router
TypeScript
React
Tailwind CSS
shadcn/ui primitives where appropriate

Do not preserve default shadcn visual styling
Build a dedicated product visual language on top of accessible primitives

Backend:
Supabase

Use:
PostgreSQL
Supabase Auth
Supabase Storage
Supabase Realtime where appropriate

SECURITY

Use Row Level Security for user-owned or private data

Never rely solely on frontend permission checks

Define explicit policies for:
profiles
portfolio projects
portfolio drafts
messages
conversations
applications
saved items
notifications
private opportunities

Users must never be able to access another user's private drafts or private conversations

DATA MODEL

Read docs/architecture/TECHNICAL_ARCHITECTURE.md before creating migrations

Do not blindly create every proposed table

For the current implementation slice:

1. Identify only the required entities
2. Normalize relationships
3. Define ownership
4. Define public vs private reads
5. Define status transitions
6. Add database constraints that prevent invalid duplicate states
7. Add RLS tests for sensitive records

ONBOARDING

Create separate onboarding paths based on initial intent without permanently locking users into a role

Example:
I want to find work
I want to hire
Both

Specialist onboarding:
Name
Professional role
Primary specialties
Market
Languages
Availability
Initial portfolio project entry

Hiring onboarding:
Name
Company if relevant
Role
Primary hiring needs

Do not require unnecessary information before the user reaches the product

ACTIVATION

A specialist is considered activated when they have:
completed their core profile
selected primary expertise
set availability
published at least one portfolio project

A hiring user is considered activated when they have:
saved a specialist
messaged a specialist
or created a project brief

PORTFOLIO BUILDER

Treat this as one of the highest-quality areas of the product

Support:
Draft
Autosave
Preview
Publish

Allow users to:
upload multiple assets
reorder assets
select a cover asset
add collaborators
add structured results
hide confidential fields
mark metrics as self-reported

Create clear validation for incomplete states

SEARCH

Start simple

Support structured filters and text search

Search:
profiles
skills
portfolio titles
portfolio descriptions
industries
markets

Do not add vector infrastructure unless actual product requirements justify it

MESSAGING

Create:
conversations
participants
messages
read state
context reference

Do not implement unnecessary workplace chat complexity

Support realtime delivery where reliable

OPPORTUNITIES

Clients can:
create draft
publish
edit
close
invite specialists
review applicants

Specialists can:
view
save
apply
withdraw

Prevent duplicate applications at database level

WORK FEED

Support explicit post types rather than one uncontrolled generic content model

Types:
case_study
breakdown
teardown
experiment
availability
collaboration_request
opportunity

Feed ranking does not need a sophisticated recommendation engine in V1

Start with transparent signals such as:
following
relevance
recency

QUALITY

Implement:
loading states
empty states
error states
permission states
deleted content handling
optimistic interactions only where safe

TESTING

Add tests for critical business behavior

Authentication:
signup
login
logout
protected routes

Profiles:
owner update
public read
privacy constraints

Portfolio:
create
draft
publish
edit
delete or archive
media permissions

Opportunities:
create
publish
apply
duplicate application prevention
close

Messaging:
conversation membership
message permissions
unauthorized access prevention

Relationships:
follow
unfollow
save
unsave
collaborator confirmation

RLS:
test unauthorized reads
test unauthorized writes
test ownership boundaries

EDGE CASES

Explicitly test:
deleted users
deleted portfolio assets
private profiles
blocked users
closed opportunities
withdrawn applications
duplicate collaborator invitations
users changing usernames
broken external portfolio links
very long project titles
missing avatars
large media
failed uploads
partial onboarding
network interruptions
empty search results

PERFORMANCE

Avoid shipping excessive JavaScript

Prefer server-rendered content where it makes sense

Lazy-load heavy portfolio media
Use responsive images
Paginate feeds and discovery
Prevent N+1 data fetching

ACCESSIBILITY

Test:
keyboard navigation
focus management
screen reader labels
form errors
contrast
reduced motion
touch target sizes

DEFINITION OF DONE

A feature is not complete merely because the happy path renders

It is complete only when:
permissions are correct
mobile works
empty state exists
loading state exists
error state exists
keyboard interaction works
important behavior is tested
realistic content has been tested
the UI matches the approved visual direction

ANTI-SLOP REVIEW

Before finalizing each major page check:

No random gradients
No generic dashboard layout
No excessive card nesting
No fake data visualization
No decorative AI imagery
No oversized rounded containers
No unnecessary icons
No unexplained empty space
No duplicated information
No placeholder copy left in production UI

The final application should feel designed specifically around the working behavior of digital marketing specialists rather than adapted from a generic marketplace template
```