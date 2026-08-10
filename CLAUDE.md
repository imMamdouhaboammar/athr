# Claude Code Guidance

Before changing implementation code, read [`AGENTS.md`](AGENTS.md) and execute the full pre-coding gate in [`Starter-Prompt.md`](Starter-Prompt.md)

Do not code until the starter workflow reports:

```text
DESK STATUS: READY
```

The coding desk requires `find-skills`, Pack82 at 82/82, the 21st CLI, `npx @21st-dev/cli install-skill`, relevant process skills, repository toolchain checks, and planned verification

For UI work, connect 21st.dev using [`docs/agents/21ST_AGENT_SETUP.md`](docs/agents/21ST_AGENT_SETUP.md), then follow [`docs/components/21ST_COMPONENT_WORKFLOW.md`](docs/components/21ST_COMPONENT_WORKFLOW.md)

Use 21st MCP or CLI to search before custom UI implementation

Keep 21st credentials outside tracked files and use `API_KEY_21ST`, OAuth, or local CLI login
