import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../layout/layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
