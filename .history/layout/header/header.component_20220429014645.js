import Link from "next/link";
import { useState, useEffect } from "react";

function header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const uid = JSON.parse(localStorage.getItem("user"));
    if (uid !== null) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <>
      <nav className="bg-gray-600  text-slate-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded  dark:bg-gray-800">
        <div className="container flex flex-wrap  items-center mx-auto">
          <div className="bg-slate-800 px-2 py-1 rounded hover:bg-orange-800 ml-9 ">
            <Link href="/">
              <a className="">Home</a>
            </Link>
          </div>
          <div>
            <Link href="/form">
              <a className="bg-slate-800  text-slate-50 px-2 py-1 rounded hover:bg-orange-500 ">
                Fill form
              </a>
            </Link>
          </div>
          {isLoggedIn && (
            <div className="flex ">
              <div>
                <Link href="/logout">
                  <a className="bg-slate-800 px-2 py-1 rounded hover:bg-red-600 ml-2">
                    Signout
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default header;
