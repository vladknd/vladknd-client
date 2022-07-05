import Image from 'next/image'
import React from 'react'
import { 
  BlockchainContainer, 
  BlockchainHeader, 
  BlockchainTerminal, 
  BlockchainText, 
  BlockchianContent 
} from './Blockchain.styled'

const BlockchainComponent = () => {
  return (
    <BlockchainContainer>
        <BlockchianContent>
            <BlockchainHeader>BLOCKCHAIN</BlockchainHeader>
            <BlockchainText>
                On the Blockchain part of the projects I use Solidity with Hardhat for writing smart-contracts. I use TheGraph Protocol’s subgraphs for indexing on-chain data.
                I can build ERC20, ERC721 (Upgradeable) smart contracts as well as custom ones.
                I deploy my smart-contracts on Polygon chains.
            </BlockchainText>
        </BlockchianContent>
        <BlockchainTerminal>
            <Image src="/blockchain.svg" width={600} height={400}/>
        </BlockchainTerminal>
    </BlockchainContainer>
  )
}

export default BlockchainComponent