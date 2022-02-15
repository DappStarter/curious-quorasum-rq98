require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note shift pupil include argue tail swim'; 
let testAccounts = [
"0x6a806399c1907c719261c349f613d49f00d3d011df44a698da2e1c669cadeae4",
"0x2eebcd9fcdcbbc222957488be3f762d9d18297b64664ca134fc235da501088b6",
"0x8616e8da24a110432494f69d68df53b763fa81837ac833a2e5955bbf873ce8e7",
"0x5142b6ff3e73e2866f5d83f056747f5af91885bf3e3ccde490cb4815c0ffca07",
"0xc5bc6a2797acab43a1bc70d8e46cda3acce7ddfe7f3d94ed6be461f70ed74b51",
"0x06b9d9e9720957e72a6f16cd646ca4eaee53e6308f39f990ffb9177e726f34b5",
"0x4044a44753fcf2d93d33b033bf436c8dc270ecaf9cd42177110f49f9ecabee3c",
"0xefd0d96573d457714f7437fe5827ffd4d66ad0e80009a1765035e4e59b040315",
"0x1b781562d2c1761676fbabebf415f93e3b6419214991b3e06d480047d55c4e24",
"0x7fcf94315c75cb4753d05d0746f95052ac6347df99c17b7581b05b6d44fb5a88"
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


