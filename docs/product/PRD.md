# AthR Product Requirements Document

## Problem Statement

Digital marketing specialists currently split their professional identity, work evidence, networking, opportunity discovery, hiring, and collaboration across products that were designed for broader use cases

A specialist can have a polished profile but weak proof of contribution, a strong portfolio but poor discoverability, or useful professional relationships that are invisible when a hiring decision happens

Hiring users face the inverse problem: profiles are easy to find, but relevant work evidence, market context, availability, collaborators, and trustworthy professional signals are fragmented or absent

AthR needs to make relevant work evidence the shortest path between professional identity and a qualified work conversation

## Solution

AthR is a professional work network for digital marketing specialists where people publish structured work evidence, become discoverable through that evidence, build confirmed professional relationships, and move into contextual conversations and freelance opportunities

The core model is:

**People -> Work -> Expertise -> Collaboration -> Opportunity**

The first release focuses on three experiences that must feel materially better than a generic marketplace:

1. Professional Profile
2. Portfolio Builder and Case Study
3. Discovery of specialists through relevant work

The broader MVP adds professional networking, Opportunities, Applications, Invites, contextual messaging, recommendations, notifications, and trust signals around those three experiences

## Product Goals

- Let a Specialist reach a credible public professional presence quickly
- Make Work Evidence visible at discovery time rather than buried behind a profile
- Let Hiring Users move from a concrete need to relevant specialists and Case Studies with minimal generic browsing
- Make professional relationships confirmable and reusable as trust signals
- Keep account identity flexible so the same person can offer work, hire, or collaborate
- Create a Work Feed whose primary value is useful professional work rather than generic social posting
- Create contextual messaging tied to a Profile, Portfolio Project, Service, or Opportunity
- Ship a trustworthy MVP without payments, escrow, complex contracts, or a complex recommendation service

## Success Definition

AthR is working when specialists who publish relevant Work Evidence receive qualified professional attention and Hiring Users can find credible proof before starting a conversation

The working North Star metric is:

**Qualified Work Conversations created per active Specialist**

Supporting metrics are defined in `docs/analytics/METRICS_AND_EVENTS.md`

## User Stories

1. As a new user, I want to choose whether I currently want to find work, hire, or both, so that onboarding reflects my present intent without locking my identity
2. As a new user, I want to create one professional identity, so that I do not need separate accounts when I both offer and hire expertise
3. As a Specialist, I want to choose my primary Specialties, so that AthR can describe and match my professional focus accurately
4. As a Specialist, I want to add narrower Skills, so that people can discover specific capabilities beyond my broad title
5. As a Specialist, I want to add Markets I have worked in, so that regional experience can influence discovery
6. As a Specialist, I want to add industries I understand, so that Hiring Users can evaluate contextual fit
7. As a Specialist, I want to add tools and channels I use, so that relevant technical experience can be visible without dominating my identity
8. As a Specialist, I want to publish a concise professional headline, so that visitors understand the work I am positioned for before reading a biography
9. As a Specialist, I want to state my current Availability, so that Hiring Users know whether contacting me is timely
10. As a Specialist, I want to specify engagement preferences, so that project, retainer, and consulting fit is visible
11. As a Specialist, I want to create a Portfolio Project as a draft, so that incomplete work never becomes public accidentally
12. As a Specialist, I want to add project context and objectives, so that a Case Study is understandable beyond its visuals
13. As a Specialist, I want to state what I personally owned, so that my contribution is distinguishable from the broader team's work
14. As a Specialist, I want to add images, video, documents, and relevant external links, so that different marketing disciplines can present evidence in the format that best represents the work
15. As a Specialist, I want to reorder project media and select a cover, so that I control how the Case Study is presented
16. As a Specialist, I want to add Work Metrics only when I can disclose them, so that strong work can still be published when results are confidential
17. As a Specialist, I want each Work Metric to show its Verification State, so that visitors can distinguish self-reported results from verified claims
18. As a Specialist, I want to hide client identity or sensitive project details, so that confidentiality does not prevent me from demonstrating relevant experience
19. As a Specialist, I want to identify Collaborators on a Portfolio Project, so that shared work is represented accurately
20. As a Collaborator, I want to confirm or reject a collaboration request independently, so that another person cannot create a confirmed relationship on my behalf
21. As a Specialist, I want to preview a Case Study before publishing, so that I can review the public presentation and privacy choices
22. As a Specialist, I want drafts to autosave, so that long Portfolio Project creation does not lose work during interruption or connectivity issues
23. As a visitor, I want a Specialist profile to show relevant Work Evidence before generic biography, so that I can assess professional fit quickly
24. As a visitor, I want to understand whether a Work Metric is self-reported or verified, so that I can interpret claims appropriately
25. As a Hiring User, I want to search by plain professional intent, so that I can describe the person I need without knowing the platform taxonomy perfectly
26. As a Hiring User, I want to filter by Specialty, Skill, Industry, Market, language, Availability, and other useful context, so that I can narrow results deliberately
27. As a Hiring User, I want search results to expose relevant Case Studies, so that proof appears before I commit to opening every profile
28. As a Hiring User, I want follower count to have little or no influence on professional relevance, so that popularity does not replace fit
29. As a Hiring User, I want to save Specialists and Work Evidence privately, so that I can build a shortlist without creating a public signal
30. As a user, I want to follow Specialists whose work is useful to me, so that their future Work Evidence can appear in my Work Feed
31. As a user, I want the Work Feed to prioritize Case Studies, breakdowns, experiments, availability, collaboration requests, and Opportunities, so that opening the feed has a professional purpose
32. As a Specialist, I want to publish a useful Breakdown or Experiment without turning it into a full Portfolio Project, so that I can share professional thinking around my work
33. As a Specialist, I want to publish an Availability update, so that relevant people can know when I can take new work
34. As a Specialist, I want to request a Collaborator for a specific need, so that professional relationships can start inside the network
35. As a Hiring User, I want to create a Project Brief using marketing-specific context, so that AthR can represent my need more accurately than a generic job description
36. As a Hiring User, I want to save a Project Brief as a draft, so that incomplete or sensitive hiring work is not public
37. As a Hiring User, I want to publish an Opportunity from a Project Brief, so that relevant Specialists can discover and evaluate it
38. As a Hiring User, I want to specify budget context when appropriate without making it mandatory for every engagement, so that different buying models remain possible
39. As a Hiring User, I want to invite a specific Specialist to an Opportunity, so that proactive discovery can turn into a direct work conversation
40. As a Specialist, I want to view the context of an Opportunity before applying, so that I can judge fit and avoid low-quality applications
41. As a Specialist, I want to apply once to an Opportunity and attach selected Work Evidence, so that my response is grounded in relevant proof
42. As a Specialist, I want to withdraw an Application when circumstances change, so that my current intent stays accurate
43. As a Hiring User, I want to review Applications to my own Opportunities, so that applicant information is private to the appropriate hiring context
44. As a Hiring User, I want to shortlist, reject, or accept an Application, so that the hiring process has clear state
45. As a user, I want a conversation to show what it is about, so that professional messaging keeps context
46. As a user, I want to start a conversation from a Profile, Case Study, Service, or Opportunity, so that the first message does not need to reconstruct the reason for contact
47. As a conversation member, I want only members to read and send messages, so that private professional communication remains private
48. As a user, I want message delivery to update without manually refreshing, so that conversation feels immediate
49. As a Specialist, I want to receive a Recommendation tied to a specific Skill or project where appropriate, so that trust is more informative than a generic star score
50. As a user, I want to know when a Work Relationship is confirmed, so that professional history is not inferred only from follows or comments
51. As a user, I want to block another user, so that unwanted professional contact stops across relevant interaction surfaces
52. As a user, I want to report inappropriate profiles, work, Opportunities, or messages through the appropriate safety path, so that AthR can respond to abuse
53. As a user, I want actionable notifications for invites, applications, messages, collaboration confirmations, and Recommendations, so that important work activity is not missed
54. As a user, I want non-actionable noise to stay out of notifications, so that notifications remain useful
55. As a user with reduced motion enabled, I want the interface to respect that preference, so that motion does not become a barrier
56. As a keyboard user, I want all critical workflows to work without a pointer device, so that the product is operable accessibly
57. As a mobile user, I want Portfolio Projects, discovery, and messaging to feel intentionally designed for a small screen, so that mobile is not a stacked desktop fallback
58. As a Specialist, I want my public profile and Case Studies to have stable shareable URLs, so that I can use AthR outside the platform as my professional presence
59. As a Hiring User, I want search and discovery to remain understandable even when there are few results, so that an early marketplace does not hide scarcity behind fake recommendations
60. As an operator, I want trust, moderation, and access decisions to be auditable without storing more private content than necessary, so that the product can be operated responsibly

## Implementation Decisions

### Identity and access

- One user identity supports all professional actions
- Professional Intent is mutable and used for onboarding and experience prioritization, not permanent authorization
- Authentication is provided by Supabase Auth
- Private and user-owned records are protected by PostgreSQL Row Level Security according to ADR-0003

### Domain boundaries

- Identity owns professional identity, intent, profile, languages, and Availability
- Taxonomy owns Specialties, Skills, industries, Markets, tools, channels, and objectives
- Portfolio owns Portfolio Projects, Case Studies, media, Work Metrics, confidentiality, and Collaborator confirmation
- Discovery composes searchable professional evidence from public profile and Portfolio data
- Network owns follows, saves, Work Feed entries, Recommendations, and Work Relationships
- Opportunities owns Project Briefs, Opportunities, Applications, and Invites
- Messaging owns conversations, membership, messages, and context references
- Notifications owns actionable user alerts
- Moderation owns blocks, reports, moderation state, and operator actions

### Portfolio and evidence

- Portfolio Projects are first-class domain records according to ADR-0002
- Draft, published, and archived states are explicit
- Public Case Studies derive from published Portfolio Projects
- Media ownership is validated independently of client-provided storage paths
- Work Metrics support visibility and Verification State
- Collaborator confirmation requires action from the Collaborator

### Discovery

- V1 uses PostgreSQL text search plus structured filters
- Search ranking begins with understandable relevance signals such as exact Specialty, Skill, relevant Portfolio evidence, industry, Market, Availability, and recency
- Follower count is not a primary professional relevance signal
- Search results can surface both Specialists and relevant Work Evidence
- No vector search or separate recommendation service is required for V1

### Work Feed

- The Work Feed uses explicit professional content types rather than an unrestricted generic social model
- Initial ranking can use following, relevance, content type, and recency
- Case Studies remain linked to their Portfolio Project rather than duplicated as unstructured content

### Opportunities

- A Project Brief can exist privately before an Opportunity is published
- Opportunity lifecycle includes draft, published, closed, and archived
- One Specialist can have at most one active Application per Opportunity
- Applications can reference selected Portfolio Projects
- Invites and Applications remain distinct actions

### Messaging

- Conversation membership is the authorization boundary for private message access
- A conversation can carry an optional context reference to a Profile, Portfolio Project, Service, or Opportunity
- Realtime is used for message delivery and selected high-value updates only

### Trust and safety

- Trust is represented through several signals rather than one generic rating
- Verification State must remain visible where a claim would otherwise look independently verified
- Blocking changes interaction permissions, not merely feed visibility
- Reporting and moderation data is private

### Product presentation

- Visual work receives stronger prominence than generic explanatory copy
- The interface uses editorial hierarchy and varied layout composition instead of a universal card grid
- The visual quality rules in `docs/design/VISUAL_DIRECTION.md` are binding for product UI
- Responsive behavior and accessibility are acceptance requirements, not later polish

## Testing Decisions

Good tests assert externally observable behavior at the highest practical seam and avoid coupling to internal component structure

Critical behavior must be tested at integration or end-to-end level when authorization, state transitions, storage ownership, or cross-domain behavior is involved

### Identity

- Sign up and authentication
- Protected route behavior
- Intent can change without creating a second identity
- A user cannot modify another profile

### Portfolio

- Draft creation and owner-only read
- Autosave behavior at the public editing seam
- Publish and archive transitions
- Media ownership and failed upload behavior
- Confidential field visibility
- Work Metric Verification State
- Collaborator request, confirm, reject, and duplicate prevention

### Discovery

- Structured filtering
- Relevant Portfolio evidence appears with matching Specialists
- Private or draft content never enters public results
- Empty and low-result behavior is truthful

### Network

- Follow and unfollow
- Private save and unsave
- Work Feed content type eligibility
- Recommendation permissions and visibility

### Opportunities

- Draft and publish lifecycle
- Application uniqueness
- Withdraw, shortlist, reject, and accept transitions
- Opportunity owner can read appropriate Applications
- Unrelated users cannot read private Application content

### Messaging

- Conversation membership enforcement
- Context reference behavior
- Unauthorized read and send attempts fail
- Realtime delivery does not bypass membership rules

### Safety

- Blocking prevents defined contact and interaction paths
- Reports remain private to appropriate operators
- Moderation state affects public visibility consistently

### End-to-end product loops

- New Specialist -> onboarding -> first Portfolio Project -> publish -> public Profile
- Hiring User -> search -> inspect Work Evidence -> save or message
- Hiring User -> Project Brief -> Opportunity -> invite Specialist
- Specialist -> Opportunity -> Application with Work Evidence -> contextual conversation
- Specialist -> Collaborator request -> confirmation -> Work Relationship signal

The detailed matrix lives in `docs/quality/ACCEPTANCE_TEST_MATRIX.md`

## Out of Scope

The first release does not include:

- Escrow
- Marketplace payment processing
- Complex contract management
- Video meetings
- Courses
- Events
- General-purpose communities
- Gamification
- An AI assistant embedded throughout the product
- Complex behavioral recommendation infrastructure
- Crews as a bookable group
- Advanced company procurement features
- Automated skill certification
- Public leaderboards
- A generic star rating as the primary trust model

## Further Notes

The product should resist feature pressure that weakens the evidence-first loop

When a proposed feature does not improve professional identity, Work Evidence, discovery, Collaboration, Opportunity quality, or a qualified work conversation, it needs explicit justification before entering the MVP

Use `CONTEXT.md` for canonical domain terms and the focused documents under `docs/` for detailed requirements
