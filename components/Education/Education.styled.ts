import styled from 'styled-components'
import { BaseDiv, DarkBox2, HeaderText, Text } from '../../styles/Components.styled'
import devices from '../../styles/devices'

export const EducationContainer = styled(BaseDiv)`
    margin-top: 10%;

    width: 100%;
    height: 60vh;
`

export const EducationContent = styled(DarkBox2)`
    width: 80%;
    height: 80%;
`
export const EducationHeader = styled(HeaderText)`
    @media ${devices.mobileS} {
        left: 2%;
    }
    @media ${devices.mobileM} {
        left: 2%;
    }
    @media ${devices.mobileL} {
        left: 2%;
    }
    @media ${devices.laptop} {
        right: 10%;
    }
    @media ${devices.laptopL} {
        right: 15%;
    }
`

export const EducationText = styled(Text)`
    padding-top: 12%;
    padding-left: 5%;

    width: 100%;
    height: 100%;

    font-size: 15px;
    letter-spacing: 2px;
    @media ${devices.laptop} {
        padding-top: 4%;
        font-size: 18px;
    }
    @media ${devices.laptopL} {
        padding-top: 4%;
        font-size: 18px;
    }
`

export const EducationImages = styled(BaseDiv)`
    display: flex;
    flex-direction: row;
`