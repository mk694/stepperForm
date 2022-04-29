import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ReactSpinner from "../components/spinner/reactSpinner.component";

function login() {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const uid = JSON.parse(localStorage.getItem("user"));
    if (uid !== null) {
      router.push("/");
    }
  }, []);

  const Loginhandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res.user);
      localStorage.setItem("user", JSON.stringify(res.user.uid));

      router.push("/").then(() => {
        window.location.reload();
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      console.log(error.message);
      setErr(error.message);
    }
  };
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ReactSpinner />
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <form onSubmit={Loginhandler}>
            <h1 className="text-center text-4xl uppercase font-bold p-10">
              Login
            </h1>
            <div className="flex justify-center w-full">
              <div className="mb-16">
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3
             text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="country"
                    type="email"
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    // defaultValue={values.firstName}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3
             text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="country"
                    type="password"
                    placeholder="Enter Your Password"
                    onChange={(e) => setPassword(e.target.value)}

                    // defaultValue={values.lastName}
                  />
                </div>
                <button
                  className="bg-green-500 w-full py-2 my-4 text-white rounded-md"
                  type="submit"
                >
                  Login
                </button>
                {err && (
                  <p className="text-sm border-2 p-4 rounded-xl text-red-500 bg-red-500/10 text-center">
                    {err}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default login;
