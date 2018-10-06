const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
    //pegue lista de todas as contas
    accounts = await web3.eth.getAccounts();

    //use uma dessas contas para dar o deploy no contrato
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ["Hello World"]})
            .send({ from: accounts[0], gas: "1000000"});
})

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(inbox);
    })
})