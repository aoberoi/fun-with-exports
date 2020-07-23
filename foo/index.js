// you might choose to destructure these assignments to the individual
// exported symbols.
const a = require('./a');
const b = require('./b');

// re-export
exports.a = a;
exports.b = b;
