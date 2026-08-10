# AthR Portfolio and Proof of Work Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build AthR's main differentiator: a structured, secure and visually strong marketing portfolio builder with credible contribution, result and collaborator context

**Architecture:** Keep portfolio ownership, media, metrics and collaborator confirmation as separate records. Drafts remain private, published projects expose only public-safe fields, and verification states cannot be self-granted

**Tech Stack:** Next.js App Router, TypeScript, Supabase PostgreSQL, Supabase Storage, React client components for editor interactions, Playwright, integration tests for RLS and storage ownership

## Global Constraints

- Portfolio is the core proof-of-work experience
- Drafts must never leak publicly
- Client names, metrics and sensitive fields can be hidden
- Collaborators are not shown as confirmed before consent
- Client-verified metrics cannot be granted by the project owner alone
- The work itself should visually dominate case study pages
- No fake analytics dashboard treatment

---

## Planned File Structure

```text
app/work/new/page.tsx
app/work/[id]/edit/page.tsx
app/u/[username]/work/[slug]/page.tsx
features/portfolio/
  schemas.ts
  queries.ts
  mutations.ts
  media.ts
  metrics.ts
  collaborators.ts
  components/
supabase/migrations/0004_portfolio.sql
supabase/migrations/0005_portfolio_storage.sql
supabase/migrations/0006_project_collaborators.sql
tests/integration/rls/portfolio.test.ts
tests/integration/storage/portfolio-media.test.ts
tests/e2e/portfolio-builder.spec.ts
```

### Task 1: Add portfolio project schema and RLS

**Files:**
- Create: `supabase/migrations/0004_portfolio.sql`
- Create: `features/portfolio/schemas.ts`
- Create: `features/portfolio/queries.ts`
- Create: `features/portfolio/mutations.ts`
- Test: `tests/integration/rls/portfolio.test.ts`

**Interfaces:**
- Produces status values `draft`, `published`, `archived`
- Produces `createPortfolioDraft`, `updateOwnPortfolioProject`, `publishPortfolioProject`
- Produces public-safe query by username and slug

- [ ] **Step 1: Write failing RLS tests proving foreign drafts cannot be read or updated**
- [ ] **Step 2: Add project tables and join tables for markets, channels, tools and objectives**
- [ ] **Step 3: Add unique owner slug behavior and publish timestamps**
- [ ] **Step 4: Add public read policy for published public projects only**
- [ ] **Step 5: Add validation for title, contribution, result summary and visibility states**
- [ ] **Step 6: Run tests and commit with `feat: add secure portfolio project model`**

### Task 2: Add media storage and ownership

**Files:**
- Create: `supabase/migrations/0005_portfolio_storage.sql`
- Create: `features/portfolio/media.ts`
- Test: `tests/integration/storage/portfolio-media.test.ts`

**Interfaces:**
- Produces upload metadata records with media type, caption, alt text, sort order and cover state
- Produces owner-validated upload and delete operations

- [ ] **Step 1: Add tests for valid upload, invalid type, oversized file, foreign path access and deletion**
- [ ] **Step 2: Create portfolio storage policy using owner and project IDs in paths**
- [ ] **Step 3: Add database metadata table and ensure one cover per project through mutation logic and tests**
- [ ] **Step 4: Add supported media validation for image, video, document and external URL records**
- [ ] **Step 5: Run storage and RLS tests**
- [ ] **Step 6: Commit with `feat: add portfolio media storage`**

### Task 3: Build progressive portfolio editor

**Files:**
- Create: `app/work/new/page.tsx`
- Create: `app/work/[id]/edit/page.tsx`
- Create: `features/portfolio/components/portfolio-editor.tsx`
- Create: `features/portfolio/components/project-context-step.tsx`
- Create: `features/portfolio/components/contribution-step.tsx`
- Create: `features/portfolio/components/media-step.tsx`
- Test: `tests/e2e/portfolio-builder.spec.ts`

**Interfaces:**
- Consumes project mutations and media operations
- Produces autosaved draft flow with explicit save/error state

- [ ] **Step 1: Add E2E test for create draft, interrupt, reload and resume**
- [ ] **Step 2: Implement Start and Context steps using existing taxonomy**
- [ ] **Step 3: Implement Contribution step focused on personal ownership rather than generic description**
- [ ] **Step 4: Implement media upload, reorder and cover selection with recoverable errors**
- [ ] **Step 5: Add autosave debounce with visible saved, saving and failed states**
- [ ] **Step 6: Run keyboard and mobile checks**
- [ ] **Step 7: Commit with `feat: add progressive portfolio builder`**

### Task 4: Add results, privacy and metric trust state

**Files:**
- Modify: `supabase/migrations/0004_portfolio.sql` through a new migration if already applied
- Create: `features/portfolio/metrics.ts`
- Create: `features/portfolio/components/results-step.tsx`
- Create: `features/portfolio/components/privacy-step.tsx`
- Modify: `tests/e2e/portfolio-builder.spec.ts`

**Interfaces:**
- Produces metric states `self_reported`, `client_verified`, `hidden`
- Produces independent visibility controls for client identity and metrics

- [ ] **Step 1: Write tests proving owners cannot set `client_verified` through normal project editing**
- [ ] **Step 2: Add metric create, update and delete operations with visibility controls**
- [ ] **Step 3: Add privacy controls for client name and result disclosure**
- [ ] **Step 4: Add UI copy that does not pressure users to disclose confidential data**
- [ ] **Step 5: Verify public queries omit hidden values rather than merely hiding them in CSS**
- [ ] **Step 6: Commit with `feat: add portfolio results and privacy controls`**

### Task 5: Add collaborator confirmation

**Files:**
- Create: `supabase/migrations/0006_project_collaborators.sql`
- Create: `features/portfolio/collaborators.ts`
- Create: `features/portfolio/components/collaborator-step.tsx`
- Test: `tests/integration/rls/collaborators.test.ts`

**Interfaces:**
- Produces states `pending`, `confirmed`, `rejected`, `removed`
- Produces owner request operation and collaborator-only confirm/reject operation

- [ ] **Step 1: Add tests for duplicate request, foreign confirmation and rejected relationship visibility**
- [ ] **Step 2: Add collaborator table and constraints**
- [ ] **Step 3: Implement search/select of existing AthR profiles and role text**
- [ ] **Step 4: Implement confirm and reject actions protected by authenticated collaborator identity**
- [ ] **Step 5: Ensure public project pages include confirmed collaborators only**
- [ ] **Step 6: Commit with `feat: add confirmed project collaborators`**

### Task 6: Build preview, publish and public case study page

**Files:**
- Create: `features/portfolio/components/portfolio-preview.tsx`
- Create: `app/u/[username]/work/[slug]/page.tsx`
- Modify: `app/u/[username]/page.tsx`
- Test: `tests/e2e/public-case-study.spec.ts`

**Interfaces:**
- Consumes public-safe portfolio query
- Produces Selected Work section on profile

- [ ] **Step 1: Add E2E tests for unpublished 404/private state, published case study, hidden client and hidden metrics**
- [ ] **Step 2: Build preview using the same content model as the public page**
- [ ] **Step 3: Build public case study with work-first visual hierarchy from design docs**
- [ ] **Step 4: Add Selected Work to profile with real project data only**
- [ ] **Step 5: Add contextual CTA `Message about this work` as a disabled future hook until messaging plan is implemented**
- [ ] **Step 6: Run mobile, accessibility, media performance and broken-link tests**
- [ ] **Step 7: Commit with `feat: publish structured marketing case studies`**

## Plan Completion Gate

Require:

- Portfolio RLS tests pass
- Storage ownership tests pass
- Draft resume E2E passes
- Hidden fields are absent from public payloads
- Owners cannot self-grant client verification
- Collaborator confirmation requires collaborator identity
- Public case studies pass mobile and keyboard review

After this plan, proceed to `2026-08-10-athr-discovery-network.md`
