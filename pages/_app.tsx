import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../Components/Header/Header'
import { Provider } from 'react-redux'
import store from '../Redux/store/store'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
