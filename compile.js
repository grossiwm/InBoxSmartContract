const path = require('path');
const fs = require('fs');
const solc = require('solc');

/* Criaçāo de caminho para contrato a partir de de compile.js 
__dirname leva até diretório raíz da aplicaçāo */
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

/* Para ler o conteúdo dos arquivos com FileSync module */
const source = fs.readFileSync(inboxPath,'utf8');

/* Para compilar */ 
module.exports = solc.compile(source, 1).contracts[':Inbox']; 