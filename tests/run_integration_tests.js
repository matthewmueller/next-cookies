const child_process = require('child_process');
const path = require('path');

const TEST_APP_DIR = path.join(__dirname, 'test-app');

// This is kind of dumb, but we need to run two separate processes for the tests: a next.js server and the nightwatch tester
// We also have to remember to shut down the server after the tests finish - that's the part that requires orchestration.

// first install the deps in the test app
child_process.spawnSync("npm", ["ci"], {
    stdio: "inherit",
    cwd: TEST_APP_DIR,
});

// next link the module so that this copy is used in the test app
child_process.spawnSync("npm", ["link"], {stdio: "inherit"});
child_process.spawnSync("npm", ["link", "next-cookies"], {
    stdio: "inherit", 
    cwd: TEST_APP_DIR,
});


const server = child_process.spawn("npm", ["run", "test-server"], {
    stdio: 'inherit',
    cwd: TEST_APP_DIR,
});
let tests = null;

server.on('exit', (code, signal) => {
    if (tests) {
        tests.kill();
    }
    if (code) {
        console.error("test server exited with code", code)
        process.exit(code);
    }
});

// todo: check the server output to know when to start the tests instead of this arbitrary wait.
setTimeout(() => {
    console.log("starting tests");
    tests = child_process.spawn("npx", ["nightwatch"], {stdio: 'inherit'});
    tests.on('exit', (code, signal) => {
        server.kill();
        if (code) {
            console.error("tests exited with code", code);
            process.exit(code);
        }
    })
}, 5000);