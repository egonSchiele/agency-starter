import { agent } from "./main.js";

async function main() {
    const result = await agent();
    console.log(result);
}

main();