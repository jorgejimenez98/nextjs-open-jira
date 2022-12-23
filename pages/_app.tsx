import '../styles/globals.css'
import { darkTheme } from '../themes'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
