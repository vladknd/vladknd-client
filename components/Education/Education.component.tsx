import Image from 'next/image'
import React from 'react'
import { EducationContainer, EducationContent, EducationHeader, EducationImages, EducationText } from './Education.styled'

const EducationComponent = () => {
  return (
   <EducationContainer>
       <EducationContent>
           <EducationHeader>EDUCATION</EducationHeader>
           <EducationText>
            Bachelor’s degree 
            in Computer Engineering 
            at Concordia University Montreal.
           </EducationText>
           <EducationImages>
             <Image src="/concordia.svg" width={200} height={200}/>
             <Image src="/gina.svg" width={200} height={200}/>
           </EducationImages>
       </EducationContent>
   </EducationContainer>
  )
}

export default EducationComponent