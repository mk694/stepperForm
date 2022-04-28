import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/router";
import { useEffect } from "react";

function login() {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const uid = JSON.parse(localStorage.getItem("user"));
    if (uid !== null) {
      router.push("/");
    }
  }, []);

  const Loginhandler = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res.user);
      localStorage.setItem("user", JSON.stringify(res.user.uid));

      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={Loginhandler}>
        <h1 className="text-center text-4xl uppercase font-bold p-10">Login</h1>
        <div className="flex justify-center w-full">
          <div className="mb-4">
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
            <p className="text-sm border-2 text-red-500 bg-red-500/10">
              reda me
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default login;
