import Image from 'next/image'
import React from 'react'
import { HeaderText } from '../../styles/Components.styled'
import { FrontEndContainer, FrontEndContent, FrontEndHeader, FrontEndTerminal, FrontEndText } from './FrontEnd.styled'

const FrontEndComponent = () => {
  return (
    <FrontEndContainer>
        <FrontEndContent>
            <FrontEndHeader>FRONT-END</FrontEndHeader>
            <FrontEndText>    
              For front-end part of my projects I use 
              React.js, Next.js, Styled-components, Redux, GraphQL, ethers.js, Apollo Client. 
              I can build complex web-applications from scratch with state logic, authentication and authorization strategies, connected to Blockchains or a traditional server API.
              I deploy my web-applications on Vercel or Amazon EC2.
            </FrontEndText>
        </FrontEndContent>

        <FrontEndTerminal>
          <Image src="/frontEnd.svg" quality={100} width={1200} height={850}/>
        </FrontEndTerminal>
    </FrontEndContainer>
  )
} 

export default FrontEndComponent