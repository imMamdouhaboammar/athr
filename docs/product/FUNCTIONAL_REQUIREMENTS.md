# AthR Functional Requirements

This catalog turns the PRD into traceable product behavior

Requirement language:

- **MUST** is required for the MVP release gate
- **SHOULD** is expected unless a documented constraint defers it
- **MAY** is optional and must not block MVP completion

## Identity and Authentication

**FR-ID-001 MUST** support account creation and authenticated sessions

**FR-ID-002 MUST** maintain one professional identity whether the user finds work, hires, or does both

**FR-ID-003 MUST** let the user change Professional Intent without creating a second Profile

**FR-ID-004 MUST** provide a stable unique username for public Profile routing

**FR-ID-005 MUST** prevent a user from modifying another user's Profile

**FR-ID-006 MUST** support name, avatar, professional role, headline, location, timezone, languages, and concise biography

**FR-ID-007 SHOULD** let a user control the visibility of supported profile fields

**FR-ID-008 MUST** preserve a safe fallback when an avatar or optional identity field is missing

## Onboarding and Activation

**FR-ONB-001 MUST** ask for current Professional Intent early in onboarding

**FR-ONB-002 MUST** let Specialists select primary Specialties and supporting Skills

**FR-ONB-003 MUST** let Specialists add relevant industries, Markets, channels, and tools

**FR-ONB-004 MUST** let Specialists set Availability and supported engagement types

**FR-ONB-005 MUST** allow onboarding progress to resume safely after interruption

**FR-ONB-006 SHOULD** route a Specialist toward creating the first Portfolio Project before presenting optional profile polish

**FR-ONB-007 MUST** consider a Specialist activated only after core Profile data, primary expertise, Availability, and one published Case Study exist

**FR-ONB-008 MUST** consider a Hiring User activated after a meaningful hiring action such as saving a Specialist, messaging a Specialist, or creating a Project Brief

## Taxonomy

**FR-TAX-001 MUST** maintain canonical Specialties, Skills, industries, Markets, tools, channels, and objectives

**FR-TAX-002 MUST** use stable identifiers independent of display label changes

**FR-TAX-003 MUST** prevent duplicate taxonomy relationships on the same Profile or project

**FR-TAX-004 SHOULD** allow taxonomy entries to be retired without breaking historical records

**FR-TAX-005 SHOULD** support curated relationships between broad Specialties and narrower Skills

## Professional Profile

**FR-PRO-001 MUST** display professional headline before long biography

**FR-PRO-002 MUST** surface primary Specialties and selected Skills

**FR-PRO-003 MUST** display Availability with current engagement preferences

**FR-PRO-004 MUST** surface Selected Work prominently

**FR-PRO-005 MUST** display public Recommendations and confirmed Work Relationships according to their visibility rules

**FR-PRO-006 SHOULD** expose Services when the Specialist has published them

**FR-PRO-007 MUST** provide a stable public URL

**FR-PRO-008 MUST** handle private, incomplete, blocked, suspended, and deleted Profile states safely

## Portfolio Projects and Case Studies

**FR-POR-001 MUST** let a Specialist create a Portfolio Project as a private draft

**FR-POR-002 MUST** support project title, client or brand context, role, contribution, objectives, industries, Markets, channels, tools, timeline, summary, and result context where disclosed

**FR-POR-003 MUST** support image, video, document, and supported external-link media patterns

**FR-POR-004 MUST** let the owner reorder media and choose a cover

**FR-POR-005 MUST** support draft, published, and archived lifecycle states

**FR-POR-006 MUST** let a Specialist preview the public Case Study before publishing

**FR-POR-007 MUST** autosave recoverable editing state

**FR-POR-008 MUST** let a Specialist publish a Case Study without Work Metrics

**FR-POR-009 MUST** let a Specialist hide or generalize client identity when disclosure is restricted

**FR-POR-010 MUST** ensure private drafts and private media never appear in public Profile, Feed, or Discovery responses

**FR-POR-011 MUST** preserve text and successful media references when one media upload fails

**FR-POR-012 SHOULD** support an explicit alt text or media description path where the media meaning is not otherwise conveyed

## Work Metrics and Verification

**FR-MET-001 MUST** let the owner attach zero or more Work Metrics to a Portfolio Project

**FR-MET-002 MUST** support metric label, value or textual result, unit when relevant, visibility, and Verification State

**FR-MET-003 MUST** visibly distinguish self-reported and verified claims

**FR-MET-004 MUST** prevent a user from marking their own claim client-verified without the required verification action

**FR-MET-005 SHOULD** let a Specialist hide a metric while preserving the rest of the Case Study

## Collaborators and Work Relationships

**FR-COL-001 MUST** let a Portfolio Project owner request an existing Specialist as a Collaborator

**FR-COL-002 MUST** record the claimed contribution or role with the request

**FR-COL-003 MUST** create the relationship in a pending state

**FR-COL-004 MUST** let only the invited Collaborator confirm or reject their own request

**FR-COL-005 MUST** prevent duplicate active collaboration requests for the same project and Collaborator

**FR-COL-006 MUST** make confirmed relationships eligible for public display according to project and Profile visibility

**FR-COL-007 MUST** remove or hide relationship presentation when a relevant entity becomes private, blocked, removed, or moderated according to policy

## Services

**FR-SRV-001 SHOULD** let a Specialist publish a repeatable Service with title, intended outcome, scope, deliverables, engagement context, and optional starting price

**FR-SRV-002 SHOULD** let the owner draft, publish, unpublish, and edit a Service

**FR-SRV-003 SHOULD** let a Hiring User start a contextual conversation from a Service

## Discovery

**FR-DIS-001 MUST** support text search across public professional identity and eligible Work Evidence

**FR-DIS-002 MUST** support filters for Specialty, Skill, Industry, Market, language, and Availability

**FR-DIS-003 SHOULD** support useful filters for channel, tool, engagement type, and commercial fit when enough data exists

**FR-DIS-004 MUST** exclude private, draft, blocked, or moderation-hidden entities

**FR-DIS-005 MUST** expose relevant Case Studies with Specialist results when they contribute to the match

**FR-DIS-006 MUST** keep ranking independent of follower count as a primary relevance signal

**FR-DIS-007 MUST** provide truthful empty and low-result states

**FR-DIS-008 SHOULD** explain active filters sufficiently for a user to understand why results are narrow

**FR-DIS-009 MUST** support paginated or cursor-based result loading

## Saves and Follows

**FR-NET-001 MUST** let a user follow and unfollow a public Specialist where safety rules allow

**FR-NET-002 MUST** prevent duplicate Follow relationships

**FR-NET-003 MUST** let a user privately save and unsave supported entities

**FR-NET-004 MUST** keep Saves private to their owner

**FR-NET-005 MUST** prevent blocked relationships from creating or maintaining disallowed interactions according to block policy

## Work Feed

**FR-FEED-001 MUST** support explicit professional content types: Case Study, Breakdown, Teardown, Experiment, Availability update, Collaboration request, and Opportunity

**FR-FEED-002 MUST** exclude private or ineligible content

**FR-FEED-003 MUST** let a feed item retain a stable reference to its underlying Portfolio Project or Opportunity where applicable

**FR-FEED-004 SHOULD** rank initial feed results using understandable signals such as following, professional relevance, content type, and recency

**FR-FEED-005 MUST** provide a useful sparse-feed state without fabricating personalization confidence

## Project Briefs and Opportunities

**FR-OPP-001 MUST** let a Hiring User create a private Project Brief draft

**FR-OPP-002 MUST** support goal, relevant Specialty or channel when known, Market, Industry, current context, expected work, duration, start date, and Availability needs

**FR-OPP-003 SHOULD** support optional current spend, budget range, tools, and engagement type where relevant

**FR-OPP-004 MUST** allow a goal-first brief when the Hiring User does not know the correct Specialty

**FR-OPP-005 MUST** support draft, published, closed, and archived Opportunity states

**FR-OPP-006 MUST** block new Applications to closed or archived Opportunities

**FR-OPP-007 MUST** let the Opportunity owner edit allowed fields according to lifecycle state

**FR-OPP-008 SHOULD** show relevant Specialists and Work Evidence after the Project Brief reaches a usable state

## Applications

**FR-APP-001 MUST** let a Specialist submit one Application per Opportunity

**FR-APP-002 MUST** let an Application include a concise response, Availability or commercial context, and selected published Portfolio Projects

**FR-APP-003 MUST** prevent duplicate Applications at the data boundary

**FR-APP-004 MUST** let the Specialist withdraw an Application where lifecycle rules allow

**FR-APP-005 MUST** let the Opportunity owner view authorized Applications to their own Opportunity

**FR-APP-006 MUST** let the Opportunity owner shortlist, reject, or accept according to valid state transitions

**FR-APP-007 MUST** keep Application content hidden from unrelated users

## Invites

**FR-INV-001 MUST** let an Opportunity owner invite a specific Specialist to a published Opportunity

**FR-INV-002 MUST** preserve Opportunity context with the Invite

**FR-INV-003 MUST** let the recipient view, decline, or continue into an Application or contextual conversation as defined by the product flow

**FR-INV-004 MUST** respect blocking and moderation rules

## Messaging

**FR-MSG-001 MUST** support conversations with explicit members

**FR-MSG-002 MUST** let a conversation optionally reference a Profile, Portfolio Project, Service, Opportunity, Invite, or Application context that the members are allowed to see

**FR-MSG-003 MUST** allow only conversation members to read messages

**FR-MSG-004 MUST** allow only conversation members who are not blocked from sending messages

**FR-MSG-005 MUST** durably persist a message before treating realtime delivery as successful

**FR-MSG-006 MUST** support read state at a practical conversation level

**FR-MSG-007 SHOULD** provide realtime delivery while retaining standard refresh recovery

**FR-MSG-008 MUST** handle archived or deleted context without leaking newly private content

## Recommendations

**FR-REC-001 MUST** let a user write a Recommendation for another user where policy allows

**FR-REC-002 SHOULD** let a Recommendation reference a Skill, Portfolio Project, or confirmed Work Relationship

**FR-REC-003 MUST** support moderation and visibility state

**FR-REC-004 MUST** prevent a user from editing another author's Recommendation

## Notifications

**FR-NOT-001 MUST** notify users about high-value actions such as messages, Invites, Applications, collaborator requests, collaborator decisions, Recommendations, and important Opportunity state changes

**FR-NOT-002 MUST** keep notifications private to their recipient

**FR-NOT-003 MUST** support read and unread state

**FR-NOT-004 SHOULD** avoid low-value notification noise that does not lead to a likely user action

## Blocking and Reporting

**FR-SAFE-001 MUST** let a user block another user

**FR-SAFE-002 MUST** apply block policy consistently across Follow, messaging, Invites, collaboration requests, and relevant public interaction surfaces

**FR-SAFE-003 MUST** let a user report supported Profiles, Work Evidence, Opportunities, Recommendations, or messages through an appropriate reporting path

**FR-SAFE-004 MUST** keep reports private to authorized operators

**FR-SAFE-005 MUST** support moderation status without destroying evidence required for legitimate review or audit

## Responsive and Accessibility Behavior

**FR-A11Y-001 MUST** make critical workflows keyboard-operable

**FR-A11Y-002 MUST** expose visible focus states

**FR-A11Y-003 MUST** present accessible errors adjacent to affected controls

**FR-A11Y-004 MUST** respect reduced-motion preferences

**FR-A11Y-005 MUST** preserve usable mobile touch targets

**FR-A11Y-006 MUST** verify actual contrast after applying the Soft Pop design system

## Theme and Appearance

**FR-UI-001 MUST** use Soft Pop by serafimcloud on 21st.dev as the canonical base design-token system

**FR-UI-002 MUST** use the actual published Soft Pop tokens rather than approximating the theme

**FR-UI-003 MUST** support the appearance modes supplied by the canonical theme when both are part of the upstream theme

**FR-UI-004 MUST** use semantic AthR status aliases rather than one-off hard-coded component colors

**FR-UI-005 MUST** keep user Work Evidence visually unaltered by decorative theme treatments that change the meaning or appearance of the work

## Traceability

Every implementation ticket should reference the relevant requirement IDs and the primary user journey it affects

Every MVP release gate should be traceable to at least one automated or manual acceptance check
