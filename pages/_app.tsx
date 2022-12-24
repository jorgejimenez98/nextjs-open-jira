import '../styles/globals.css'
import { darkTheme } from '../themes'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { UiProvider } from '../context/ui'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UiProvider>

  )
}
