import React from 'react'
import { EducationContainer, EducationContent, EducationHeader, EducationText } from './Education.styled'

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
       </EducationContent>
   </EducationContainer>
  )
}

export default EducationComponent