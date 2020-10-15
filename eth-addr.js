#!/usr/bin/env node
const Web3 = require('web3')
const web3 = new Web3()
let privkey = process.argv[2]
if (!privkey) {
  console.log(`Usage: ${process.argv[1]} <private_key>`)
  process.exit(1)
}
if (!privkey.startsWith('0x')) {
  privkey = '0x' + privkey
}
const addr = web3.eth.accounts.privateKeyToAccount(privkey).address
console.log(addr)
