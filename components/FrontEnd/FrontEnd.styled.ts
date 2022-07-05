import styled from 'styled-components'
import devices from '../../styles/devices'
import { 
    BaseDiv, 
    HeaderText, 
    LightBox2,
    Text
} from '../../styles/Components.styled'


export const FrontEndContainer = styled(BaseDiv)`
    margin-top: 10%;

    position: relative;

    width: 100%;
    height: 100vh;

    @media ${devices.mobileS} {
        margin-top: 20%;

        height: 90vh;
    }
    @media ${devices.mobileM} {
        margin-top: 30%;

        height: 90vh;
    }
    @media ${devices.mobileL} {
        margin-top: 20%;

        height: 90vh;
    }
`

export const FrontEndContent = styled(LightBox2)`

    width: 80%;
    height: 60%;

    @media ${devices.mobileS} {
        
    }
    @media ${devices.mobileM} {
        height: 70%;
    }
    @media ${devices.mobileL} {
        
    }
    @media ${devices.laptop} {
        margin-top: 10%;
    }

    @media ${devices.laptopL} {
        margin-top: 2%;
    }
`
export const FrontEndHeader = styled(HeaderText)`
    position: absolute;
    left: 5%;
    bottom: 40;

`
export const FrontEndText = styled(Text)`
    padding-top: 14%;
    padding-left: 9%;
    width: 90%;
    
    font-size: 18px;

    line-height: 22px;
    letter-spacing: 2px;

    @media ${devices.mobileS} {
        
    }
    @media ${devices.mobileM} {
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
export const FrontEndTerminal = styled(BaseDiv)`
    position: absolute;
   
    @media ${devices.mobileS} {
        bottom: 10%;
    }
    @media ${devices.mobileM} {
        bottom: 0;
    }
    @media ${devices.mobileL} {
        bottom: 10%;
    }
    @media ${devices.laptop} {
        width: 50%;
        right: 0;
    }
    @media ${devices.laptopL} {
        
    }
`