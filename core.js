const path = require('path');
const util = require('util');
const v8 = require('v8');

console.log(path.basename(__filename));
util.log(path.join(__dirname, 'www', 'files', 'uploads'));
util.log(v8.getHeapStatistics());