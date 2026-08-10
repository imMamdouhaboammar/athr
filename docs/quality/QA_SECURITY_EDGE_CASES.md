# AthR QA, Security and Edge Cases

## 1. Quality Definition

A feature is not complete because the happy path renders

A feature is complete when:

- Permissions are correct
- Mobile works
- Empty state exists
- Loading state exists
- Error state exists
- Keyboard interaction works
- Important behavior is tested
- Realistic content has been tested
- The screen follows the approved visual direction

## 2. Authentication

Test:

- Signup
- Login
- Logout
- Session restore
- Expired session
- Protected route redirect
- Authenticated user opening auth pages
- Partial onboarding resume
- Deleted or disabled account behavior

Security checks:

- Never trust a client-provided user ID for ownership
- Server and database authorization must use the authenticated identity
- Sensitive mutations must fail when no valid session exists

## 3. Profiles

Test:

- Create profile
- Update own profile
- Read public profile
- Username uniqueness
- Username normalization
- Username change
- Missing avatar
- Very long headline
- Empty optional fields
- Hidden profile state if supported

Security checks:

- User A cannot update User B profile
- Private fields do not appear in public responses

## 4. Taxonomy

Test:

- Specialty selection
- Skill selection
- Duplicate selections
- Removed or inactive taxonomy item
- Empty taxonomy state
- Search and filtering by taxonomy

Data checks:

- Composite unique constraints prevent duplicate joins
- Inactive taxonomy values remain safe for historical records

## 5. Availability

Test:

- Available now
- Limited availability
- Booked
- Hours per week omitted
- Earliest start date in future
- Availability update
- Stale availability display behavior later

## 6. Portfolio Projects

Test:

- Create draft
- Autosave
- Reload draft
- Edit draft
- Publish
- Edit published project
- Archive
- Delete where allowed
- Preview
- Public read
- Private draft rejection

Edge cases:

- Very long project title
- Missing client name
- Hidden client name
- No metrics
- No collaborators
- Many collaborators
- Many media assets
- One media asset
- Broken external link
- Partial upload failure
- Upload retry
- Large file rejection
- Unsupported file type
- Deleted media asset
- Reordering under poor connection
- Cover asset deleted

Security checks:

- User A cannot read User B draft
- User A cannot update User B project
- Storage path ownership is validated
- Published visibility does not expose hidden fields

## 7. Portfolio Metrics

Test:

- Numeric metric
- Text result
- Percentage
- Currency
- Hidden metric
- Self-reported metric
- Client-verified metric
- Removing a metric

Integrity checks:

- Client verification state cannot be set by the project owner alone
- Hidden values do not leak through API payloads

## 8. Collaborators

Test:

- Add collaborator
- Duplicate collaborator request
- Confirm
- Reject
- Remove
- Project owner changes collaborator role
- Collaborator account deleted

Security checks:

- Only the tagged collaborator can confirm their own request
- A user cannot confirm another user's relationship
- Rejected relationships do not appear as confirmed

## 9. Search and Discovery

Test:

- Empty query
- One-word query
- Long natural-language query
- Specialty filter
- Skill filter
- Industry filter
- Market filter
- Availability filter
- Language filter
- Combined filters
- No results
- Pagination
- Removed profile
- Private project exclusion

Quality checks:

- Relevant work appears with people results
- Search does not rank by follower count as the dominant signal
- Result cards remain usable with long headlines and missing images

## 10. Follows and Saves

Test:

- Follow
- Unfollow
- Duplicate follow prevention
- Save person
- Save work
- Save opportunity
- Unsave
- Duplicate save prevention
- Target deleted after save

Security checks:

- Saves remain private to their owner

## 11. Work Feed

Test each post type:

- Case Study
- Breakdown
- Teardown
- Experiment
- Availability
- Collaboration request
- Opportunity

Edge cases:

- Deleted author
- Deleted referenced project
- Hidden opportunity
- Blocked user
- Empty feed
- Pagination
- Long body text
- Missing media

## 12. Opportunities

Test:

- Create draft
- Edit draft
- Publish
- Close
- Archive
- Read public opportunity
- Save
- Invite specialist

Edge cases:

- Missing optional budget
- Start date changes
- Owner account deleted
- Company removed
- Specialty becomes inactive
- Opportunity closes while user is viewing it

Security checks:

- Only authorized owner can edit or close
- Draft opportunities do not appear publicly

## 13. Applications

Test:

- Submit
- Attach relevant portfolio projects
- Withdraw
- Shortlist
- Reject
- Accept
- Duplicate submission
- Apply after opportunity closed
- Applicant deletes linked portfolio project

Security checks:

- Database unique constraint prevents duplicate application
- Applicant sees only their own application unless authorized otherwise
- Opportunity owner sees applications only for opportunities they own
- Other users cannot inspect private application notes

## 14. Invites

Test:

- Send invite
- Receive invite
- Accept or respond according to final product rules
- Duplicate invite behavior
- Invite after opportunity closes
- Recipient blocks sender

## 15. Messaging

Test:

- Create contextual conversation
- Send message
- Receive realtime message
- Reload conversation
- Read state
- Reconnect after network interruption
- Context project deleted
- Context opportunity closed
- Empty message rejection
- Long message handling

Security checks:

- Non-member cannot read conversation
- Non-member cannot send message
- Blocked relationship follows product policy consistently
- Private message bodies are not exposed in logs

## 16. Notifications

Test:

- New message
- Opportunity invite
- Application state change
- Collaborator confirmation request
- Recommendation received
- Mark read
- Deleted referenced entity

Noise rule:

Do not notify users for low-value vanity interactions unless product evidence later justifies it

## 17. Recommendations

Test:

- Create recommendation
- Skill-specific recommendation
- Link project
- Remove or hide according to final policy
- Duplicate recommendation policy
- Author account deleted

Security and integrity:

- Recipient cannot alter author content
- Recommendation state transitions are controlled

## 18. Blocks and Reports

Test:

- Block user
- Unblock user
- Report profile
- Report portfolio project
- Report message or conversation where supported
- Report opportunity
- Duplicate report behavior

Cross-product block checks:

- Search visibility
- Feed visibility
- Messaging
- Collaborator requests
- Invites
- Recommendations

The behavior must be explicit and consistent

## 19. Storage

Test:

- Valid image upload
- Valid video upload
- Invalid file type
- Oversized file
- Interrupted upload
- Retry
- Delete
- Unauthorized path access
- Public and private asset policies

## 20. Responsive QA

Required viewport coverage should include:

- Small mobile
- Standard mobile
- Tablet
- Laptop
- Large desktop

Check:

- Portfolio media
- Search filters
- Profile actions
- Messaging
- Opportunity forms
- Builder controls
- Long content

Do not accept horizontal overflow unless intentional media behavior requires it

## 21. Accessibility QA

Check:

- Keyboard-only use
- Visible focus
- Logical tab order
- Form labels
- Validation announcements
- Dialog focus management
- Escape behavior
- Heading structure
- Contrast
- Reduced motion
- Touch target size
- Alt text or descriptions for meaningful media

## 22. Performance QA

Check:

- Feed pagination
- Search pagination
- Heavy portfolio media lazy loading
- Responsive image delivery
- Client JavaScript weight
- Slow database query paths
- N+1 reads
- Realtime subscription cleanup

## 23. Data Deletion and Account Lifecycle

Test:

- User deletes account
- Portfolio owner deleted
- Collaborator deleted
- Opportunity owner deleted
- Conversation participant deleted
- Recommendation author deleted

Define whether records are deleted, anonymized or retained before production launch

## 24. Abuse Cases

Explicitly consider:

- Portfolio theft
- Fake client identity
- Fake metric verification
- Spam opportunity posting
- Harassment in messages
- Unwanted collaborator tags
- Impersonation
- Link spam
- Malicious file upload
- Scraping patterns

## 25. Release Gate

Do not release the MVP publicly until:

- Critical RLS tests pass
- Draft portfolio leakage test passes
- Messaging membership tests pass
- Duplicate application prevention passes
- Upload ownership checks pass
- Block and report paths work
- Major mobile flows pass
- Keyboard navigation works on core flows
- No placeholder content remains in production UI
- Error monitoring is connected
- Core funnel events are measurable
