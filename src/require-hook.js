#!/usr/bin/env node

// The advantage of a require hook is that
// you can start via normal Node.js

require("babel-register")({
    presets: [
        "es2015-node5"
    ],
});

var point = require('./point');

console.log('Case in point: ' + new point.Point(8, 2));
