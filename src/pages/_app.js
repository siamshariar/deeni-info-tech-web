import '../styles/tailwind.css';
import '../styles/globals.scss';
import 'swiper/css';
import 'swiper/css/grid';
import Layout from '../components/core/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
