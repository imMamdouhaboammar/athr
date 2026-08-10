# AthR Core User Journeys

This document defines the primary end-to-end journeys that product, design, engineering, analytics, and QA should use as shared behavioral references

## Journey 1: Specialist Reaches First Credible Profile

### Entry

A new user arrives wanting to find work

### Flow

1. Authenticate
2. Choose current Professional Intent: find work
3. Add name, username, photo, professional role, headline, location, timezone, and languages
4. Choose primary Specialties and supporting Skills
5. Add relevant industries, Markets, channels, and tools
6. Set Availability and preferred engagement types
7. Create first Portfolio Project
8. Add project context, personal contribution, media, and optional Work Metrics
9. Review confidentiality and Verification State
10. Preview Case Study
11. Publish
12. Land on completed public Profile with the new Case Study visible prominently

### Completion

The Specialist has a public Profile, primary expertise, Availability, and at least one published Case Study

### Recovery States

- Authentication interrupted -> return to the last safe onboarding step
- Portfolio upload fails -> retain text and media order, expose retry per failed asset
- User cannot disclose results -> allow publication without metrics
- User has no client permission to name the brand -> allow hidden or generalized client identity
- User leaves before publishing -> save Portfolio Project as draft

### Analytics Milestones

- onboarding_started
- professional_intent_selected
- profile_core_completed
- availability_set
- portfolio_project_started
- portfolio_project_previewed
- portfolio_project_published
- specialist_activated

## Journey 2: Hiring User Finds a Specialist Through Work Evidence

### Entry

A Hiring User has a concrete marketing need

### Flow

1. Open Discover
2. Enter a text intent such as `Meta buyer with Saudi fashion experience`
3. Refine with Specialty, Skill, Industry, Market, language, Availability, or engagement filters when useful
4. Review results that combine Specialist identity with relevant Case Studies
5. Open a relevant Case Study
6. Inspect contribution, context, Work Metrics, Verification State, and Collaborators
7. Open Specialist Profile
8. Review selected work, Availability, Services, Work Relationships, and Recommendations
9. Save the Specialist or begin a contextual conversation

### Completion

A relevant Specialist is saved or a Qualified Work Conversation begins

### Recovery States

- No exact results -> preserve intent and explain which filters reduced supply
- Few results -> show truthful nearby matches without presenting them as exact matches
- Specialist unavailable -> preserve profile access and show Availability clearly
- Case Study contains limited confidential detail -> show available evidence without inventing missing context

### Analytics Milestones

- discovery_search_submitted
- discovery_filter_applied
- discovery_result_viewed
- case_study_viewed
- specialist_profile_viewed
- specialist_saved
- contextual_conversation_started

## Journey 3: Hiring User Creates an Opportunity

### Entry

A Hiring User wants inbound responses rather than only direct discovery

### Flow

1. Start a Project Brief
2. Choose business goal and relevant channel or Specialty where known
3. Add Market, Industry, business model, and current situation
4. Add expected deliverables, duration, start date, and Availability needs
5. Add optional spend or budget context when appropriate
6. Choose whether the need is for one Specialist or multiple people
7. Save draft or continue
8. Preview Opportunity
9. Publish
10. Review recommended Specialists and relevant Case Studies
11. Optionally invite specific Specialists

### Completion

A published Opportunity exists and can receive Applications or Invites can be sent from it

### Recovery States

- User does not know the exact Specialty -> permit goal-first brief creation
- Budget is unknown -> allow publication if other quality fields are sufficient
- User pauses -> preserve private draft
- Opportunity is no longer active -> close without deleting its historical context

### Analytics Milestones

- project_brief_started
- project_brief_completed
- opportunity_published
- opportunity_specialist_recommendation_viewed
- invite_sent

## Journey 4: Specialist Applies With Relevant Evidence

### Entry

A Specialist opens a published Opportunity

### Flow

1. Review goal, context, Market, Industry, deliverables, duration, and budget information if available
2. Compare Opportunity requirements with own Availability
3. Start Application
4. Add concise response note
5. Select one or more relevant published Portfolio Projects
6. Add optional commercial or Availability detail
7. Submit
8. See submitted state and next-action expectations

### Completion

One Application exists for the Specialist and Opportunity

### Recovery States

- Duplicate submission attempt -> return existing Application instead of creating another
- Attached Portfolio Project becomes archived -> preserve Application integrity while reflecting current public visibility rules
- Specialist becomes unavailable -> allow Application withdrawal
- Opportunity closes during draft -> block submission and explain state change

### Analytics Milestones

- opportunity_viewed
- application_started
- application_work_evidence_attached
- application_submitted
- application_withdrawn

## Journey 5: Hiring User Reviews Applications

### Entry

A Hiring User owns a published Opportunity with Applications

### Flow

1. Open Opportunity management view
2. Review applicant identity, relevance summary, selected Work Evidence, Availability, and response note
3. Open Case Studies without losing hiring context
4. Shortlist, reject, or accept according to current state
5. Start contextual conversation with a promising Specialist

### Completion

The Hiring User takes an explicit decision or starts a Qualified Work Conversation

### Recovery States

- Applicant withdraws -> state becomes visibly unavailable for active selection
- Attached evidence is no longer public -> preserve only information the Hiring User is still authorized to access
- Opportunity closes -> retain historical Application states but stop new Applications

### Analytics Milestones

- application_reviewed
- application_shortlisted
- application_rejected
- application_accepted
- contextual_conversation_started

## Journey 6: Collaborator Confirmation Creates Trust Evidence

### Entry

A Specialist adds another Specialist to a Portfolio Project as a Collaborator

### Flow

1. Owner chooses an existing AthR Specialist
2. Owner states the Collaborator's contribution or role
3. System creates pending collaboration request
4. Collaborator receives notification
5. Collaborator reviews project context and claimed relationship
6. Collaborator confirms or rejects
7. Confirmed relationship becomes eligible for display as Work Relationship evidence

### Completion

The relationship has an explicit confirmed or rejected state owned by the invited Collaborator's action

### Recovery States

- Duplicate request -> return current relationship state
- Project archived before response -> preserve audit state and stop public relationship display when appropriate
- Collaborator blocks owner -> prevent new requests and apply block policy to pending interactions

### Analytics Milestones

- collaborator_requested
- collaborator_confirmed
- collaborator_rejected
- work_relationship_created

## Journey 7: Contextual Professional Conversation

### Entry

A user clicks Message from a Profile, Case Study, Service, Opportunity, Invite, or Application context

### Flow

1. Create or open appropriate conversation
2. Show immutable or safely resolvable context reference near the conversation header
3. User writes and sends message
4. Recipient receives realtime message and actionable notification
5. Conversation continues without needing to restate the original work context

### Completion

At least one message is exchanged within a valid professional context

### Recovery States

- Context entity is archived -> preserve a safe label and historical reference without leaking newly private data
- User is blocked -> prevent new message delivery according to block policy
- Realtime fails -> sent messages remain durable and appear after standard refresh or retry

### Analytics Milestones

- contextual_conversation_started
- message_sent
- message_received
- conversation_reply_received

## Journey 8: Work Feed Leads to Professional Action

### Entry

A returning user opens Home

### Flow

1. Work Feed loads eligible professional content
2. User sees Case Study, Breakdown, Experiment, Availability update, Collaboration request, or Opportunity
3. User opens the work or professional identity
4. User follows, saves, applies, invites, or starts a contextual conversation

### Completion

Feed consumption produces a professional action rather than passive vanity engagement only

### Recovery States

- Sparse feed -> use relevant recent public work without fabricating personalization confidence
- Muted or blocked relationships -> exclude according to safety policy
- Deleted content -> remove from active feed and maintain safe historical references where required

### Analytics Milestones

- work_feed_viewed
- work_feed_item_opened
- follow_created
- work_saved
- application_started
- contextual_conversation_started
