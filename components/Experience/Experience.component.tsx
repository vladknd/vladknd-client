import Image from 'next/image'
import React from 'react'
import { ExperienceContainer, FirstExperience, FirstExperienceContent, FirstExperienceHeader, FirstExperienceImage, FirstExperienceText, SecondExperience, SecondExperienceContent, SecondExperienceHeader, SecondExperienceImage, SecondExperienceText } from './Experience.styled'

const ExperienceComponent = () => {
  return (
    <ExperienceContainer>
        <FirstExperience>
            <FirstExperienceContent>
                <FirstExperienceHeader>EXPERIENCE</FirstExperienceHeader>
                <FirstExperienceText>
                    I developed a Play-to-Earn platform from scratch. 
                    I built main-app with NFT-marketplace and play-to-earn elements(connected to steam games), landing page, utility and governance tokens. I connected all parts of the project and deployed it.
                </FirstExperienceText>
            </FirstExperienceContent>

            <FirstExperienceImage>
                <Image src="/orbeem.svg" width={800} height={800}/>
            </FirstExperienceImage>
        </FirstExperience>

        <SecondExperience>
            <SecondExperienceContent>
                <SecondExperienceText>
                    I worked on a development of a microcredit platform. I developed parts for admin panel(dashboard) and worked on API server. 
                </SecondExperienceText>
            </SecondExperienceContent>

            <SecondExperienceImage>
                <Image src="/finsfera.png" unoptimized={true} width={1800} height={1300}/>
            </SecondExperienceImage>
        </SecondExperience>
    </ExperienceContainer>
  )
}

export default ExperienceComponent