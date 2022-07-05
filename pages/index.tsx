import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import BackEndComponent from '../components/BackEnd/BackEnd.component'
import BlockchainComponent from '../components/Blockchain/Blockchain.component'
import EducationComponent from '../components/Education/Education.component'
import ExperienceComponent from '../components/Experience/Experience.component'
import FrontEndComponent from '../components/FrontEnd/FrontEnd.component'
import HomeComponent from '../components/Home/Home.component'
import styles from '../styles/Home.module.css'


const HomePage = styled.div`
    margin-top: 100px;
  
`
const Home: NextPage = () => {
  return (
    <HomePage>
      <HomeComponent/>
      <FrontEndComponent/>
      <BackEndComponent/>
      <BlockchainComponent/>
      <ExperienceComponent/>
      <EducationComponent/>
    </HomePage>
  )
}

export default Home
