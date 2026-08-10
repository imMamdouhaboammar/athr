# AthR MVP Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the secure application foundation, authentication, profile identity, taxonomy, availability and resumable onboarding required by every later AthR feature

**Architecture:** Use Next.js App Router with Supabase Auth and PostgreSQL. Keep identity, taxonomy and onboarding as separate feature modules. Authorization must be enforced by Supabase RLS rather than UI checks alone

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, Supabase Auth, Supabase PostgreSQL, Vitest or project-standard unit runner, Playwright for end-to-end flows

## Global Constraints

- AthR is a professional work network for digital marketing specialists
- Do not create rigid permanent user roles
- Initial intent values are `find_work`, `hire`, `both`
- Private data must be protected by RLS
- Mobile and keyboard behavior are part of completion
- Do not introduce payment, vector search, advanced recommendation infrastructure or generic social features in this plan
- Follow `docs/design/VISUAL_DIRECTION.md`
- Follow `docs/quality/QA_SECURITY_EDGE_CASES.md`

---

## Planned File Structure

```text
app/
  (auth)/login/page.tsx
  (auth)/signup/page.tsx
  (app)/layout.tsx
  onboarding/intent/page.tsx
  onboarding/profile/page.tsx
  onboarding/expertise/page.tsx
  onboarding/availability/page.tsx
features/
  identity/
    schemas.ts
    queries.ts
    mutations.ts
    components/
  taxonomy/
    queries.ts
    types.ts
  onboarding/
    state.ts
    guards.ts
    components/
lib/
  supabase/client.ts
  supabase/server.ts
  auth/require-user.ts
supabase/
  migrations/0001_profiles.sql
  migrations/0002_taxonomy.sql
  migrations/0003_availability.sql
  seed/taxonomy.sql
tests/
  integration/rls/profiles.test.ts
  integration/rls/availability.test.ts
  e2e/auth-onboarding.spec.ts
```

Paths may be adapted only if the initial scaffold uses an established equivalent convention

### Task 1: Scaffold the application and test harness

**Files:**
- Create: `package.json`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `lib/supabase/client.ts`
- Create: `lib/supabase/server.ts`
- Create: `playwright.config.ts`
- Create: `vitest.config.ts` or equivalent selected test runner config

**Interfaces:**
- Produces: browser Supabase client factory
- Produces: server Supabase client factory bound to request cookies
- Produces: `npm run test`, `npm run test:e2e`, `npm run lint`, `npm run typecheck`

- [ ] **Step 1: Create the Next.js TypeScript scaffold with Tailwind and minimal application shell**

- [ ] **Step 2: Add Supabase dependencies and environment variable validation for public URL and anon key**

- [ ] **Step 3: Add test scripts and one smoke test that renders the root route**

- [ ] **Step 4: Run `npm run lint && npm run typecheck && npm run test` and require all checks to pass**

- [ ] **Step 5: Commit with `chore: scaffold AthR application foundation`**

### Task 2: Add authentication and protected application routing

**Files:**
- Create: `app/(auth)/login/page.tsx`
- Create: `app/(auth)/signup/page.tsx`
- Create: `app/(app)/layout.tsx`
- Create: `lib/auth/require-user.ts`
- Create: `features/identity/components/auth-form.tsx`
- Test: `tests/e2e/auth-onboarding.spec.ts`

**Interfaces:**
- Produces: `requireUser(): Promise<User>` for protected server routes
- Produces: login and signup forms with explicit error states

- [ ] **Step 1: Write E2E cases for signup, login, logout and anonymous access to a protected route**

- [ ] **Step 2: Run the E2E test and confirm failure before auth pages and guard exist**

- [ ] **Step 3: Implement auth forms and protected `(app)` layout using the authenticated Supabase session**

- [ ] **Step 4: Add expired-session handling and redirect behavior without redirect loops**

- [ ] **Step 5: Run auth E2E cases on desktop and mobile viewport presets**

- [ ] **Step 6: Commit with `feat: add authentication and protected routes`**

### Task 3: Create profiles with RLS ownership

**Files:**
- Create: `supabase/migrations/0001_profiles.sql`
- Create: `features/identity/schemas.ts`
- Create: `features/identity/queries.ts`
- Create: `features/identity/mutations.ts`
- Test: `tests/integration/rls/profiles.test.ts`

**Interfaces:**
- Produces: `Profile` type
- Produces: `getProfileByUsername(username)` public-safe query
- Produces: `updateOwnProfile(input)` authenticated mutation

- [ ] **Step 1: Write RLS tests proving User A cannot update User B and anonymous users cannot read private-only profile fields**

- [ ] **Step 2: Create `profiles` migration with unique normalized username, intent, onboarding state, visibility and timestamps**

- [ ] **Step 3: Add RLS policies for public-safe reads and owner writes**

- [ ] **Step 4: Add shared validation for username, display name, role title, headline, location and timezone**

- [ ] **Step 5: Run migration tests and verify unauthorized operations fail at database level**

- [ ] **Step 6: Commit with `feat: add secure professional profiles`**

### Task 4: Add marketing taxonomy and seed data

**Files:**
- Create: `supabase/migrations/0002_taxonomy.sql`
- Create: `supabase/seed/taxonomy.sql`
- Create: `features/taxonomy/types.ts`
- Create: `features/taxonomy/queries.ts`
- Test: `tests/integration/taxonomy.test.ts`

**Interfaces:**
- Produces read-only lists for specialties, skills, industries, markets and tools
- Produces profile join tables with composite uniqueness

- [ ] **Step 1: Add tests for duplicate profile taxonomy relationships and inactive taxonomy values**

- [ ] **Step 2: Create taxonomy tables and profile join tables with unique composite constraints**

- [ ] **Step 3: Seed initial digital marketing specialties from the product spec, including paid media, SEO, GEO/AEO, growth, copy, creative strategy, CRM, analytics and related fields**

- [ ] **Step 4: Add server queries returning active taxonomy values in stable display order**

- [ ] **Step 5: Run integration tests and inspect seeded data for duplicates and inconsistent naming**

- [ ] **Step 6: Commit with `feat: add digital marketing taxonomy`**

### Task 5: Add availability

**Files:**
- Create: `supabase/migrations/0003_availability.sql`
- Create: `features/identity/availability-schema.ts`
- Create: `features/identity/availability-mutations.ts`
- Test: `tests/integration/rls/availability.test.ts`

**Interfaces:**
- Produces: availability statuses `available`, `limited`, `booked`
- Produces owner-only availability mutation

- [ ] **Step 1: Write tests for owner update, unauthorized update and optional hours/start date values**

- [ ] **Step 2: Add availability table with one record per profile and last-updated timestamp**

- [ ] **Step 3: Add RLS allowing public reads of public availability fields and owner writes**

- [ ] **Step 4: Add validation for hours per week, start date and engagement types**

- [ ] **Step 5: Run integration tests and typecheck**

- [ ] **Step 6: Commit with `feat: add specialist availability`**

### Task 6: Build resumable onboarding

**Files:**
- Create: `app/onboarding/intent/page.tsx`
- Create: `app/onboarding/profile/page.tsx`
- Create: `app/onboarding/expertise/page.tsx`
- Create: `app/onboarding/availability/page.tsx`
- Create: `features/onboarding/state.ts`
- Create: `features/onboarding/guards.ts`
- Create: `features/onboarding/components/*`
- Modify: `tests/e2e/auth-onboarding.spec.ts`

**Interfaces:**
- Consumes profile, taxonomy and availability mutations
- Produces deterministic onboarding state transitions
- Produces resume destination for partially completed onboarding

- [ ] **Step 1: Add E2E tests for `find_work`, `hire` and `both` intents plus interruption and resume**

- [ ] **Step 2: Implement intent step without permanently locking product permissions**

- [ ] **Step 3: Implement profile and expertise steps with accessible validation and compact mobile layouts**

- [ ] **Step 4: Implement availability step for work-seeking users and allow hiring users to skip irrelevant fields**

- [ ] **Step 5: Persist onboarding state only after each valid step succeeds**

- [ ] **Step 6: Run E2E tests with desktop and mobile viewports and keyboard-only pass**

- [ ] **Step 7: Commit with `feat: add resumable AthR onboarding`**

### Task 7: Add initial public profile shell

**Files:**
- Create: `app/u/[username]/page.tsx`
- Create: `features/identity/components/profile-header.tsx`
- Create: `features/identity/components/expertise-strip.tsx`
- Create: `features/identity/components/availability-status.tsx`
- Test: `tests/e2e/public-profile.spec.ts`

**Interfaces:**
- Consumes public-safe profile, taxonomy and availability queries
- Produces the stable profile shell later plans will extend with portfolio, services, collaborators and recommendations

- [ ] **Step 1: Add E2E cases for complete profile, missing avatar, missing optional fields and unknown username**

- [ ] **Step 2: Implement profile header with evidence-first hierarchy and no long biography at the top**

- [ ] **Step 3: Implement expertise and availability display with intentional mobile composition**

- [ ] **Step 4: Add empty placeholders for Selected Work, Collaborators and Recommendations that point to later product states without fake data**

- [ ] **Step 5: Run accessibility smoke checks, E2E, lint and typecheck**

- [ ] **Step 6: Commit with `feat: add public professional profile shell`**

## Plan Completion Gate

Run:

```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
```

Require:

- Auth happy and failure paths pass
- Profile ownership RLS tests pass
- Availability RLS tests pass
- Taxonomy duplicate protection passes
- Partial onboarding resumes correctly
- Public profile works on mobile and desktop
- No private profile fields leak through public queries

After this plan, proceed to `2026-08-10-athr-portfolio.md`
