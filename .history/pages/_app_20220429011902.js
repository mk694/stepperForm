import Layout from "../layout/layout";
import "../styles/globals.css";
import { store } from "../redux/store.js";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
