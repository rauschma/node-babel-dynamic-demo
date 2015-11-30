/* global suite */
/* global test */

import assert from 'assert';

import { Point } from '../src/point';


suite('Point');

test('Instance properties', () => {
    let p = new Point(1, 5);
    assert.strictEqual(p.x, 1);
    assert.strictEqual(p.y, 5);
});
