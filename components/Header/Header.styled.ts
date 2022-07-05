import styled from 'styled-components'
import colors from '../../styles/colors'
import Link from 'next/link'
import devices from '../../styles/devices'

export const HeaderContainer = styled.div`
    position: fixed;
    z-index: 2;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    @media ${devices.laptop}{
        justify-content: center;
    }

    


    width: 100%;
    height: 90px;


    font-family: "AvenirNext";
    font-weight: UltLt;

    background-color: ${colors.color1};
`

export const LogoContainer = styled.div`
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 10%;
    height: 100%;

    @media ${devices.mobileM} {
        padding-left: 20px;
        width: 40%;
    }
    @media ${devices.laptop} {
        padding-left: 20px;
        width: 15%;
    }
`

export const SideContainer = styled.div`
    
    display: none;
    width: 40%;
    height: 100%;

    @media ${devices.laptop}{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    
`

export const NavLinkContainer = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    
`