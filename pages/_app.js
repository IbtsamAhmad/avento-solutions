
import 'owl.carousel/dist/assets/owl.carousel.css';
import '../styles/globals.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../src/components/Layout'
import { SSRProvider } from "react-bootstrap";


function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </SSRProvider>
  )
}

export default MyApp
