import { createGlobalStyle, ThemeProvider } from 'styled-components'
import FacetHead from './FacetHead'
import '../styles/globals.css'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyle />
    <FacetHead />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default MyApp
