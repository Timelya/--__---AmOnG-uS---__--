//css
import '../styles/globals.css'
import '../styles/nav.css'
import '../styles/styles.css'
//java
import '../java/nav.js'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
