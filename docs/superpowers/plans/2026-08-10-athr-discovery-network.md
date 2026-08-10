# AthR Discovery and Network Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build evidence-first specialist discovery, saved items, follows and a professional Work Feed that helps users find relevant people through actual work

**Architecture:** Use PostgreSQL text search and structured filters first. Search results combine profile context with relevant published portfolio projects. Network behavior remains intentionally narrow: follows affect relevance, saves are private, and feed types are explicit

**Tech Stack:** Next.js App Router, TypeScript, Supabase PostgreSQL, server queries for search and feed, client components for interactive filters and save/follow actions, Playwright and integration tests

## Global Constraints

- Search must never expose private profiles or portfolio drafts
- Follower count must not be the dominant ranking signal
- People results should expose relevant work before requiring a full profile click
- Saves are private
- Work Feed supports explicit professional post types only
- Avoid generic engagement mechanics

---

## Planned File Structure

```text
app/discover/page.tsx
app/discover/people/page.tsx
app/discover/work/page.tsx
app/saved/page.tsx
features/discovery/
  search.ts
  filters.ts
  ranking.ts
  components/
features/network/
  follows.ts
  saves.ts
  feed.ts
  recommendations.ts
  components/
supabase/migrations/0007_search.sql
supabase/migrations/0008_network.sql
supabase/migrations/0009_posts.sql
tests/integration/search.test.ts
tests/integration/network.test.ts
tests/e2e/discovery.spec.ts
tests/e2e/work-feed.spec.ts
```

### Task 1: Add search indexes and safe search query layer

**Files:**
- Create: `supabase/migrations/0007_search.sql`
- Create: `features/discovery/search.ts`
- Create: `features/discovery/filters.ts`
- Create: `features/discovery/ranking.ts`
- Test: `tests/integration/search.test.ts`

**Interfaces:**
- Produces `searchPeople(input)` and `searchWork(input)`
- Input supports query, specialty, skill, industry, market, availability and language
- Results contain public-safe profile data and relevant published work only

- [ ] **Step 1: Write tests for private project exclusion, combined filters, empty query and no-result cases**
- [ ] **Step 2: Add PostgreSQL indexes for public profile and published portfolio search fields**
- [ ] **Step 3: Implement structured filter composition without string-concatenated SQL**
- [ ] **Step 4: Add understandable ranking weights for specialty, skill, work relevance, industry, market, availability and recency**
- [ ] **Step 5: Explicitly exclude follower count from primary relevance scoring**
- [ ] **Step 6: Run integration tests and commit with `feat: add evidence-first search`**

### Task 2: Build Discover UI

**Files:**
- Create: `app/discover/page.tsx`
- Create: `app/discover/people/page.tsx`
- Create: `app/discover/work/page.tsx`
- Create: `features/discovery/components/search-input.tsx`
- Create: `features/discovery/components/filter-bar.tsx`
- Create: `features/discovery/components/person-result.tsx`
- Create: `features/discovery/components/work-result.tsx`
- Test: `tests/e2e/discovery.spec.ts`

**Interfaces:**
- Consumes search query layer
- Produces URL-addressable filter state where practical

- [ ] **Step 1: Add E2E cases for natural query, individual filters, combined filters and no results**
- [ ] **Step 2: Implement People and Work result modes with shared query state**
- [ ] **Step 3: Make person results include one or two relevant portfolio previews**
- [ ] **Step 4: Build compact desktop filters and intentional mobile filter treatment**
- [ ] **Step 5: Add loading, empty and error states without generic dashboard cards**
- [ ] **Step 6: Run mobile and keyboard checks and commit with `feat: add specialist and work discovery`**

### Task 3: Add private saves

**Files:**
- Create: `supabase/migrations/0008_network.sql`
- Create: `features/network/saves.ts`
- Create: `app/saved/page.tsx`
- Test: `tests/integration/network.test.ts`

**Interfaces:**
- Produces save targets `profile`, `portfolio_project`, `opportunity`
- Produces idempotent save and unsave operations

- [ ] **Step 1: Write RLS tests proving saves are owner-private and duplicate saves are prevented**
- [ ] **Step 2: Add saves table with unique owner + target type + target ID constraint**
- [ ] **Step 3: Add optimistic save UI only with rollback on server failure**
- [ ] **Step 4: Build Saved views for People and Work, with Opportunities reserved for the next plan**
- [ ] **Step 5: Test deleted-target handling**
- [ ] **Step 6: Commit with `feat: add private saved items`**

### Task 4: Add follows

**Files:**
- Modify: `supabase/migrations/0008_network.sql` through a new migration if already applied
- Create: `features/network/follows.ts`
- Modify: profile and discover result components
- Test: `tests/integration/network.test.ts`

**Interfaces:**
- Produces idempotent follow and unfollow operations
- Produces following list for feed relevance

- [ ] **Step 1: Add tests for self-follow rejection, duplicate follow prevention and owner-only mutation**
- [ ] **Step 2: Add follows table with unique follower/followed pair**
- [ ] **Step 3: Add follow controls to profile and discovery results**
- [ ] **Step 4: Keep follower count visually secondary or omit it from V1 public profile**
- [ ] **Step 5: Run tests and commit with `feat: add professional follows`**

### Task 5: Add explicit Work Feed content model

**Files:**
- Create: `supabase/migrations/0009_posts.sql`
- Create: `features/network/feed.ts`
- Create: `features/network/components/feed-item.tsx`
- Create type-specific feed components
- Test: `tests/e2e/work-feed.spec.ts`

**Interfaces:**
- Supports post types `case_study`, `breakdown`, `teardown`, `experiment`, `availability`, `collaboration_request`, `opportunity`
- Produces paginated feed query weighted by following, relevance and recency

- [ ] **Step 1: Add schema tests rejecting unsupported post types**
- [ ] **Step 2: Add posts and post media tables with author ownership policies**
- [ ] **Step 3: Implement feed query with transparent ordering inputs**
- [ ] **Step 4: Build distinct visual components for case studies, breakdowns, teardowns, experiments and availability updates**
- [ ] **Step 5: Do not implement generic text-only viral posting as a primary creation path**
- [ ] **Step 6: Add feed empty state that points to discovery and follows**
- [ ] **Step 7: Commit with `feat: add professional Work Feed`**

### Task 6: Add skill-specific recommendations

**Files:**
- Modify network migration through a new migration if required
- Create: `features/network/recommendations.ts`
- Create: `features/network/components/recommendation-list.tsx`
- Modify: `app/u/[username]/page.tsx`
- Test: `tests/integration/recommendations.test.ts`

**Interfaces:**
- Recommendation contains author, recipient, optional skill, optional project, relationship context and body
- Recipient cannot edit author content

- [ ] **Step 1: Add tests for create, read, unauthorized edit and project-linked recommendation**
- [ ] **Step 2: Add recommendation table and policies**
- [ ] **Step 3: Build recommendation creation flow from a profile or confirmed relationship context**
- [ ] **Step 4: Show recommendations grouped or labeled by relevant skill rather than as one generic wall**
- [ ] **Step 5: Commit with `feat: add contextual recommendations`**

## Plan Completion Gate

Require:

- Search never returns drafts or private data
- Combined filters work correctly
- Person results show relevant published work
- Saves remain private
- Duplicate follow/save states are prevented
- Feed types are explicit and visually distinct
- Follower count is not the primary ranking proxy
- Discovery and feed pass mobile and keyboard checks

After this plan, proceed to `2026-08-10-athr-opportunities-messaging.md`
