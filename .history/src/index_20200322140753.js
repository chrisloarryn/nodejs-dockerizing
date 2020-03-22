const app = require('./index.js');
const portDev = 3000;

async function main() {
    await app.listen(portDev);
    console.log(`Server ${portDev} is running.`);
}

main().then((onfulfilled) => {
    console.log(onfulfilled)
}).catch(onrejected => console.log(onrejected));