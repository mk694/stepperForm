import Link from "next/link";

function header() {
  return (
    <>
      <nav className="bg-gray-600  text-slate-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded  dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div>React Trial</div>
          <div className="bg-slate-800 px-2 py-1 rounded hover:bg-orange-800 ">
            <Link href="/">
              <a className="">Home</a>
            </Link>
          </div>
          <div className="flex ">
            <div>
              <Link href="/form">
                <a className="bg-slate-800  text-slate-50 px-2 py-1 rounded hover:bg-orange-500 ">
                  Fill form
                </a>
              </Link>
            </div>
            <div>
              <Link href="/logout">
                <a className="bg-slate-800 px-2 py-1 rounded hover:bg-red-600 ml-2">
                  Signout
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default header;
