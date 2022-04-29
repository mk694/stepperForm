import { Router, useRouter } from "next/router";
import { useEffect } from "react";

function logout() {
  const router = useRouter();
  useEffect(() => {
    localStorage.removeItem("user");
    router.push("/login");
  }, []);

  return <div></div>;
}

export default logout;
