import React from 'react'
import FooterComponent from '../Footer/Footer.component'
import HeaderComponent from '../Header/Header.component'
import { LayoutContainer } from './Layout.styled'

const LayoutComponent = (props: any) => {
  return (
    <LayoutContainer>
        <HeaderComponent/>
        {props.children}
        <FooterComponent/>
    </LayoutContainer>
  )
}

export default LayoutComponent
