import '@/styles/globals.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/arya-orange/theme.css';
import { AppPropsWithLayout } from '@/types/types';
import Layout from '@/layout/layout';
import AppLayout from '@/layout/applayout';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.getLayout) {
    return Component.getLayout(
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  } else {
    return (
      <Layout>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Layout>
    );
  }
}
