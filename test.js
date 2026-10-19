const assert = require('assert');
const { greet, health } = require('./index');
assert.strictEqual(greet('Ada'), 'Hello, Ada, from aurora-api');
assert.deepStrictEqual(health(), { status: 'ok', service: 'aurora-api' });
console.log('ok');
