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
describe("Contrato Loteria - 02", () => {
  it("Deploy a contract", () => {
    // console.log(inbox);
    assert.ok(loteria.options.address);
  });
  it("Permite que uma conta seja adicionada", async () => {
    await loteria.methods.jogar().send({
      from: contas[0],
      value: web3.utils.toWei("0.2", "ether")
    });

    const jogadores = await loteria.methods.getJogadores().call({
      from: contas[0]
    });

    assert.equal(contas[0], jogadores[0]);

    assert.equal(1, jogadores.length);
  });
});
