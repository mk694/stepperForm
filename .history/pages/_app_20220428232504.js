import Layout from "../layout/layout";
import { Provider } from "react-redux";
import "../styles/globals.css";
import store from "../redux/store";
import { useSelector, useDispatch } from "react-redux";

function MyApp({ Component, pageProps }) {
  const isAuth = useSelector((state) => state.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    JSON.parse(localStorage.getItem("user")) && dispatch(LoginSuccess);
    if (isAuth) {
      router.push("/");
    }
  }, [isAuth]);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
