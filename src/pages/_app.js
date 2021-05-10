import { makeServer } from '../mirage';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}
export default ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
