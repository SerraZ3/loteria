const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../compile");

let loteria;
let contas;

beforeEach(async () => {
  contas = await web3.eth.getAccounts();

  loteria = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: contas[0], gas: "1000000" });
});
describe("Contrato Loteria - 01", () => {
  it("Deploy a contract", () => {
    assert.ok(loteria.options.address);
  });
});
