import '@/styles/globals.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/arya-orange/theme.css';
import { AppPropsWithLayout } from '@/types/types';
import Layout from '@/layout/layout';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.getLayout) {
    return (Component.getLayout(<Component {...pageProps} />))
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );  
  }
}
