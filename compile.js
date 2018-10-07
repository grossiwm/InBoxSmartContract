const path = require('path');
const fs = require('fs');
const solc = require('solc');

//Creates route to compile.js
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

//To read file
const source = fs.readFileSync(inboxPath,'utf8');

//To compile
module.exports = solc.compile(source, 1).contracts[':Inbox']; 