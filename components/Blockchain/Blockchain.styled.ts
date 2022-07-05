import styled from 'styled-components'
import { HeaderText, Text, BaseDiv, DarkBox2 } from '../../styles/Components.styled'
import devices from '../../styles/devices'

export const BlockchainContainer = styled.div`  
    position: relative;
    /* margin-top: 380px; */
    
    width: 100%;
    height: 95vh;


    @media ${devices.mobileS} {

    }
    @media ${devices.mobileM} {
        /* margin-top: 10%; */
    }
    @media ${devices.mobileL} {
   
    }
    @media ${devices.laptop} {
        /* margin-top: 80px; */
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

export const BlockchainTerminal = styled(BaseDiv)`
    position: absolute;
    width: 600px;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    /* transform: translate(50%, -10%); */
   @media ${devices.mobileS} {
       bottom: 10%;
       width: 300px;
   }
   @media ${devices.mobileM} {
       left: 1%;

       width: 350px;
   }
   @media ${devices.mobileL} {
       /* left: 15%; */
       bottom: 2%;

       width: 350px;
       
   }

   @media ${devices.laptop} {
       /* top: 40%; */
       /* width: 50%; */
       /* transform: translate(70%, -10%); */
       /* width: 2%; */
       width: 600px;
   }
   @media ${devices.laptopL} {
        /* width: 20%; */
   }
`