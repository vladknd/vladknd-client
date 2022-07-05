import styled from 'styled-components'
import { BaseDiv, HeaderText, LightBox2, Text } from '../../styles/Components.styled'
import devices from '../../styles/devices'

export const BackEndContainer = styled(BaseDiv)`
    /* margin-top: 5%; */
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: end;

    width: 100%;
    height: 100vh;

    @media ${devices.mobileS} {
        margin-top: 20%;

        height: 90vh;
    }
    @media ${devices.mobileM} {
        margin-top: 15%;

        height: 90vh;
    }
    @media ${devices.mobileL} {
        margin-top: 20%;

        height: 90vh;
    }
    @media ${devices.laptop} {
        margin-top: 60px;
    }
`

export const BackEndContent = styled(LightBox2)`
    display: flex;
    flex-direction: column;
    align-items: end;

    width: 80%;
    height: 80%;
    
    @media ${devices.laptop} {
        /* top: 200%;
        left: 4px; */
    }
`
export const BackEndHeader = styled(HeaderText)`    
    position: absolute;
    right: 5%;
`
export const BackEndText = styled(Text)`
    padding-top: 15%;
    padding-right: 4%;
    width: 90%;
    
    font-size: 18px;

    line-height: 24px;
    letter-spacing: 2px;

    @media ${devices.mobileS} {
        
    }
    @media ${devices.mobileM} {
        padding-left: 5%;
        font-size: 15px;
    }
    @media ${devices.mobileL} {
        
    }
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

export const BackEndTerminal = styled(BaseDiv)`
    position: absolute;
   
   @media ${devices.mobileS} {
       left: 8%;
       bottom: 10%;

       width: 85%;
   }
   @media ${devices.mobileM} {
       bottom: 1%;
   }
   @media ${devices.mobileL} {
       bottom: 2%;
   }
   @media ${devices.laptop} {
       width: 45%;
       /* height: 50%; */
       left: 4%;
       bottom: 22%;
   }
   @media ${devices.laptopL} {
    bottom: 50%;
   }
`