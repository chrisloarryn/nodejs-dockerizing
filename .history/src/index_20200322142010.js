const app = require('./app.js');
const portDev = 3000;

async function main() {
    await app.listen(3000);
    console.log('server on port 3000');
}

