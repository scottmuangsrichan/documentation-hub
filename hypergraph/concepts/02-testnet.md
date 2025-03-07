---
title: TestNet
slug: /testnet
sidebar_label: TestNet
hide_table_of_contents: false
---
<intro-end />

Metagraph developers can use testnet as an experimental environment designed for testing metagraphs against the newest protocol updates before they are rolled out to integrationnet. Unlike the more stable integrationnet, the testnet provides a platform for developers to experiment with the latest features, enabling them to validate how their metagraphs will interact with upcoming changes.

## Connecting to TestNet
The following urls can used to access testnet: 
- __Block Explorer API__: https://be-testnet.constellationnetwork.io
- __Global L0 API__: https://l0-lb-testnet.constellationnetwork.io
- __DAG L1 API__: https://l1-lb-testnet.constellationnetwork.io

See [Available APIs](/hypergraph/global-apis) for detailed information on available endpoints. 

## Faucet
Constellation hosts a testnet faucet which distributes testnet DAG for testing purposes. This coin has no value and can only be used on the testnet. The faucet provides small amounts of DAG at each request with rate limiting to prevent depletion of its DAG reserves. 

The faucet can be accessed at:
```
GET https://faucet.constellationnetwork.io/testnet/faucet/<YOUR WALLET ADDRESS>
```
