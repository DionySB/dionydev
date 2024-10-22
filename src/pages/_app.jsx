import '../../styles/app.css'
import Head from 'next/head'
import Header from '../../components/Header'
import Whatsapp from '../../components/Whatsapp'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>diony.dev</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>
       </Head>
       <Header />
      <Component {...pageProps} />
      <Whatsapp />
    </>
  )
}

export default MyApp