import styled from 'styled-components'
import { HeaderText, Text, BaseDiv, DarkBox2 } from '../../styles/Components.styled'
import devices from '../../styles/devices'

export const BlockchainContainer = styled.div`  
    position: relative;

    width: 100%;
    height: 95vh;

    @media ${devices.mobileS} {
        margin-top: 30%;
    }
    @media ${devices.mobileM} {

    }
    @media ${devices.mobileL} {
   
    }
    @media ${devices.laptop} {
        margin-top: 0%;
    }
`

export const BlockchianContent = styled(DarkBox2)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 80%;
`

export const BlockchainHeader = styled(HeaderText)`
    position: absolute;
    @media ${devices.laptop} {
        
    }
`

export const BlockchainText = styled(Text)`
    padding-top: 12%;
    padding-right: 0%;
    width: 85%;
    
    font-size: 18px;
    opacity: 0.7;
    line-height: 25px;
    letter-spacing: 2px;

    @media ${devices.laptop} {
        padding-top: 6%;
        width: 80%;

        line-height: 40px;
        letter-spacing: 4px;
        font-size: 24px;
    }
    @media ${devices.laptopL} {
        line-height: 40px;
        letter-spacing: 4px;
        font-size: 28px;
    }
`

export const BlockchainTerminal = styled(BaseDiv)`
    position: absolute;
    width: 600px;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;

   @media ${devices.mobileS} {
       bottom: 10%;
       width: 300px;
   }
   @media ${devices.mobileM} {
       left: 1%;
       width: 350px;
   }
   @media ${devices.mobileL} {
       bottom: 2%;
       width: 350px;
       
   }
   @media ${devices.laptop} {
       top: 45%;
       width: 600px;
   }
   @media ${devices.laptopL} {
        width: 50%;
        top: 35%;
   }
`