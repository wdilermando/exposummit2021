import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import GlobalStyle from '../styles/globalStyles';

const theme = {
  colors: {
    light: '#FFFFFF',
    primary: '#F8633B',
    secondary: '#225C9C',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
