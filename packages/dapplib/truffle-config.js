require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth random common hunt inhale forget gather'; 
let testAccounts = [
"0xa52853ccbe4edda9a42296dfe5f40321e5d5c89b3434b450c0f1e5b8d92c88a2",
"0x239f4ab1244e655bc94836576a05160daece4bf569255c61ef3241560fd1a1ac",
"0x0334edc87e51b2ecb12c17092ec045bc45454cc91199063085f1daab073835aa",
"0x1caf7ae31ddda20fc58ad375cb91ec31884b7f9efb91e5ff3186aef99a421a65",
"0xa6c298d19c90fccbac99760cdada5ed50780172725992e87870f0d68d4522f5e",
"0xa8f891db8d8b585549cc9435be164a79a06d1104e57320f5d0a20524bb0a7e21",
"0x95a13383623884e8d3c4a63a9c572530c08c1004c33f0903aba9106e308e47c8",
"0x9069284891fac72898139606333d8452fd916c6a5a7a28f221f5036c0fd18d92",
"0x85dd9ad07f092c751193b6bdd7a4f9aa1fba2c8852139e6f7d158d52c4452f0e",
"0x3d99f0975799625b3f03b290a6f2fdcc4ff006e85c8d746f562f97abe75036b9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


