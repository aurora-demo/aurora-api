// Aurora api (demo)
function greet(name) {
  return `Hello, ${name}, from aurora-api`;
}
function health() {
  return { status: 'ok', service: 'aurora-api' };
}
module.exports = { greet, health };
