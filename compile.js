const path = require('path'); // linhas para indicar o caminho onde o arquivo será lido
const fs = require('fs');    // e garantir a compatibilidade de sistemas operacionais
const solc = require('solc');

const LoteriaPath = path.resolve(__dirname, 'contracts', 'Loteria.sol');
const source = fs.readFileSync(LoteriaPath, 'utf8');

//solc.compile(source,1); // numéro de contratos a serem complilados.

//console.log(solc.compile(source,1)); // gera o log para investigação

module.exports=solc.compile(source,1).contracts[':Loteria']; // pedimos apenas
//o nosso contrato para exportação
