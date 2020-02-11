require("dotenv").config();

const HDWalletProvider = require("truffle-hdwallet-provider");
//Provedor das carteiras que vamos usar
const Web3 = require("web3");
//Construtor do Web3
const { interface, bytecode } = require("./compile");
// Importar o codigo dos bytecodes e da interface

const provider = new HDWalletProvider(
  process.env.mnemonic,
  "https://rinkeby.infura.io/v3/c378d76542874a82a22a84b9ef07df74"
);

// Passamos dois argumentos, as palavras mnemonicas e o link da rede infura

const web3 = new Web3(provider);
// Enviamos para o Web3 o provider

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  //Recuperamos as contas
  console.log("Contas usadas para o deploy ", accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: "1000000", from: accounts[0] });
  console.log(interface);
  console.log("Contrato implementado em ", result.options.address);
};
deploy();
