import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ExperienceContainer, FirstExperience, FirstExperienceContent, FirstExperienceHeader, FirstExperienceImage, FirstExperienceText, SecondExperience, SecondExperienceContent, SecondExperienceHeader, SecondExperienceImage, SecondExperienceText } from './Experience.styled'

const ExperienceComponent = () => {
  return (
    <ExperienceContainer>
        <FirstExperience>
            <FirstExperienceContent>
                <FirstExperienceHeader>EXPERIENCE</FirstExperienceHeader>
                <FirstExperienceText>
                ORBEEM (Polygon, Node.js, React) - P2E platform with NFT Marketplace allowing users to get tokens for achievements in eSports(Dota2). <br/> <br/>
I developed: <br/> a landing page of the project  with a governance token(ERC20), <br/> main app of the project with Marketplace and game  logic, user authorization and authentication.
                </FirstExperienceText>
            </FirstExperienceContent>

            <Link href="https://www.orbeem.store">
                <FirstExperienceImage>
                    <Image src="/orbeem.svg" width={800} height={800}/>
                </FirstExperienceImage>
            </Link>
        </FirstExperience>

        <SecondExperience>
            <SecondExperienceContent>
                <SecondExperienceText>
                    I worked on a development of a microcredit platform. I developed parts for admin panel(dashboard) and worked on API server. 
                </SecondExperienceText>
            </SecondExperienceContent>

            <Link href="https://finsfera.ua/">
                <SecondExperienceImage>
                    <Image src="/finsfera.png" unoptimized={true} width={1800} height={1300}/>
                </SecondExperienceImage>
            </Link>
        </SecondExperience>
    </ExperienceContainer>
  )
}

export default ExperienceComponent