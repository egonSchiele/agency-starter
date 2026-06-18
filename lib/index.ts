import { agent } from "./main.js";

async function main() {
    const result = await agent(10);
    console.log("Now printing the result through TypeScript:", result.data);
}

main();