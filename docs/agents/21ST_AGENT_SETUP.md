# 21st.dev Agent Setup

This is the single source of truth for connecting AthR coding agents to 21st.dev

Canonical endpoint:

`https://21st.dev/api/mcp`

Canonical UI sourcing workflow:

[`../components/21ST_COMPONENT_WORKFLOW.md`](../components/21ST_COMPONENT_WORKFLOW.md)

## Mandatory Skills Bootstrap

Installing the 21st skills is a required AthR bootstrap step for coding agents that work on UI

Run this from the project environment before UI implementation:

```bash
npx @21st-dev/cli install-skill
```

Treat this as mandatory, not optional setup

The required readiness order is:

```text
install 21st skills
-> establish CLI or MCP access
-> search existing AthR and 21st components
-> inspect candidate source
-> install or retrieve
-> adapt to AthR
-> verify
```

Do not hard-code or assume the skill installation destination; let the current 21st CLI install the supported skills for the active agent environment

An agent should rerun the skills bootstrap when the 21st skills are absent, the environment is newly provisioned, or the installed 21st tooling has been reset

A UI task is not ready to implement until the agent has either installed the skills or documented a concrete infrastructure failure preventing the command from running

## Security Rule

Use `API_KEY_21ST` for non-OAuth clients and automation

Never commit a `21st_sk_...` credential, paste it into tracked config, hard-code it in scripts, or include it in examples

Local browser login, OAuth, environment variables, and secret stores are the accepted credential paths

Repository examples use placeholders only

## Project CLI

Install the official CLI once and sign in locally:

```bash
npm i -g @21st-dev/cli
21st login
```

Then ensure the agent skills are installed:

```bash
npx @21st-dev/cli install-skill
```

`21st login` opens a browser and saves the local session outside the repository

Verify the CLI before UI work:

```bash
21st whoami
21st search "professional social profile"
```

The expected working loop is:

```text
skills -> search -> inspect -> install -> adapt -> verify -> record in Component Bank
```

Useful commands include:

```bash
21st search "social post card"
21st search "portfolio gallery"
21st add <scope>/<component-name>
```

Use the exact component identifier returned by 21st rather than guessing it

## CI and Scripts

Automation must not run interactive login

Provide the key through the environment or CI secret store:

```bash
export API_KEY_21ST="<secret-from-your-secret-store>"
```

Bootstrap the skills in newly provisioned agent environments before UI work:

```bash
npx @21st-dev/cli install-skill
```

Then use the CLI's API-key path where needed:

```bash
21st search "profile header" --api-key "$API_KEY_21ST"
```

If a command reads `API_KEY_21ST` automatically, prefer the environment variable rather than duplicating a flag across scripts

## Claude Code

### Required bootstrap

```bash
npx @21st-dev/cli install-skill
```

### Preferred project setup

Let the official CLI write or merge the project MCP config:

```bash
npx @21st-dev/cli init --client claude --write
```

This is preferred because the CLI owns the current client config shape and can preserve existing MCP entries

### Manual registration

For a local Claude Code installation where the credential is already exported:

```bash
export API_KEY_21ST="<secret-from-your-secret-store>"
claude mcp add --transport http 21st https://21st.dev/api/mcp --header "x-api-key: $API_KEY_21ST"
```

Treat any resulting local config containing an expanded credential as secret and untracked

### Verify

```bash
claude mcp list
```

The `21st` server must appear as connected before relying on MCP tools

Then ask Claude Code to search 21st for a real UI requirement and confirm 21st search tools are used before custom UI code is written

### Optional Claude Code plugin

When the 21st Claude Code plugin distribution is preferred:

```text
/plugin marketplace add 21st-dev/claude-code-plugin
/plugin install 21st@21st
```

Use either the plugin route or direct MCP setup according to the active Claude Code environment

Do not keep duplicate conflicting 21st server registrations

## Claude Desktop

Claude Desktop should use the remote connector flow where available

1. Open Settings
2. Open Connectors
3. Add a custom connector
4. Name it `21st`
5. Set the server URL to `https://21st.dev/api/mcp`
6. Click Add, then Connect
7. Complete 21st OAuth in the popup
8. Approve the requested access

This path does not require placing an API key in a repository file

The repository-level coding-agent environment should still run the mandatory skills bootstrap before implementation work:

```bash
npx @21st-dev/cli install-skill
```

Verify by starting a chat and asking Claude to search 21st; the 21st connector tools should be available

### Advanced stdio bridge

For environments that only accept stdio-style desktop config, use `mcp-remote` as a local bridge:

```json
{
  "mcpServers": {
    "21st": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://21st.dev/api/mcp"
      ]
    }
  }
}
```

The bridge performs the remote authentication flow; do not embed a repository API key into this JSON

## Codex

### Required bootstrap

```bash
npx @21st-dev/cli install-skill
```

### Register with an environment-backed credential

```bash
export API_KEY_21ST="<secret-from-your-secret-store>"
codex mcp add 21st --url https://21st.dev/api/mcp --bearer-token-env-var API_KEY_21ST
```

### Equivalent Codex config

Use the user-level Codex config rather than committing credentials to this repository:

```toml
[mcp_servers.21st]
url = "https://21st.dev/api/mcp"
bearer_token_env_var = "API_KEY_21ST"
```

### Verify

```bash
codex mcp list
```

Or inspect `/mcp` inside Codex and confirm `21st` is registered

Before implementing AthR UI, Codex should search 21st and record the selected component or screen in the Component Bank workflow

### Optional Codex plugin

```text
codex plugin marketplace add 21st-dev/codex-plugin
```

Then open `/plugins` in Codex and install `21st`

Use the plugin route when it is supported by the active Codex environment; otherwise use the direct MCP registration above

## Generic MCP Client

Any client that supports streamable HTTP can connect to the canonical endpoint

Bootstrap the 21st skills in the coding environment first:

```bash
npx @21st-dev/cli install-skill
```

Representative config:

```json
{
  "mcpServers": {
    "21st": {
      "url": "https://21st.dev/api/mcp",
      "headers": {
        "x-api-key": "${API_KEY_21ST}"
      }
    }
  }
}
```

Environment interpolation syntax varies by client

If the client does not expand `${API_KEY_21ST}`, inject the header through that client's secret mechanism rather than replacing the placeholder in a tracked file

Bearer authentication is also supported by clients that prefer an Authorization header

### Verify

List the MCP tools from the client and confirm 21st discovery/retrieval tools are visible

## Agent Runtime Rule

For every AthR UI task:

1. Confirm `npx @21st-dev/cli install-skill` has been run for the active coding environment
2. Confirm the existing Component Bank has been searched
3. Confirm 21st CLI or MCP access is available
4. Search 21st before custom implementation
5. Inspect real candidate source and dependencies
6. Install or retrieve the strongest suitable candidate
7. Adapt it to AthR domain behavior
8. Apply Soft Pop and AthR semantic tokens
9. Preserve useful accessibility and responsive behavior
10. Remove demo content and irrelevant dependencies
11. Record source, identifier, install method, dependencies, and adaptations in the Component Bank
12. Run typecheck, build, accessibility, and responsive verification when the runtime exists

If MCP is unavailable, use the 21st CLI

If the CLI or skill bootstrap is unavailable, document the infrastructure blocker rather than silently skipping the requirement

## Agent Completion Evidence

A completed UI task should report:

```text
21st skills installed: yes
21st access: MCP / CLI
21st search performed: yes
Candidate selected: <identifier or URL>
Install method: <21st add / registry / retrieval>
Primitive path: <path>
AthR composition: <path if applicable>
Dependencies added: <list>
Soft Pop applied: yes
Accessibility review: pass/fail
Responsive review: pass/fail
Typecheck: pass/fail/not available
Build: pass/fail/not available
```

## Credential Incident Rule

If a real 21st API key is accidentally committed, pasted into a public artifact, or written to tracked config:

1. Remove it from the tracked file immediately
2. Rotate or revoke the exposed key in 21st
3. Replace the usage with `API_KEY_21ST`
4. Check the relevant Git history and CI logs for further exposure

Completion criterion: every active coding-agent environment has the 21st skills installed and can reach 21st through CLI or MCP without any 21st secret living in tracked repository content
