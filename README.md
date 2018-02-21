# MCCP
A try for the ERC808 protocol for ethereum

## Before working

this is a simple truffle webpack project launch with : `truffle unbox webpack`

and a new contract `TokenBTU` wich is a simple ERC20 ethereum contracts.

use git clone to load this repo and do `npm install`

## First part

install testrpc `npm install -g ethereumjs-testrpc`

launch testrpc with `testrpc`

launch `truffle compile` `truffle migrate`

Yours contracts are in your private blockchain now (port 8545).

verifiy in `app/javascript/app.js` that web3 is checking on port 8545 and not on port 9545.

You can launch a simply DAPP with `npm run dev` wich is on the port 8080
