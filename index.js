#!/usr/bin/env node
const { Wallet } = require('ethers')
const privkey = process.argv[2]
if (!privkey) {
  console.log(`Usage: ${process.argv[1]} <private_key>`)
  process.exit(1)
}
const wallet = new Wallet(privkey)
console.log(wallet.address)
