import '../styles/globals.css'
import { StateContext } from '../context/StateContext'

function MyApp({ Component, pageProps }) {
  return (<StateContext>
    <Component {...pageProps} />
  </StateContext>)
}

export default MyApp
