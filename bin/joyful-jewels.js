#!/usr/bin/env node

require('child_process').execFile('nw', process.argv.slice(2), function (error, stdout, stderr) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log(stdout);
    console.log(stderr);
});
