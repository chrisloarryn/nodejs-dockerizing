const app = require('./app.js');
const portDev = 3000;


/**
 * async function main()
 */
async function main() {
    await app.listen(portDev);
    console.log(`server on port ${portDev} is running`);
}

main();