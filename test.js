const assert = require('assert');
const { greet } = require('./index');
assert.strictEqual(greet('Ada'), 'Hello, Ada, from aurora-api');
console.log('ok');
