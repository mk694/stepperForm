import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import ExportToExcel from "../components/Excel/ExportToExcel.component";

export default function Home() {
  const [data, setData] = useState([]);

  const router = useRouter();
  useEffect(() => {
    const getData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "User"));
        querySnapshot.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });

          setData(list);
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const uid = JSON.parse(localStorage.getItem("user"));
    if (uid === null) {
      router.push("/login");
    }
  }, []);

  return (
    <div>
      <div className="flex justify-center text-3xl items-center mt-10">
        ALL USER DOCUMENTS
      </div>
      <main className="flex justify-center flex-col items-center pt-10">
        {/* <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="bg-green-700 text-white p-4 rounded-md mb-3"
          table="table-to-xls"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Download as XLS"
        /> */}
        <table
          id="table-to-xls"
          className="text-sm text-left text-gray-500 dark:text-gray-400 "
        >
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
              <th scope="col" className="px-4 py-3">
                Export to Excel
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((doc, i, docs) => {
              const newArr = docs.filter((n, i) => {
                return doc[i];
              });
              return (
                <tr
                  key={i}
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
                  <td className="px-6 py-4">
                    <ExportToExcel doc={newArr} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}
