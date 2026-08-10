# AthR Portfolio, Trust and Professional Network

## 1. Why This Area Matters

The product should not ask users to trust polished profile copy alone

AthR needs a visible chain between work, ownership, collaborators, results and reputation

The portfolio is therefore not a profile attachment

It is the main professional evidence model

## 2. Portfolio Project Structure

Each portfolio project should support these domains

### Identity

- Project title
- Client or brand
- Date or timeline
- Cover media
- Confidentiality status

### Business context

- Industry
- Market
- Business model
- Objective

### Marketing context

- Channels
- Tools
- Existing spend when discloseable
- Team context when useful

### Ownership

- Specialist role
- Personal contribution
- Decisions owned
- Deliverables owned

### Collaboration

- Collaborator
- Collaborator role
- Confirmation status

### Work media

- Image
- Video
- Carousel
- PDF or document
- Website URL
- Campaign creative
- Screenshot

### Outcome

- Result narrative
- Metrics
- Metric unit
- Metric value
- Metric verification state

## 3. Metric Trust States

Result metrics should support explicit states

### Self reported

The specialist entered the value and no client verification is attached

### Client verified

An authorized client or relevant project participant confirms the disclosed metric or result

### Hidden

The specialist can explain the outcome without exposing a number

Avoid a design that pressures users into inventing numbers simply because metric cards are visually expected

## 4. Confidential Work

Marketing work often contains client restrictions

Support:

- Hide client name
- Hide budget
- Hide specific metrics
- Show a generalized range
- Publish media only when permitted
- Explain contribution without disclosing sensitive client data

The product must not imply that more disclosure automatically means more credibility

## 5. Collaborator Confirmation

When a specialist tags another AthR user on a project:

1. The tagged user receives a confirmation request
2. They can confirm, reject or report the tag
3. Confirmed relationships appear on both relevant profiles
4. The project records the collaborator role

No collaborator should be publicly represented as confirmed before consent

## 6. Recommendation Model

Recommendations should be tied to useful professional context

Recommended structure:

- Author
- Relationship type
- Skill or specialty being recommended
- Optional project reference
- Recommendation text
- Date

Example:

`Recommended for Paid Social Strategy`

This is more useful than a generic testimonial without context

## 7. Work Relationships

Useful relationship types may include:

- Worked together
- Client relationship
- Repeat client
- Repeat collaborator
- Managed by
- Collaborated on project

Do not expose internal relationship inference as confirmed fact without evidence

## 8. Frequently Works With

This section should only appear when enough confirmed data exists

Possible signals:

- Number of confirmed shared projects
- Recency
- Different project contexts

Avoid displaying a relationship based on one unconfirmed tag

## 9. Availability Model

Availability should communicate work capacity without forcing unrealistic precision

Statuses:

- Available now
- Limited availability
- Booked

Optional details:

- Hours per week
- Earliest start date
- Project based
- Retainer
- Consulting

Availability should have a last-updated timestamp internally so stale states can be handled later

## 10. Services

A specialist may publish focused services such as:

- Paid media audit
- Tracking setup review
- Landing page conversion review
- Creative strategy sprint
- SEO audit
- CRM lifecycle audit

A service should contain:

- Title
- Outcome
- Scope
- Deliverables
- Typical duration
- Starting price or contact-for-price state
- Availability

Do not turn service pages into generic gig listings with excessive package tiers in the first version

## 11. Follow Model

Follow exists to improve professional discovery

A follow should affect:

- Work Feed relevance
- Availability updates
- New work visibility

Do not make follower count a major public status symbol by default

The count may exist, but the interface should not reward vanity behavior over useful work

## 12. Save Model

Users can save:

- People
- Work
- Opportunities

Save is private by default

Later versions may allow private talent lists or project-specific shortlists

## 13. Work Feed Publishing

Supported post types:

### Case Study

A published portfolio project or selected project summary

### Breakdown

How a piece of work was approached

### Teardown

A professional analysis of an existing campaign, page, creative or marketing experience

### Experiment

A test, hypothesis and observed result

### Availability update

A meaningful change in work availability

### Collaboration request

A request for a complementary specialist

### Opportunity

A hiring brief or published freelance need

## 14. Avoid Generic Social Behaviors

V1 should not prioritize:

- Inspirational text posting
- Polls
- Viral engagement mechanics
- Engagement streaks
- Creator badges based on posting frequency
- Generic trending topics

The network should remain tied to professional work

## 15. Future Crew Model

A later release can introduce reusable Crews

Example:

`DTC Growth Crew`

- Creative Strategist
- Media Buyer
- Copywriter
- Designer
- Tracking Specialist

Crew capabilities may later include:

- Crew profile
- Shared work
- Role composition
- Availability
- Combined inquiry
- Project-specific team recommendations

Do not build Crew transactions in the initial MVP

## 16. Abuse and Integrity Considerations

Potential abuse cases:

- Fake client verification
- Unapproved collaborator tagging
- Stolen portfolio work
- Misleading metrics
- Spam recommendations
- Fake opportunities
- Message harassment
- Scraped or impersonated profiles

Required product controls:

- Report content
- Report user
- Block user
- Reject collaborator tag
- Remove recommendation visibility where policy allows
- Moderation status for reported work
- Audit-friendly records for verification actions

## 17. Product Acceptance Criteria

The portfolio and trust model is working when:

- A viewer can understand the specialist's actual role in a project
- Collaborators are not presented as confirmed without consent
- Result claims have a visible trust state
- Confidential work can still be represented credibly
- Recommendations are skill-specific
- Social signals support work discovery rather than vanity ranking
- A completed project can naturally create stronger evidence for future opportunities
