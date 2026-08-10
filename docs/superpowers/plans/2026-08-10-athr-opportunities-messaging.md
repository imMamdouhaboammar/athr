# AthR Opportunities and Messaging Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let hiring users turn a marketing need into a structured opportunity, let specialists apply or receive invites, and let both sides start a contextual professional conversation securely

**Architecture:** Opportunities and applications are their own domain with explicit lifecycle states and database constraints. Messaging is membership-based, context-aware and minimal, with realtime used only for message delivery and selected read-state behavior

**Tech Stack:** Next.js App Router, TypeScript, Supabase PostgreSQL, Supabase Realtime, server actions or route handlers for writes, Playwright, integration tests for RLS and lifecycle rules

## Global Constraints

- Project briefs must use marketing-specific context
- Duplicate applications must be impossible at database level
- Closed opportunities reject new applications
- Messaging membership must be enforced by RLS
- Conversations can reference a portfolio project, opportunity, service or profile
- Do not implement full workplace chat features

---

## Planned File Structure

```text
app/opportunities/page.tsx
app/opportunities/new/page.tsx
app/opportunities/[id]/page.tsx
app/opportunities/[id]/edit/page.tsx
app/messages/page.tsx
app/messages/[conversationId]/page.tsx
features/opportunities/
  schemas.ts
  queries.ts
  mutations.ts
  applications.ts
  invites.ts
  matching-input.ts
  components/
features/messaging/
  queries.ts
  mutations.ts
  realtime.ts
  components/
supabase/migrations/0010_opportunities.sql
supabase/migrations/0011_applications_invites.sql
supabase/migrations/0012_messaging.sql
tests/integration/rls/opportunities.test.ts
tests/integration/rls/messaging.test.ts
tests/e2e/opportunity-flow.spec.ts
tests/e2e/messaging.spec.ts
```

### Task 1: Add opportunity lifecycle and project brief model

**Files:**
- Create: `supabase/migrations/0010_opportunities.sql`
- Create: `features/opportunities/schemas.ts`
- Create: `features/opportunities/queries.ts`
- Create: `features/opportunities/mutations.ts`
- Test: `tests/integration/rls/opportunities.test.ts`

**Interfaces:**
- Opportunity states: `draft`, `published`, `closed`, `archived`
- Produces create, update, publish and close operations
- Produces public-safe opportunity query

- [ ] **Step 1: Write RLS tests proving drafts are owner-private and foreign users cannot edit or close an opportunity**
- [ ] **Step 2: Add opportunity table plus joins for specialties, skills, markets, channels and tools**
- [ ] **Step 3: Add marketing brief fields for goal, business context, budget, duration, start date and engagement type**
- [ ] **Step 4: Add lifecycle validation preventing invalid state transitions**
- [ ] **Step 5: Run RLS and validation tests**
- [ ] **Step 6: Commit with `feat: add structured marketing opportunities`**

### Task 2: Build progressive project brief and opportunity screens

**Files:**
- Create: `app/opportunities/new/page.tsx`
- Create: `app/opportunities/[id]/page.tsx`
- Create: `app/opportunities/[id]/edit/page.tsx`
- Create: `features/opportunities/components/brief-builder.tsx`
- Create: `features/opportunities/components/opportunity-summary.tsx`
- Test: `tests/e2e/opportunity-flow.spec.ts`

**Interfaces:**
- Consumes taxonomy and opportunity mutations
- Produces structured brief state that can later seed discovery filters

- [ ] **Step 1: Add E2E case for create draft, resume, publish and close**
- [ ] **Step 2: Implement progressive brief steps for objective, market, current situation, required specialty, deliverables, budget, duration and start date**
- [ ] **Step 3: Let users browse discovery before publishing if they only want direct outreach**
- [ ] **Step 4: Build opportunity detail around marketing context rather than a generic job description wall**
- [ ] **Step 5: Add loading, error, closed and missing states**
- [ ] **Step 6: Commit with `feat: add marketing project brief experience`**

### Task 3: Add applications with duplicate protection

**Files:**
- Create: `supabase/migrations/0011_applications_invites.sql`
- Create: `features/opportunities/applications.ts`
- Create: `features/opportunities/components/application-form.tsx`
- Create: `features/opportunities/components/applicant-list.tsx`
- Test: `tests/integration/applications.test.ts`

**Interfaces:**
- Application states: `submitted`, `withdrawn`, `shortlisted`, `rejected`, `accepted`
- Unique key: opportunity ID + applicant ID
- Supports selected relevant portfolio projects

- [ ] **Step 1: Add tests for duplicate submit, foreign read, closed opportunity and applicant withdrawal**
- [ ] **Step 2: Add applications table and selected-portfolio join table**
- [ ] **Step 3: Add policies allowing applicants to manage their own application state where permitted and owners to view applications to owned opportunities**
- [ ] **Step 4: Build short application form using profile evidence rather than repeating full work history**
- [ ] **Step 5: Add owner-side applicant review with shortlist, reject and accept states**
- [ ] **Step 6: Commit with `feat: add opportunity applications`**

### Task 4: Add specialist invites

**Files:**
- Modify application/invite migration through a new migration if already applied
- Create: `features/opportunities/invites.ts`
- Create: `features/opportunities/components/invite-specialist.tsx`
- Modify: discovery result actions
- Test: `tests/integration/invites.test.ts`

**Interfaces:**
- Invite contains opportunity, sender, recipient, note and status
- Closed opportunities cannot issue valid new invites

- [ ] **Step 1: Add tests for unauthorized sender, duplicate invite policy, closed opportunity and blocked recipient**
- [ ] **Step 2: Add invite persistence and ownership policies**
- [ ] **Step 3: Add `Invite to opportunity` from discovery and profile where the current user owns a published opportunity**
- [ ] **Step 4: Add recipient invite view and response state according to approved product rules**
- [ ] **Step 5: Commit with `feat: add specialist opportunity invites`**

### Task 5: Add conversation membership and contextual messaging

**Files:**
- Create: `supabase/migrations/0012_messaging.sql`
- Create: `features/messaging/queries.ts`
- Create: `features/messaging/mutations.ts`
- Create: `features/messaging/realtime.ts`
- Test: `tests/integration/rls/messaging.test.ts`

**Interfaces:**
- Produces conversation with optional context type and context ID
- Produces membership-protected message reads and writes
- Produces create-or-open contextual conversation behavior where business rules allow

- [ ] **Step 1: Write RLS tests proving non-members cannot read or send messages**
- [ ] **Step 2: Add conversations, conversation members and messages tables**
- [ ] **Step 3: Add context references for portfolio project, opportunity, service or profile without copying sensitive source content into messages**
- [ ] **Step 4: Add read timestamp to membership record**
- [ ] **Step 5: Add realtime subscription helper with cleanup and reconnect handling**
- [ ] **Step 6: Commit with `feat: add secure contextual messaging`**

### Task 6: Build messaging UI

**Files:**
- Create: `app/messages/page.tsx`
- Create: `app/messages/[conversationId]/page.tsx`
- Create: `features/messaging/components/conversation-list.tsx`
- Create: `features/messaging/components/conversation-header.tsx`
- Create: `features/messaging/components/message-list.tsx`
- Create: `features/messaging/components/message-composer.tsx`
- Test: `tests/e2e/messaging.spec.ts`

**Interfaces:**
- Consumes secure conversation queries and realtime helper
- Produces contextual message UI with participant and source context

- [ ] **Step 1: Add E2E flow from profile or opportunity to contextual conversation**
- [ ] **Step 2: Build conversation list and header with visible context label such as `Regarding: Ramadan Performance Campaign`**
- [ ] **Step 3: Build text message list and composer with empty-message rejection**
- [ ] **Step 4: Handle reconnect, deleted context and closed opportunity without breaking history**
- [ ] **Step 5: Run mobile, keyboard and realtime reconnect tests**
- [ ] **Step 6: Commit with `feat: add contextual messaging experience`**

### Task 7: Add actionable notifications

**Files:**
- Create: `supabase/migrations/0013_notifications.sql`
- Create: `features/notifications/queries.ts`
- Create: `features/notifications/mutations.ts`
- Create: `features/notifications/components/notification-list.tsx`
- Test: `tests/integration/notifications.test.ts`

**Interfaces:**
- Notification types include new message, invite, application state, collaborator confirmation and recommendation
- Notifications are private to recipient

- [ ] **Step 1: Add RLS tests proving notification privacy**
- [ ] **Step 2: Add notification records for state changes that affect the user's next action**
- [ ] **Step 3: Add read state and deep link to referenced entity when it still exists**
- [ ] **Step 4: Handle deleted referenced entities gracefully**
- [ ] **Step 5: Avoid low-value vanity notifications**
- [ ] **Step 6: Commit with `feat: add actionable notifications`**

## Plan Completion Gate

Require:

- Draft opportunities remain private
- Opportunity lifecycle tests pass
- Duplicate applications are prevented by database constraint
- Closed opportunities reject new applications and invites
- Application privacy tests pass
- Messaging membership RLS tests pass
- Realtime messaging recovers from reconnect
- Contextual conversation labels remain correct when referenced entities change state
- Notification privacy tests pass

After this plan, proceed to `2026-08-10-athr-trust-launch.md`
