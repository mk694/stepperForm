import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function logout() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    localStorage.removeItem("user");
    router.push("/login").then(() => {
      window.location.reload();
      setLoading(false);
    });
  }, []);

  return <div></div>;
}

export default logout;
