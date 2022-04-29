import { Router, useRouter } from "next/router";
import { useEffect } from "react";

function logout() {
  const router = useRouter();
  useEffect(() => {
    localStorage.removeItem("user");
    router.push("/login").then(() => {
      window.location.reload();
    });
  }, []);

  return <div></div>;
}

export default logout;
