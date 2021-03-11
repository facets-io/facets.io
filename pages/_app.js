import { createGlobalStyle, ThemeProvider } from 'styled-components'
import FacetHead from './FacetHead'
import '../styles/globals.css'
import * as Sentry from "@sentry/react"
import { Integrations } from "@sentry/tracing"

Sentry.init({
  dsn: "https://ed8c172584fe499c9560eeb7992c27b0@o460218.ingest.sentry.io/5670921",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

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
