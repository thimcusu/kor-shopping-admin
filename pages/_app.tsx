import { AppProps } from 'next/app';
import { wrapper } from 'redux/store';
import { appWithTranslation } from 'next-i18next';
import '@/assets/scss/style.scss';

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default wrapper.withRedux(appWithTranslation(MyApp));
