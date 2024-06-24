const app = require('./app');

async function main() {
    await app.listen(4200);
    console.log('server is running')
}

main();