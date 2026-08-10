# AthR Non-Functional Requirements

These requirements define the release quality floor across product domains

## Performance

**NFR-PERF-001** Public Profile and Case Study pages should render useful content before non-critical interactive code is required

**NFR-PERF-002** Discovery and Work Feed responses must be paginated or cursor-based

**NFR-PERF-003** Heavy portfolio media must be lazy-loaded outside the initial viewport

**NFR-PERF-004** Images must use responsive sizing and an explicit dimension or aspect-ratio strategy to avoid avoidable layout shift

**NFR-PERF-005** Database reads for list surfaces must avoid per-row follow-up queries that create N+1 behavior

**NFR-PERF-006** Search and common filters must have indexes or query plans appropriate to expected MVP volume before private beta

**NFR-PERF-007** Realtime subscriptions are limited to interactions that materially benefit from live updates, primarily messaging and selected notifications

## Reliability

**NFR-REL-001** User-authored drafts must survive recoverable network or upload failures

**NFR-REL-002** A durable write must complete before the UI represents a message, Application, Invite, Recommendation, or collaborator decision as committed

**NFR-REL-003** Retry behavior must be idempotent for operations where duplicate creation would be harmful

**NFR-REL-004** Unique database constraints must protect duplicate Follow relationships, Applications, taxonomy joins, and other relationships defined as unique

**NFR-REL-005** User-facing failures must state what failed, what remains saved, and what the user can do next when that information is known

## Security

**NFR-SEC-001** PostgreSQL Row Level Security is the authoritative access boundary for private and user-owned records

**NFR-SEC-002** Client-side visibility checks are never treated as authorization

**NFR-SEC-003** Storage writes must validate ownership rather than trusting client-provided paths

**NFR-SEC-004** Private messages, Applications, Saves, drafts, notifications, reports, and moderation data must not be exposed through public reads, search indexes, caches, or realtime subscriptions

**NFR-SEC-005** Authentication tokens and service credentials must never be committed to the repository or logged

**NFR-SEC-006** Rate limiting or abuse controls must exist for authentication-sensitive actions, messaging initiation, reporting, and other high-abuse write surfaces before public launch

**NFR-SEC-007** Security-sensitive changes require tests that prove unauthorized reads and writes fail

## Privacy

**NFR-PRIV-001** Collect only data required for the defined product purpose

**NFR-PRIV-002** Do not log private message bodies or sensitive Project Brief content by default

**NFR-PRIV-003** Public and private states must be explicit for Profiles, Portfolio Projects, Work Metrics, Opportunities, Recommendations, and other user-authored records where relevant

**NFR-PRIV-004** Deleted or deactivated user content must follow an explicit retention and referential-integrity policy rather than remaining public accidentally

**NFR-PRIV-005** Analytics events should use stable internal IDs and event metadata needed for product analysis, not raw private message or proposal text

## Accessibility

**NFR-A11Y-001** Critical workflows must be keyboard operable

**NFR-A11Y-002** Focus must be visible and logically ordered

**NFR-A11Y-003** Form errors must be programmatically associated with affected controls where practical

**NFR-A11Y-004** Meaning cannot depend on color alone

**NFR-A11Y-005** Reduced-motion preferences must suppress or simplify non-essential transitions

**NFR-A11Y-006** Touch targets on mobile must be sized and spaced to avoid accidental activation

**NFR-A11Y-007** Contrast must be validated on the actual Soft Pop token implementation in every supported appearance mode

## Responsive Behavior

**NFR-RESP-001** Mobile layouts must be intentionally recomposed rather than mechanically stacking desktop regions

**NFR-RESP-002** Portfolio Work Evidence remains a first-class visual priority on small screens

**NFR-RESP-003** Critical actions must remain reachable without covering core content

**NFR-RESP-004** Discovery filters must have a usable small-screen presentation with reversible selections

## Maintainability

**NFR-MAIN-001** Domain modules should expose clear public interfaces and keep implementation details local

**NFR-MAIN-002** Domain terminology in code and documentation follows `CONTEXT.md`

**NFR-MAIN-003** The same business rule must not be independently reimplemented across multiple screens when it can live behind one domain interface or database constraint

**NFR-MAIN-004** Design tokens come from the Soft Pop theme and AthR semantic aliases rather than hard-coded component colors

**NFR-MAIN-005** New architectural decisions that meet the repository ADR threshold must be recorded before parallel implementations diverge

## Observability

**NFR-OBS-001** Capture structured failures for authentication, upload, search, authorization, Opportunity creation, Application state changes, and message delivery

**NFR-OBS-002** Observability must identify the operation and safe entity identifiers without recording unnecessary private content

**NFR-OBS-003** A release must provide enough telemetry to distinguish user error, authorization rejection, validation failure, upstream failure, and internal application error for critical writes

## Search Quality

**NFR-SRCH-001** Search results must be deterministic enough to explain and test at MVP scale

**NFR-SRCH-002** Private or moderation-hidden records must never enter the searchable corpus

**NFR-SRCH-003** Follower count must not become the dominant relevance signal

**NFR-SRCH-004** The system must behave truthfully when supply is sparse instead of presenting low-confidence results as exact matches

## Data Integrity

**NFR-DATA-001** Lifecycle state transitions must be constrained to valid paths

**NFR-DATA-002** Referential deletion behavior must be explicit for Portfolio media, Work Metrics, Collaborators, Applications, Invites, conversations, and Recommendations

**NFR-DATA-003** Historical professional context should not silently mutate when a display label changes; stable identifiers remain authoritative

**NFR-DATA-004** User-facing counts and trust signals must have one defined calculation source

## Design System Quality

**NFR-DS-001** Soft Pop by serafimcloud on 21st.dev is the canonical base token source

**NFR-DS-002** Upstream token values are retrieved directly at implementation time rather than inferred from screenshots

**NFR-DS-003** Theme tokens are applied through the global design-token layer and not copied as one-off values into feature components

**NFR-DS-004** AthR-specific semantic tokens have documented domain meaning

**NFR-DS-005** Real Work Evidence is not visually altered merely to conform to the theme

## Release Gate

The MVP is not production-ready while any MUST functional requirement or security, privacy, accessibility, or data-integrity requirement above lacks a defined acceptance check
