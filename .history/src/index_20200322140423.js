import { listen } from './index.js';
const portDev = 3000;

async function main() {
    await listen(portDev);
    console.log(`Server ${portDev} is running.`);
}

main();