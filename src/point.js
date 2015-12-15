#!/usr/bin/env babel-node

export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `new Point(${this.x}, ${this.y})`;
    }
}

if (require.main === module) {
    let pt = new Point(7,4);
    console.log(`My point: ${pt}`);
}
