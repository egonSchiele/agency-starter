import { agent } from "./main.js";

async function main() {
    const result = await agent(15);
    console.log(result.data);
}

main();