# Agency starter
This starter template contains a simple agent with a single tool to check the weather.

1. Install dependencies:

```bash
pnpm install
```

2. Set the openai api key:

```bash
export OPENAI_API_KEY=your_api_key_here
```

3. See if it works:

Run it directly:
```bash
npx agency lib/main.agency

# or this works too
pnpm run agency lib/main.agency
```

Or build and run the index.js file, which runs the agent through typescript code
```bash
pnpm run build
pnpm run start
```

## VS Code extension

https://github.com/egonSchiele/agency-vscode-extension