import { useRouter } from "next/router";
const withAuth = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const Router = useRouter();

      const user = localStorage.getItem("user");

      if (!user) {
        Router.replace("/");
        return null;
      }

      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default withAuth;
