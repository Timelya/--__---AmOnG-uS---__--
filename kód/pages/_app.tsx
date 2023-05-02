//css
import '../styles/register.css'
import '../styles/hamster.css'
import '../styles/susButton.css'
import '../styles/eventAddLabal.css'
import '../styles/darkModebutton.css'
import '../styles/nav/react-sidenav.min.css'

import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import fetchJson from '../lib/fetchJson'



function MyApp({ Component, pageProps }: AppProps) {
  return <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.error(err);
        },
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
}

export default MyApp
