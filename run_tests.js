const child_process = require('child_process');

// This is kind of dumb, but we need to run two separate processes for the tests: a next.js server and the nightwatch tester
// We also have to remember to shut down the server after the tests finish - that's the part that requires orchestration.

const server = child_process.spawn("npm", ["run", "test-server"], {stdio: 'inherit'});
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