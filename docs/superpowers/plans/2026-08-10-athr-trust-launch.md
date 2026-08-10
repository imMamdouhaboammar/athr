# AthR Trust, Safety and Launch Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make AthR safe enough for real professional use by completing verification states, blocks, reports, account lifecycle handling, observability, funnel analytics and private beta release gates

**Architecture:** Trust signals are evidence-backed records rather than decorative badges. Blocks and reports apply consistently across discovery, feed, opportunities and messaging. Analytics measure the product loop without collecting unnecessary sensitive content

**Tech Stack:** Existing AthR stack, Supabase PostgreSQL and RLS, application error monitoring selected during implementation, lightweight product event instrumentation, Playwright and integration security tests

## Global Constraints

- Do not present inferred relationships as verified facts
- Users cannot verify their own client metrics through the normal project editing flow
- Block behavior must be explicit across the application
- Reports must be auditable
- Private message contents should not be copied into analytics or error logs
- Launch is blocked by critical permission failures

---

## Planned File Structure

```text
features/trust/
  relationships.ts
  verification.ts
  components/
features/safety/
  blocks.ts
  reports.ts
  moderation.ts
features/analytics/
  events.ts
  server-events.ts
lib/observability/
  errors.ts
supabase/migrations/0014_work_relationships.sql
supabase/migrations/0015_blocks_reports.sql
supabase/migrations/0016_account_lifecycle.sql
tests/integration/trust.test.ts
tests/integration/blocks-reports.test.ts
tests/integration/account-lifecycle.test.ts
tests/e2e/blocking.spec.ts
tests/e2e/beta-critical-path.spec.ts
```

### Task 1: Materialize evidence-backed work relationships

**Files:**
- Create: `supabase/migrations/0014_work_relationships.sql`
- Create: `features/trust/relationships.ts`
- Create: `features/trust/components/collaborator-section.tsx`
- Test: `tests/integration/trust.test.ts`

**Interfaces:**
- Work relationship records include profile pair, relationship type, evidence source and status
- Confirmed portfolio collaboration can generate relationship evidence

- [ ] **Step 1: Write tests proving unconfirmed collaborator tags never create confirmed public relationships**
- [ ] **Step 2: Add work relationship table with evidence source fields**
- [ ] **Step 3: Create relationship records only from approved product events such as confirmed collaboration**
- [ ] **Step 4: Add profile sections for previous collaborators and only show `Frequently works with` when enough confirmed evidence exists**
- [ ] **Step 5: Commit with `feat: add evidence-backed work relationships`**

### Task 2: Complete verification state controls

**Files:**
- Create: `features/trust/verification.ts`
- Modify portfolio metric and project trust displays
- Test: `tests/integration/trust.test.ts`

**Interfaces:**
- Supports `self_reported`, `client_verified`, `hidden`
- Produces trusted server-side transition path for verification

- [ ] **Step 1: Add negative tests proving project owners cannot set client verification directly**
- [ ] **Step 2: Define the authorized verification actor and evidence requirements for the first beta**
- [ ] **Step 3: Implement verification transition with audit timestamp and actor ID**
- [ ] **Step 4: Render verification labels without implying platform endorsement beyond recorded evidence**
- [ ] **Step 5: Commit with `feat: enforce result verification states`**

### Task 3: Add blocks with cross-product behavior

**Files:**
- Create: `supabase/migrations/0015_blocks_reports.sql`
- Create: `features/safety/blocks.ts`
- Modify discovery, feed, invitations and messaging queries
- Test: `tests/e2e/blocking.spec.ts`

**Interfaces:**
- Produces owner-controlled block and unblock
- Produces shared `isBlockedPair` server helper or query condition used by affected domains

- [ ] **Step 1: Define expected behavior for search, feed, messaging, invites, recommendations and collaborator requests**
- [ ] **Step 2: Write tests for every affected surface before implementation**
- [ ] **Step 3: Add block table with unique blocker/blocked pair and owner-only mutation**
- [ ] **Step 4: Apply block filtering consistently to server queries and write operations**
- [ ] **Step 5: Verify direct URL access cannot bypass protected interaction rules**
- [ ] **Step 6: Commit with `feat: add consistent user blocking`**

### Task 4: Add reporting and moderation state

**Files:**
- Modify safety migration through a new migration if already applied
- Create: `features/safety/reports.ts`
- Create: `features/safety/moderation.ts`
- Create: `features/safety/components/report-dialog.tsx`
- Test: `tests/integration/blocks-reports.test.ts`

**Interfaces:**
- Report targets support profile, portfolio project, opportunity and other approved content types
- Report record includes reporter, target, reason, details, status and timestamps

- [ ] **Step 1: Add tests for unauthorized report access and valid report creation**
- [ ] **Step 2: Add reports table and private reporter policies**
- [ ] **Step 3: Add report actions to core public content and messaging context where approved**
- [ ] **Step 4: Add moderation status fields or records without deleting content automatically on a single report**
- [ ] **Step 5: Confirm report details never appear publicly**
- [ ] **Step 6: Commit with `feat: add reporting and moderation records`**

### Task 5: Define account and content lifecycle

**Files:**
- Create: `supabase/migrations/0016_account_lifecycle.sql`
- Create: `features/safety/account-lifecycle.ts`
- Test: `tests/integration/account-lifecycle.test.ts`

**Interfaces:**
- Defines behavior for deleted users, deleted work, deleted opportunity owners, recommendation authors and conversation participants

- [ ] **Step 1: Write fixtures covering deleted specialist, collaborator, hiring user and message participant**
- [ ] **Step 2: Decide which records are deleted, anonymized or retained for integrity and legal needs before public launch**
- [ ] **Step 3: Implement account deletion so public pages do not expose private data or break foreign keys**
- [ ] **Step 4: Ensure shared work remains truthful about removed collaborators without exposing deleted account data**
- [ ] **Step 5: Verify message history behavior follows the approved privacy policy**
- [ ] **Step 6: Commit with `feat: define account lifecycle handling`**

### Task 6: Add observability without sensitive-data leakage

**Files:**
- Create: `lib/observability/errors.ts`
- Modify critical server mutations to use shared error reporting
- Test: `tests/integration/observability.test.ts`

**Interfaces:**
- Produces structured error capture for auth, upload, search, opportunity, application and messaging failures
- Redacts message bodies, private client details and secrets

- [ ] **Step 1: Add tests for redaction helper covering message body, token-like values and private notes**
- [ ] **Step 2: Connect the selected error-monitoring provider through environment configuration**
- [ ] **Step 3: Instrument critical mutations with stable error categories**
- [ ] **Step 4: Verify production logs do not include private message bodies or auth secrets**
- [ ] **Step 5: Commit with `chore: add privacy-aware error monitoring`**

### Task 7: Add product-loop analytics

**Files:**
- Create: `features/analytics/events.ts`
- Create: `features/analytics/server-events.ts`
- Test: `tests/integration/analytics-events.test.ts`

**Interfaces:**
- Stable events include profile completion, portfolio started, portfolio published, search result viewed, profile viewed from work, specialist saved, qualified conversation started, opportunity published, application submitted, collaborator confirmed and recommendation created

- [ ] **Step 1: Define event names and minimal properties needed to answer roadmap metrics**
- [ ] **Step 2: Prohibit private message content, full client briefs and sensitive uploaded data from analytics properties**
- [ ] **Step 3: Instrument server-confirmed events for important conversions rather than trusting client-only events**
- [ ] **Step 4: Add a query or dashboard definition for `qualified work conversations created per active specialist`**
- [ ] **Step 5: Commit with `feat: add core product-loop analytics`**

### Task 8: Run private beta release gate

**Files:**
- Create: `tests/e2e/beta-critical-path.spec.ts`
- Create: `docs/release/PRIVATE_BETA_CHECKLIST.md`
- Create: `docs/release/BETA_FEEDBACK_GUIDE.md`

**Interfaces:**
- Produces one repeatable test suite for the specialist and hiring critical paths

- [ ] **Step 1: Add specialist critical path: signup -> onboarding -> publish work -> appear in discovery -> receive contextual message**
- [ ] **Step 2: Add hiring critical path: signup -> discover -> save -> create brief -> publish opportunity -> review application -> message specialist**
- [ ] **Step 3: Add trust path: collaborator confirmation -> recommendation -> block/report checks**
- [ ] **Step 4: Run critical flows on mobile and desktop browsers supported by the project**
- [ ] **Step 5: Run the full security checks in `docs/quality/QA_SECURITY_EDGE_CASES.md`**
- [ ] **Step 6: Create beta feedback guide focused on profile, portfolio, discovery, opportunity quality and conversation relevance**
- [ ] **Step 7: Commit with `docs: add private beta release gate`**

## Final Release Gate

Run the project-standard equivalents of:

```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
```

Public beta is blocked if any of these fail:

- Critical RLS tests
- Portfolio draft leakage test
- Messaging membership test
- Storage ownership test
- Duplicate application prevention
- Block behavior on protected interactions
- Account lifecycle integration tests
- Core mobile critical paths
- Keyboard navigation on core flows

Private beta should specifically answer:

- Can specialists publish credible work without help
- Can a hiring user find relevant proof faster than generic profile browsing
- Does the portfolio make personal contribution clear
- Does contextual messaging feel natural
- Are recommendation and collaborator signals understandable
- Are users returning for relevant work rather than generic social activity

## Post-MVP Decision Gate

Do not start Crews, contracts, invoices, payments, advanced matching, private talent pools or portfolio analytics until beta evidence shows the core loop is working and the highest-friction issues in Profile, Portfolio Builder and Discovery are addressed
