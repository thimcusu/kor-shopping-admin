import { AppProps } from 'next/app';
import { connect } from 'react-redux';
import { wrapper } from 'redux/store';
import '@/assets/scss/style.scss';

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

const mapDispatchToProps = () => ({});

const withConnect = connect(null, mapDispatchToProps);

export default wrapper.withRedux(withConnect(MyApp));
