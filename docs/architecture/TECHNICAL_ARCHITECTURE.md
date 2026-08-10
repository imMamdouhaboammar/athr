# AthR Technical Architecture

## 1. Architecture Goal

Build a focused web application where identity, portfolio evidence, discovery, professional relationships, opportunities and messaging remain clearly separated by domain boundaries

The first release should be simple enough to reason about and test without adding infrastructure that the product has not yet earned

## 2. Recommended Stack

### Frontend

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui primitives where useful for accessible behavior

Do not preserve default library styling as the final product language

### Backend

- Supabase PostgreSQL
- Supabase Auth
- Supabase Storage
- Supabase Realtime where required

### Search

Start with PostgreSQL full-text search plus structured filters

Do not introduce vector search, Elasticsearch, Algolia or a separate recommendation service until product behavior proves the need

## 3. Application Domains

Recommended domain boundaries:

### Identity

Responsible for:

- Authentication
- Username
- Profile
- Professional headline
- Languages
- Location
- Timezone
- Intent

### Taxonomy

Responsible for:

- Specialties
- Skills
- Industries
- Markets
- Tools
- Channels
- Objectives

### Portfolio

Responsible for:

- Case studies
- Media
- Metrics
- Confidentiality
- Draft and publish states
- Collaborators

### Discovery

Responsible for:

- Search
- Filters
- Result composition
- Relevance ordering

### Network

Responsible for:

- Follows
- Saves
- Work Feed
- Work posts
- Recommendations
- Work relationships

### Opportunities

Responsible for:

- Project briefs
- Opportunity lifecycle
- Invites
- Applications
- Application state

### Messaging

Responsible for:

- Conversations
- Membership
- Messages
- Read state
- Context reference

### Notifications

Responsible for:

- Important state changes
- User-actionable alerts

### Moderation

Responsible for:

- Reports
- Blocks
- Content status
- Verification disputes

## 4. Suggested Data Model

The following is a proposed normalized starting point

### Users and profiles

`profiles`

- id uuid primary key references auth.users
- username text unique
- display_name text
- avatar_path text nullable
- role_title text nullable
- headline text nullable
- bio text nullable
- location_text text nullable
- timezone text nullable
- intent text
- onboarding_state text
- visibility text
- created_at timestamptz
- updated_at timestamptz

`profile_languages`

- profile_id uuid
- language_code text
- proficiency text nullable

`availability`

- profile_id uuid unique
- status text
- hours_per_week integer nullable
- earliest_start_date date nullable
- engagement_types text[]
- updated_at timestamptz

### Taxonomy

`specialties`

- id uuid
- slug text unique
- name text
- category text nullable
- active boolean

`skills`

- id uuid
- slug text unique
- name text
- specialty_id uuid nullable
- active boolean

`industries`

- id uuid
- slug text unique
- name text

`markets`

- id uuid
- code text unique
- name text

`tools`

- id uuid
- slug text unique
- name text

`channels`

- id uuid
- slug text unique
- name text

`objectives`

- id uuid
- slug text unique
- name text

Join tables:

- `profile_specialties`
- `profile_skills`
- `profile_industries`
- `profile_markets`
- `profile_tools`

Each join table should use a composite unique constraint to prevent duplicates

### Portfolio

`portfolio_projects`

- id uuid
- owner_id uuid
- slug text
- title text
- client_name text nullable
- client_visibility text
- role_text text nullable
- summary text nullable
- contribution text nullable
- result_summary text nullable
- industry_id uuid nullable
- timeline_start date nullable
- timeline_end date nullable
- status text
- visibility text
- published_at timestamptz nullable
- created_at timestamptz
- updated_at timestamptz

Recommended status values:

- draft
- published
- archived

`portfolio_project_markets`

- project_id uuid
- market_id uuid

`portfolio_project_channels`

- project_id uuid
- channel_id uuid

`portfolio_project_tools`

- project_id uuid
- tool_id uuid

`portfolio_project_objectives`

- project_id uuid
- objective_id uuid

`portfolio_media`

- id uuid
- project_id uuid
- owner_id uuid
- media_type text
- storage_path text nullable
- external_url text nullable
- caption text nullable
- alt_text text nullable
- sort_order integer
- is_cover boolean
- created_at timestamptz

`portfolio_metrics`

- id uuid
- project_id uuid
- metric_name text
- metric_value numeric nullable
- metric_text text nullable
- unit text nullable
- verification_state text
- visibility text
- sort_order integer

`project_collaborators`

- id uuid
- project_id uuid
- collaborator_profile_id uuid
- role_text text nullable
- status text
- requested_by uuid
- confirmed_at timestamptz nullable
- created_at timestamptz

Recommended status values:

- pending
- confirmed
- rejected
- removed

### Services

`services`

- id uuid
- owner_id uuid
- slug text
- title text
- outcome text
- scope text nullable
- deliverables text nullable
- duration_text text nullable
- pricing_mode text
- starting_price numeric nullable
- currency text nullable
- status text
- created_at timestamptz
- updated_at timestamptz

### Network

`follows`

- follower_id uuid
- followed_id uuid
- created_at timestamptz

Unique pair constraint required

`saves`

- id uuid
- owner_id uuid
- target_type text
- target_id uuid
- created_at timestamptz

Unique constraint on owner_id + target_type + target_id

`posts`

- id uuid
- author_id uuid
- post_type text
- body text nullable
- portfolio_project_id uuid nullable
- opportunity_id uuid nullable
- visibility text
- created_at timestamptz
- updated_at timestamptz

Recommended post types:

- case_study
- breakdown
- teardown
- experiment
- availability
- collaboration_request
- opportunity

`post_media`

- id uuid
- post_id uuid
- storage_path text
- media_type text
- sort_order integer

`recommendations`

- id uuid
- author_id uuid
- recipient_id uuid
- skill_id uuid nullable
- project_id uuid nullable
- relationship_type text nullable
- body text
- status text
- created_at timestamptz

`work_relationships`

- id uuid
- profile_a_id uuid
- profile_b_id uuid
- relationship_type text
- evidence_source_type text
- evidence_source_id uuid nullable
- status text
- created_at timestamptz

### Companies

`companies`

- id uuid
- slug text unique
- name text
- logo_path text nullable
- website_url text nullable
- industry_id uuid nullable
- created_at timestamptz

`company_members`

- company_id uuid
- profile_id uuid
- role text
- status text

### Opportunities

`opportunities`

- id uuid
- owner_id uuid
- company_id uuid nullable
- title text
- goal text
- brief_text text nullable
- industry_id uuid nullable
- budget_min numeric nullable
- budget_max numeric nullable
- currency text nullable
- duration_text text nullable
- start_date date nullable
- engagement_type text nullable
- status text
- visibility text
- published_at timestamptz nullable
- created_at timestamptz
- updated_at timestamptz

Recommended status values:

- draft
- published
- closed
- archived

Supporting joins:

- `opportunity_specialties`
- `opportunity_skills`
- `opportunity_markets`
- `opportunity_channels`
- `opportunity_tools`

`applications`

- id uuid
- opportunity_id uuid
- applicant_id uuid
- note text nullable
- proposed_amount numeric nullable
- currency text nullable
- availability_note text nullable
- status text
- created_at timestamptz
- updated_at timestamptz

Unique constraint on opportunity_id + applicant_id

Recommended application states:

- submitted
- withdrawn
- shortlisted
- rejected
- accepted

`application_portfolio_projects`

- application_id uuid
- portfolio_project_id uuid
- sort_order integer

`invites`

- id uuid
- opportunity_id uuid
- sender_id uuid
- recipient_id uuid
- note text nullable
- status text
- created_at timestamptz

### Messaging

`conversations`

- id uuid
- context_type text nullable
- context_id uuid nullable
- created_at timestamptz
- updated_at timestamptz

`conversation_members`

- conversation_id uuid
- profile_id uuid
- joined_at timestamptz
- last_read_at timestamptz nullable

`messages`

- id uuid
- conversation_id uuid
- sender_id uuid
- body text
- created_at timestamptz
- edited_at timestamptz nullable
- deleted_at timestamptz nullable

### Notifications

`notifications`

- id uuid
- recipient_id uuid
- notification_type text
- actor_id uuid nullable
- entity_type text nullable
- entity_id uuid nullable
- read_at timestamptz nullable
- created_at timestamptz

### Safety

`blocks`

- blocker_id uuid
- blocked_id uuid
- created_at timestamptz

`reports`

- id uuid
- reporter_id uuid
- target_type text
- target_id uuid
- reason text
- details text nullable
- status text
- created_at timestamptz

## 5. Permission Model

Use Row Level Security for user-owned and private data

Frontend checks are not sufficient authorization

### Public read candidates

- Public profiles
- Published portfolio projects
- Published portfolio media
- Public services
- Published opportunities
- Public work posts
- Approved recommendations

### Owner-only or membership-protected data

- Portfolio drafts
- Private profile fields
- Saved items
- Messages
- Conversation membership
- Draft opportunities
- Applications except allowed hiring views
- Notifications
- Reports

### Critical RLS rules

- A user can modify only their own profile
- A portfolio draft is visible only to its owner and explicitly authorized users
- A user cannot confirm collaboration on behalf of another collaborator
- A user cannot read a conversation unless they are a member
- A user cannot create a message in a conversation they do not belong to
- An applicant can view and update only their own application where state permits
- An opportunity owner can view applications to their own opportunity
- Saved items are private to their owner
- Notification records are private to their recipient

## 6. Storage Model

Recommended buckets or logical paths:

- avatars
- portfolio
- post-media
- message-attachments later if required
- company-logos

Use user and entity IDs in storage paths

Example:

`portfolio/{owner_id}/{project_id}/{asset_id}.webp`

Do not trust client-provided path ownership

Validate ownership before signed upload or write operations

## 7. Search Strategy

V1 search should combine:

- Text query
- Specialty filters
- Skill filters
- Industry filters
- Market filters
- Availability
- Language
- Tool filters when relevant

Index searchable fields and join paths intentionally

Search result ranking can start with understandable weighting:

1. Exact specialty match
2. Relevant skill match
3. Relevant portfolio match
4. Industry match
5. Market match
6. Availability
7. Recency

Do not use follower count as a primary score

## 8. Feed Strategy

V1 feed ranking can remain transparent

Inputs:

- Following
- Relevance to skills and markets
- Recency
- Content type

Avoid building a complex recommendation service before enough activity exists

## 9. Realtime Strategy

Use realtime only where user experience materially benefits

Recommended:

- New message delivery
- Conversation read state where practical
- Selected notification updates

Do not use realtime subscriptions for every data view by default

## 10. Server and Client Boundaries

Prefer server-rendered reads where practical

Use client components for:

- Interactive filters
- Media upload and reorder
- Messaging composer
- Realtime message stream
- Rich portfolio editing
- Local optimistic save/follow actions where safe

Keep authorization and ownership decisions server-side or database-enforced

## 11. Route and Module Structure

Possible application structure:

```text
app/
  (public)/
  (auth)/
  (app)/
  discover/
  opportunities/
  messages/
  u/[username]/
  work/
components/
features/
  identity/
  portfolio/
  discovery/
  network/
  opportunities/
  messaging/
  notifications/
lib/
  supabase/
  auth/
  validation/
  search/
  permissions/
tests/
  unit/
  integration/
  e2e/
supabase/
  migrations/
  seed/
```

Follow the actual codebase structure once implementation begins rather than forcing this layout blindly

## 12. Validation

Use shared schemas for important write operations

Validate:

- Username format
- Portfolio status transitions
- Opportunity status transitions
- Application duplicate prevention
- Media metadata
- Metric visibility and state
- Collaborator state transitions
- Conversation context references

## 13. Performance Requirements

- Paginate feed and discovery
- Use responsive images
- Lazy-load heavy media
- Avoid N+1 database reads
- Select only required fields
- Index high-volume filter columns
- Avoid shipping unnecessary client JavaScript
- Cache public content where correctness allows

## 14. Observability

At minimum capture:

- Authentication failures
- Failed uploads
- RLS or authorization failures
- Search errors
- Message delivery errors
- Opportunity creation errors
- Application state failures

Do not log private message bodies or sensitive client data unnecessarily

## 15. Testing Strategy

### Unit

- Validation schemas
- Search query construction
- Status transition rules
- Formatting and pure utilities

### Integration

- Database permissions
- Portfolio publish flow
- Collaborator confirmation
- Opportunity application rules
- Conversation membership

### End to end

- Signup and onboarding
- Publish first portfolio project
- Discover specialist
- Create opportunity
- Apply to opportunity
- Invite specialist
- Start contextual conversation
- Send and receive message

## 16. Architecture Acceptance Criteria

The architecture is acceptable when:

- Every domain has a clear responsibility
- Private data is protected by database policy, not frontend convention
- A portfolio draft cannot leak publicly
- Duplicate applications are prevented at database level
- Messaging membership is enforced server-side or by RLS
- Search works without a separate search service
- Realtime is limited to high-value interactions
- The first release can ship without payment infrastructure
