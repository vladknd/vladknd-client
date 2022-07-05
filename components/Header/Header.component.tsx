import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TextClick } from '../../styles/Components.styled'
import { HeaderContainer, LogoContainer, NavLinkContainer, SideContainer } from './Header.styled'

interface INavLink {
  text: string;
  link: string;
}
const NavLink = (props: INavLink) => {
  return (
    <NavLinkContainer href={props.link}>
      <TextClick size={18} font="Inter" weight="UltLt">{props.text}</TextClick>
    </NavLinkContainer>
  )
}

const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <SideContainer>
        <NavLink text="TECH" link="/"/>
        <NavLink text="BLOG" link="/"/>
      </SideContainer>

      <LogoContainer>
        <Image src="/logo.svg" width={400} height={400}/>
      </LogoContainer>

      <SideContainer>
        <NavLink text="EXPERIENCE" link="/"/>
        <NavLink text="EDUCATION" link="/"/>
      </SideContainer>
    </HeaderContainer>
  )
}

export default HeaderComponent