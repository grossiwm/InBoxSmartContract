const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');
const INITIAL_STRING = 'HELLO WORLD';

let accounts;
let inbox;


beforeEach(async () => {
    //get all accounts list
    accounts = await web3.eth.getAccounts();

    //use one of them to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: [INITIAL_STRING]})
            .send({ from: accounts[0], gas: "1000000"});
})


describe('Inbox', () => {
    it('deploys a contract', () => {
       assert.ok(inbox.options.address);
       //console.log(inbox);
    });

    it('Has a defualt message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message,INITIAL_STRING);
    });

    it('Can change the message', async () => {
        await inbox.methods.setMessage("Tchau").send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert(message, "Tchau");
    });
})