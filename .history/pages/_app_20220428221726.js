import Layout from "../layout/layout";
import { Provider } from "react-redux";
import "../styles/globals.css";
import store from "../redux/store";

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
