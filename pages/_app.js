import Layout from "../layout/layout";
import "../styles/globals.css";
// import { store } from "../redux/store.js";
// import { AuthContext } from "../authContext/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    // <AuthContext>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </AuthContext>
  );
}

export default MyApp;
