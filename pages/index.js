import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "User"));
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          list.push(doc.data());

          setData(list);
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
    console.log(data);
  }, []);

  useEffect(() => {
    const uid = JSON.parse(localStorage.getItem("user"));
    if (uid === null) {
      router.push("/login");
    }
  }, []);

  const checkData = () => {
    return data.map((doc) => {
      console.log("doc", doc.country);
    });
  };
  checkData();
  return (
    <div>
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
              <Link href="/signout">
                <a className="bg-slate-800 px-2 py-1 rounded hover:bg-red-600 ml-2">
                  Signout
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex justify-center text-3xl items-center mt-10">
        ALL USER DOCUMENTS
      </div>
      <main className="flex justify-center items-center pt-10">
        <table className="text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                FirstName
              </th>
              <th scope="col" className="px-4 py-3">
                LastName
              </th>
              <th scope="col" className="px-4 py-3">
                Address
              </th>
              <th scope="col" className="px-4 py-3">
                City
              </th>
              <th scope="col" className="px-4 py-3">
                Country
              </th>
              <th scope="col" className="px-4 py-3">
                PhoneNumber
              </th>
              <th scope="col" className="px-4 py-3">
                Postal Code
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((doc, i, docs) => {
              return (
                <tr
                  key={docs.id}
                  className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {doc.firstName}
                  </td>
                  <td className="px-6 py-4">{doc.lastName}</td>
                  <td className="px-6 py-4">{doc.address}</td>
                  <td className="px-6 py-4">{doc.country}</td>
                  <td className="px-6 py-4">{doc.city}</td>
                  <td className="px-6 py-4">{doc.martialStatus}</td>
                  <td className="px-6 py-4">{doc.postalCode}</td>

                  {/* <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td> */}
                </tr>
              );
            })}
            {/* <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Google Pixel Phone
              </th>
              <td className="px-6 py-4">Gray</td>
              <td className="px-6 py-4">Phone</td>
              <td className="px-6 py-4">$799</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Apple Watch 5
              </th>
              <td className="px-6 py-4">Red</td>
              <td className="px-6 py-4">Wearables</td>
              <td className="px-6 py-4">$999</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr> */}
          </tbody>
        </table>
      </main>
    </div>
  );
}
