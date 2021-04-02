require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remember unusual hover clock oil text'; 
let testAccounts = [
"0x05e742760ab8246fb04d8343ac58c24132998903ac31217c9a0410407f5d83f3",
"0x1174b94d6ac4030b9e5ef629d2520ac92a1de3b29239045441b52b5bb57b8dc2",
"0xf73d1ddc657feea7cc8b20a7c296c475b5acffb7ee604c79099280d3270f89c8",
"0xb3c5537bfe0ae6c5fa106dc80e6600db056dac3d54d2de36ec39f4caf84f9ee8",
"0x233846c8e312ba725e050e0aac02454d45b63212536fbeda863f909d50526da7",
"0x88f6bc41b64ec36b20ea023dc53587c48942cd364b369926fe50d9333bc11bad",
"0xc46bd3d7300cc6abc8df822ef4ed959303bfb53785e5b05753e174acb0a5d874",
"0x561322b59237870b488c0f2b45c4585c00947181206f0a63ff370fefe6176b7a",
"0xb31ab62d9d3b21c912a73e8046e9209238e400005f20674bb5e92f021e856972",
"0xe3be21d75842d264858f825acbeb9dee2d29012f17bf55c9e4c1a7d0c3794d40"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
