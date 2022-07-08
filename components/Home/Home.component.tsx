import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DarkBoxClick, LightBoxClick, Text } from '../../styles/Components.styled'
import { 
    HomeContainer, 
    HomeContentContainer, 
    HomeHeaderContainer, 
    HomeHeaderTexts, 
    HomeHeaderText, 
    HomeHeaderButtons, 
    SMButton, 
    SMButtons, 
    Resume, 
    Mail, 
    LightButtons, 
    LightButton, 
    HomeContentText 
} from './Home.styled'


const HomeHeader = () => {
    return (
        <HomeHeaderContainer pl={30}>
            <HomeHeaderTexts>
                <HomeHeaderText>FULL-STACK</HomeHeaderText>
                <HomeHeaderText>WEB3</HomeHeaderText>
                <HomeHeaderText>DEVELOPER</HomeHeaderText>
            </HomeHeaderTexts>
            <HomeHeaderButtons>
                <SMButtons>
                    <Link href="https://github.com/vladknd">
                        <SMButton mr={10} mb={10}>
                            <Image src="/github.svg" width={40} height={40}/>
                        </SMButton>
                    </Link>
                    
                    <Link href="https://www.linkedin.com/in/vlad-voznitsa-42134b135">
                        <SMButton mr={10} mb={10}>
                            <Image src="/linkedin.svg" width={40} height={40}/>
                        </SMButton>
                    </Link>
                </SMButtons>

                <Link href="https://drive.google.com/file/d/1ot6rnOJ0PNYelnPAZv8Hs25e_BHO8h9n/view?usp=sharing">
                    <Resume mr={10} mb={10}>
                        RESUME
                        <Image src="/download.svg" width={20} height={20}/>
                    </Resume>
                </Link>

                <Link href="https://mail.google.com/mail/u/0/?fs=1&to=voznitsa98@gmail.com&su=Job+offer&tf=cm">
                <Mail mr={10} mb={10}>
                    voznitsa98@gmail.com
                    <Image src="/send.svg" width={30} height={30}/>
                </Mail>
                </Link>
            </HomeHeaderButtons>
        </HomeHeaderContainer>
    )
}

const HomeContent = () => {
    return (
        <HomeContentContainer>
            <LightButtons>
                {/* <LightButton mr={10}>
                    EMPLOYERS
                </LightButton> */}

                {/* <LightButton>
                    CLIENTS
                </LightButton> */}
            </LightButtons>
            <HomeContentText>
                Hello, I’m Vlad, full-stack blockchain developer. I build server and client side software using TypeScript and write smart-contracts in Solidity.
                I have experience building Fin-Tech solutions, NFT Marketplaces, landing pages, Play-to-Earn platforms.
                Reach out to me whether you are a client or an employer.
            </HomeContentText>
        </HomeContentContainer>
    )
}


const HomeComponent = () => {
  return (
      <HomeContainer>
        <HomeHeader/>
        <HomeContent/>  
      </HomeContainer>
  )
}

export default HomeComponent