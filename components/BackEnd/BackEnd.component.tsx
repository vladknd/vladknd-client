import Image from 'next/image'
import React from 'react'
import { HeaderText } from '../../styles/Components.styled'
import { 
    BackEndContainer, 
    BackEndContent, 
    BackEndHeader, 
    BackEndTerminal, 
    BackEndText
} from './BackEnd.styled'

const BackEndComponent = () => {
  return (
    <BackEndContainer>
        <BackEndContent>
            <BackEndHeader>BACK-END</BackEndHeader>
            <BackEndText>
              As a back-end developer, I build server side applications using Express.js, PostgreSQL, PrismaORM, Apollo-server, JWT.
              I can build APIs with authentication and authorization strategies, connected to SQL or noSQL databases based on REST or GraphQL.
              I deploy my apps on Heroku or Amazon EC2.
            </BackEndText>
        </BackEndContent>
        <BackEndTerminal>
          <Image src="/backEnd.svg" width={900} height={900}/>
        </BackEndTerminal>
    </BackEndContainer>
  )
}

export default BackEndComponent