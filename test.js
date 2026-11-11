
const { add, subtract } = require('./app');

const assert = require('assert');

assert.strictEqual(add(10, 5), 15);
assert.strictEqual(subtract(10, 5), 5);

console.log("All tests passed");
