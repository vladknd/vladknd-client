import styled from 'styled-components'
import { BaseDiv, DarkBoxClick, LightBoxClick, Text } from '../../styles/Components.styled'
import devices from '../../styles/devices'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    

    width: 100%;
    height: 85vh;


    @media ${devices.mobileS} {
        align-items: end;
    }
    @media ${devices.mobileM} {
        align-items: end;
    }
    @media ${devices.mobileL} {
        align-items: end;
    }
    @media ${devices.laptop} {
        align-items: start;
    }
`


export const HomeHeaderContainer = styled(BaseDiv)`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    /* @media ${devices.mobileS} {
        align-items: end;
    }
    @media ${devices.mobileM} {
        align-items: end;
    }
    @media ${devices.mobileL} {
        align-items: end;
    } */
    /* align-self: end; */
    /* margin-left: 100px; */
`

export const HomeHeaderTexts = styled(BaseDiv)`
    margin-top: 10px;

    display: flex;
    flex-direction: column;

    font-family: "Inter";
    @media ${devices.laptop} {
        margin-top: 40px;
        flex-direction: row;
    }
`
export const HomeHeaderText = styled(Text)`
    margin: 10px 8px 2px 0px;
    font-size: 30px;
    @media ${devices.laptop} {
        font-size: 60px;
    }
`

export const HomeHeaderButtons = styled(BaseDiv)`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    @media ${devices.laptop} {
        margin-top: 30px;
        flex-direction: row;
    }
`

export const SMButtons = styled(BaseDiv)`
    display: flex;
    flex-direction: row;
`
export const SMButton = styled(DarkBoxClick)`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;
`



export const Resume = styled(DarkBoxClick)`
    padding: 0px 15px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 220px;
    height: 50px;

    color: white;
    font-family: "Inter";
    font-size: 22px;
    letter-spacing: 5px;
`
export const Mail = styled(DarkBoxClick)`
    padding: 0px 15px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 220px;
    height: 50px;

    color: white;
    font-family: "Inter";
    font-size: 11px;
    letter-spacing: 2px;
`
export const LightButtons = styled(BaseDiv)`
    padding-left: 10px;
    padding-right: 10px;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;

    width: 100%;

    @media ${devices.laptop} {
        padding: 0px;
    }
`

export const LightButton = styled(LightBoxClick)`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 50%;
    height: 50px;

    color: white;
    font-family: "Inter";
    font-weight: 100;
    font-size: 18px;
    letter-spacing: 5px;

    @media ${devices.laptop} {
        padding-left: 30px;

        align-items: start;

        width: 250px;

        font-size: 20px;
    }
`


export const HomeContentContainer = styled(BaseDiv)`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    @media ${devices.laptop} {
        margin-top: 180px;
        align-items: start;
        padding-left: 30px;
    }
`

export const HomeContentText = styled(Text)`
    padding: 10px 20px;

    letter-spacing: 2px;
    line-height: 30px;
    opacity: 0.8;
    font-size: 20px;

    width: 100%;

    @media ${devices.laptop} {
        padding: 0px;

        line-height: 50px;
        font-size: 25px;

        width: 70%;
    }
`