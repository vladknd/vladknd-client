import styled from 'styled-components'
import { BaseDiv, DarkBox2, HeaderText } from '../../styles/Components.styled'
import devices from '../../styles/devices'

export const ExperienceContainer = styled(BaseDiv)`
    display: flex;
    flex-direction: column;
    align-items: start;
    /* width: 100%; */
    height: 200vh;

    @media ${devices.laptop} {
        margin-top: 150px;
    }
`



export const FirstExperience = styled(BaseDiv)`
    position: relative;

    width: 100%;
    height: 50%;
`
export const FirstExperienceContent = styled(DarkBox2)`
    /* margin: 0; */
    width: 80%;
    height: 100%;
`
export const FirstExperienceHeader = styled(HeaderText)`
    left: 5%;
`
export const FirstExperienceText = styled(HeaderText)`
    padding-top: 12%;
    padding-left: 5%;
    width: 70%;
    
    font-size: 18px;

    line-height: 25px;
    letter-spacing: 2px;

    @media ${devices.laptop} {
        padding-top: 6%;
        width: 60%;

        line-height: 30px;
        letter-spacing: 2px;
        font-size: 20px;
    }
    @media ${devices.laptopL} {
       
    }
`       
export const FirstExperienceImage = styled(BaseDiv)`
   position: absolute;
   z-index: 1;
   @media ${devices.mobileS} {
       /* top: 80%; */
       bottom: 15%;
       right: 5%;
       width: 80%;
       height: 10%;
   }
   @media ${devices.mobileM} {
       bottom: 10%;
   }
   @media ${devices.mobileL} {
       bottom: 25%;
   }
   @media ${devices.laptop} {
       top: 40%;
       /* left: 15% */
       right: 3%;

       width: 40%;
   }
   @media ${devices.laptopL} {
       
   }
`



export const SecondExperience = styled(BaseDiv)`
    position: relative;

    width: 100%;
    height: 50%;

    align-self: end;

    @media ${devices.mobileS} {
        margin-top: 80px;

        /* left: 100px; */
    }
`
export const SecondExperienceHeader = styled(BaseDiv)`
    
`
export const SecondExperienceContent = styled(DarkBox2)`
    position: absolute;
    right: 0;
    margin-top: 10%;    
    width: 80%;
    height: 80%;

`
export const SecondExperienceText = styled(HeaderText)`
    padding-top: 30%;
    padding-left: 10%;
    width: 70%;
    
    font-size: 18px;

    line-height: 25px;
    letter-spacing: 2px;

    
    @media ${devices.laptop} {
        padding-top: 3%;
        padding-left: 25%;
        width: 70%;

        line-height: 30px;
        letter-spacing: 2px;
        font-size: 20px;
    }
    @media ${devices.laptopL} {
        padding-left: 18%;
        width: 80%;
    }
`
export const SecondExperienceImage = styled(BaseDiv)`
    position: absolute;
    /* z-index: 5; */

    @media ${devices.mobileS} {
       top: 62%;
       /* right: 20%; */
       /* height: 10%; */
       /* width: 120%; */
    }
    @media ${devices.mobileM} {
       bottom: 1%;
    }
    @media ${devices.mobileL} {
       /* bottom: 0%;
       right: 0%; */
    }
    @media ${devices.laptop} {
       top: 45%;
       left: 0px;
       /* left: 150; */

       width: 50%;
    }
    @media ${devices.laptopL} {
       
    }
`