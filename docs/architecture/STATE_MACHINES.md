# AthR State Machines

These lifecycles define valid state transitions for records whose behavior changes materially over time

## Portfolio Project

States:

`draft -> published -> archived`

Allowed transitions:

- draft -> published
- draft -> archived
- published -> draft only when explicitly supported as unpublish behavior and public URLs are handled safely
- published -> archived
- archived -> draft when restoring for editing is supported
- archived -> published only through the same validation gate as first publication

Rules:

- Draft is owner-private
- Published is eligible for public Profile, Discovery, Work Feed, Applications, and contextual messaging references
- Archived is not eligible for new public discovery
- Publication requires required fields and valid media ownership
- Public references to later-archived work must not reveal newly private information

## Work Metric Verification

States:

`self_reported`
`verification_pending`
`verified`
`verification_rejected`
`hidden`

Allowed transitions:

- self_reported -> verification_pending
- verification_pending -> verified
- verification_pending -> verification_rejected
- verification_rejected -> self_reported
- any visible state -> hidden
- hidden -> previous valid visible state only through an explicit restore action

Rules:

- A Specialist cannot self-transition a claim to verified
- Verification state is displayed wherever the metric would otherwise imply independent substantiation
- Rejection does not require deleting the underlying metric; it returns to an honest non-verified state or remains hidden

## Collaborator Request

States:

`pending -> confirmed | rejected | removed`

Allowed transitions:

- pending -> confirmed by invited Collaborator
- pending -> rejected by invited Collaborator
- pending -> removed by project owner where appropriate
- confirmed -> removed according to relationship-removal policy

Rules:

- Project owner cannot confirm on behalf of Collaborator
- Duplicate active requests for the same project and Collaborator are invalid
- A blocked relationship prevents new requests

## Opportunity

States:

`draft -> published -> closed -> archived`

Allowed transitions:

- draft -> published
- draft -> archived
- published -> closed
- published -> archived only when the product intentionally bypasses the normal close state
- closed -> published only through explicit reopen behavior if supported
- closed -> archived

Rules:

- Draft is private to authorized owners
- Published accepts Applications and Invites according to permissions
- Closed accepts no new Applications
- Archived is removed from active discovery and hiring surfaces

## Application

States:

`draft -> submitted -> shortlisted | rejected | accepted | withdrawn`

Allowed transitions:

- draft -> submitted
- submitted -> shortlisted
- submitted -> rejected
- submitted -> accepted
- submitted -> withdrawn by applicant
- shortlisted -> accepted
- shortlisted -> rejected
- shortlisted -> withdrawn by applicant

Rules:

- One applicant may have at most one active Application per Opportunity
- An Opportunity must be published when an Application is submitted
- Rejected, accepted, and withdrawn are terminal for MVP unless an explicit reconsideration feature is later specified
- Historical state remains visible only to authorized parties

## Invite

States:

`pending -> accepted | declined | expired | withdrawn`

Rules:

- Only recipient accepts or declines
- Sender may withdraw while pending
- Closed or archived Opportunity invalidates pending Invite actions and may transition the Invite to expired
- Accepting an Invite does not silently create an accepted Application; the next action must remain explicit in the product flow

## Recommendation

States:

`draft -> submitted -> visible | hidden | rejected`

Rules:

- Author owns draft content
- Recipient cannot rewrite author content
- Moderation may hide or reject according to policy
- Only visible Recommendations contribute to public trust presentation

## Report

States:

`submitted -> reviewing -> resolved | dismissed`

Rules:

- Reporter cannot change moderation outcome
- Report contents remain private to authorized operators
- Resolution may trigger a separate moderation action against the target without rewriting report history

## User Account Operational State

States:

`active -> restricted | suspended | deactivated`

Rules:

- Restricted may disable selected actions while preserving allowed reads
- Suspended blocks authenticated product activity according to moderation policy
- Deactivated is user-initiated or operator-managed account closure according to retention policy
- Public Profile and Work Evidence visibility follows the account-state policy explicitly rather than relying on application routing side effects

## Conversation Membership

Membership states:

`active -> left | removed | blocked`

Rules:

- Only active members can read new private messages unless historical access policy explicitly allows otherwise
- A blocking action applies the product's block policy across existing and future messaging
- Conversation context must not grant access to an entity the member is no longer authorized to view

## Implementation Rule

Lifecycle transitions should be centralized in domain logic or database-enforced constraints where practical

UI controls must reflect valid transitions but are not the source of truth for transition legality
