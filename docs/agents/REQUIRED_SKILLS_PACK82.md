# AthR Required Skills Pack82

This file is the canonical manifest for the **82 required agent skills** that must be available before an agent begins coding work on AthR.

The pack is mandatory for the coding desk. It is not a recommendation list.

## Bootstrap `find-skills`

Install the official `find-skills` skill first:

```bash
npx skills add vercel-labs/skills@find-skills -g -y
```

The installed skill teaches the agent to discover and verify skills with the Skills CLI.

Before installing any pack entry, verify the exact skill and owner rather than trusting a fuzzy name match:

```bash
npx skills find "<skill-name>" --owner <owner>
```

Then install the exact pinned source from this manifest:

```bash
npx skills add <owner/repo@skill> -g -y
```

Do not silently substitute a similarly named skill from another source.

If a required skill cannot be found or installed, stop the coding-desk setup and report the exact blocker.

## Required Pack82

### Impeccable

1. `pbakaus/impeccable@impeccable`
2. `pbakaus/impeccable@teach-impeccable`
3. `pbakaus/impeccable@polish`
4. `pbakaus/impeccable@critique`
5. `pbakaus/impeccable@audit`
6. `pbakaus/impeccable@animate`
7. `pbakaus/impeccable@adapt`
8. `pbakaus/impeccable@clarify`
9. `pbakaus/impeccable@optimize`
10. `pbakaus/impeccable@colorize`
11. `pbakaus/impeccable@bolder`
12. `pbakaus/impeccable@delight`
13. `pbakaus/impeccable@distill`
14. `pbakaus/impeccable@quieter`
15. `pbakaus/impeccable@typeset`

### Design Taste and UI

16. `leonxlnx/taste-skill@design-taste-frontend`
17. `leonxlnx/taste-skill@stitch-design-taste`
18. `leonxlnx/taste-skill@gpt-taste`
19. `leonxlnx/taste-skill@design-taste-frontend-v1`
20. `google-labs-code/stitch-skills@taste-design`
21. `leonxlnx/taste-skill@high-end-visual-design`
22. `leonxlnx/taste-skill@minimalist-ui`
23. `leonxlnx/taste-skill@full-output-enforcement`
24. `leonxlnx/taste-skill@industrial-brutalist-ui`
25. `leonxlnx/taste-skill@brandkit`
26. `vercel-labs/agent-skills@web-design-guidelines`
27. `vercel/components.build@building-components`
28. `nextlevelbuilder/ui-ux-pro-max-skill@ui-ux-pro-max`
29. `anthropics/skills@brand-guidelines`
30. `uizze.com/ui-radar@ui-radar`
31. `expo/skills@building-native-ui`
32. `google-labs-code/stitch-skills@shadcn-ui`
33. `uizze.com/anti-ui-slop@anti-ui-slop`

### Anti-Slop and Output Quality

34. `hardikpandya/stop-slop@stop-slop`
35. `worldwonderer/oh-story-claudecode@story-deslop`
36. `petergyang/no-ai-slop@no-ai-slop`
37. `cursor/plugins@deslop`
38. `yetone/kill-ai-slop@kill-ai-slop`
39. `brianlovin/claude-config@deslop`
40. `samber/cc-skills@frontend-design-deslop`
41. `juliusbrussee/skills@fuck-slop`
42. `yeachan-heo/oh-my-claudecode@ai-slop-cleaner`
43. `github/awesome-copilot@anti-ui-slop`
44. `rand/cc-polymath@anti-slop`

### Matt Pocock Engineering Skills

45. `mattpocock/skills@setup-matt-pocock-skills`
46. `mattpocock/skills@ask-matt`
47. `mattpocock/skills@grill-me`
48. `mattpocock/skills@grill-with-docs`
49. `mattpocock/skills@improve-codebase-architecture`
50. `mattpocock/skills@tdd`
51. `mattpocock/skills@handoff`
52. `mattpocock/skills@triage`
53. `mattpocock/skills@teach`
54. `mattpocock/skills@to-prd`
55. `mattpocock/skills@domain-modeling`
56. `mattpocock/skills@grilling`
57. `mattpocock/skills@to-issues`
58. `mattpocock/skills@diagnosing-bugs`
59. `mattpocock/skills@codebase-design`

### Superpowers

60. `obra/superpowers@using-superpowers`
61. `obra/superpowers@brainstorming`
62. `obra/superpowers@systematic-debugging`
63. `obra/superpowers@writing-plans`
64. `obra/superpowers@finishing-a-development-branch`
65. `obra/superpowers@using-git-worktrees`
66. `obra/superpowers@dispatching-parallel-agents`
67. `obra/superpowers@writing-skills`
68. `obra/superpowers@receiving-code-review`
69. `obra/superpowers@subagent-driven-development`
70. `obra/superpowers@verification-before-completion`
71. `obra/superpowers@executing-plans`
72. `obra/superpowers@test-driven-development`
73. `obra/superpowers@requesting-code-review`

### Mobile and Responsive UI

74. `sickn33/antigravity-awesome-skills@mobile-design`
75. `ceorkm/mobile-app-ui-design@mobile-app-ui-design`
76. `dylantarre/animation-principles@mobile-touch`
77. `josiahsiegel/claude-plugin-marketplace@tailwindcss-mobile-first`

### Browser, Automation, and Guardrails

78. `stablyai/orca@computer-use`
79. `vercel-labs/agent-browser@agent-browser`
80. `browser-act/skills@browser-act`
81. `browserbase/skills@browser`
82. `amelnagdy/guard-skills@clean-code-guard`

## Installation Procedure

For each entry above:

1. Parse its `owner`, `repo`, and `skill`.
2. Run `npx skills find "<skill>" --owner <owner>`.
3. Confirm the result resolves to the intended source.
4. Install the exact manifest entry with `npx skills add <owner/repo@skill> -g -y`.
5. Record failures immediately.
6. Never replace a missing entry with an unapproved similarly named package.

After the pack is installed:

```bash
npx skills check
```

If updates are intentionally accepted:

```bash
npx skills update
```

Do not update the pack during an unrelated coding task without reviewing the resulting behavior changes.

## Skill Selection Rule During Work

Installing Pack82 does not mean loading all 82 skills into context for every task.

Before each coding phase:

1. Identify the current job.
2. Use `find-skills` when an additional or more specific capability may exist.
3. Invoke the smallest relevant set of installed skills.
4. Process skills such as brainstorming, TDD, debugging, planning, and verification take precedence when their trigger applies.
5. Design skills should be used intentionally for the UI phase, not treated as decorative prompt modifiers.

## Completion Gate

The skills gate passes only when:

- `find-skills` is installed
- every Pack82 entry has been checked against its intended owner/source
- every required entry is installed or an explicit blocker has been raised
- `npx skills check` completes successfully enough to inspect installed state
- the agent can identify which skills it will invoke for the current task

**No coding starts while this gate is unresolved.**
