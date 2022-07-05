import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LayoutComponent from '../components/Layout/Layout.component'
import FontsStyled from '../styles/Fonts.styled'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutComponent>
      <FontsStyled/>
        <Component {...pageProps} />
    </LayoutComponent>
  )
   
}

export default MyApp
