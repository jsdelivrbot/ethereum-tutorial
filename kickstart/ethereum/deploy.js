const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'welcome flower mom employ slab ugly scale wine wise correct thunder document',
  'https://rinkeby.infura.io/kBXF1IajToIwujOs7NKa'
);

const web3 = new Web3(provider);

const deploy = async () => {
  accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account: ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy( {data: compiledFactory.bytecode } )
    .send({ from: accounts[0], gas: '1000000' });

  console.log('Contract deployed to ', result.options.address)
};

deploy();