import styled from 'styled-components'
import devices from './devices';

//_____________________________BASE________________________________________________________________________________
interface IBase {
    m?: string;
    mt?: number;
    mb?: number;
    mr?: number;
    ml?: number;

    p?: string;
    pt?: number;
    pb?: number;
    pr?: number;
    pl?: number;
}
export const BaseDiv = styled.div`
    margin: ${(props: IBase) => props.m || 0};
    margin-top: ${(props: IBase) => `${props.mt}px` || "0px"};
    margin-bottom: ${(props: IBase) => `${props.mb}px` || "0px"};
    margin-right: ${(props: IBase) => `${props.mr}px` || "0px"};
    margin-left: ${(props: IBase) => `${props.ml}px` || "0px"};


    padding: ${(props: IBase) => props.p || 0};
    padding-top: ${(props: IBase) => `${props.pt}px` || "0px"};
    padding-bottom: ${(props: IBase) => `${props.pb}px` || "0px"};
    padding-right: ${(props: IBase) => `${props.pr}px` || "0px"};
    padding-left: ${(props: IBase) => `${props.pl}px` || "0px"};  
`
//______________________________________________________________________________________________________________________________________________



//___________________________TEXT_____________________________________________________________________________
interface IText extends IBase {
    size?: number;
    font?: string;
    weight?: string;
    opacity?: number;
}

export const Text = styled.p`
    font-size: ${(props: IText) => `${props.size}px`};
    font-family: ${(props: IText) => props.font};
    font-weight: 225;
    opacity: ${(props:IText) => props.opacity || 1};

    letter-spacing: 6px;
    line-height: 24px;
    color: white;

    margin: ${(props: IText) => props.m || 0};
    margin-top: ${(props: IText) => `${props.mt}px` || "0px"};
    margin-bottom: ${(props: IText) => `${props.mb}px` || "0px"};
    margin-right: ${(props: IText) => `${props.mr}px` || "0px"};
    margin-left: ${(props: IText) => `${props.ml}px` || "0px"};

    padding: ${(props: IText) => props.p || 0};
    padding-top: ${(props: IText) => `${props.pt}px` || "0px"};
    padding-bottom: ${(props: IText) => `${props.pb}px` || "0px"};
    padding-right: ${(props: IText) => `${props.pr}px` || "0px"};
    padding-left: ${(props: IText) => `${props.pl}px` || "0px"};  
`

export const TextClick = styled(Text)`
    cursor: pointer;
    &:hover {
        opacity: 0.8;

    }
    &:hover:active {
        opacity: 0.9;
    }
`

export const HeaderText = styled(Text)`
    position: absolute;

    font-size: 50px;
    @media ${devices.laptop} {
        font-size: 60px;
    }
`
//_______________________________________________________________________________________________________________________________________________


//__________________________BOX_____________________________________________________________________________
interface IBox extends IBase {
    width?: string;
    height?: string;
}
export const Box = styled(BaseDiv)`
    width: ${(props:IBox) => props.width};
    height: ${(props:IBox) => props.height};
`
export const BoxClick = styled(Box)`
    cursor: pointer;
    &:hover {
        opacity: 0.7;

    }
    &:hover:active {
        opacity: 0.9;
    }
`


export const DarkBox = styled(Box)`
    border: 0.1px solid rgba(73, 73, 73, 1);
    border-radius: 2px;
    background-color: rgba(16, 16, 16, 0.63);
`
export const DarkBoxClick = styled(BoxClick)`
    border: 0.1px solid rgba(73, 73, 73, 1);
    border-radius: 2px;
    background-color: rgba(16, 16, 16, 0.63);
`
export const DarkBox2 = styled(Box)`
    background-color: rgba(15,15,15,1);
`



export const LightBox = styled(Box)`
    border: 0.2px solid rgba(255, 255, 255, 1);
    background: transparent;
`
export const LightBoxClick = styled(BoxClick)`
    padding: 10px 30px;

    border: 0.2px solid rgba(255, 255, 255, 1);

    background: transparent;

    @media ${devices.laptop} {
        
    }
`
export const LightBox2 = styled(Box)`
    background-color: rgba(40,40,40,1);

`
//_________________________________________________________________________________________________________________________________________
