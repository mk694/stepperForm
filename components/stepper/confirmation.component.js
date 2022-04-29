import { db, storage } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";

export default function Confirmation({
  prevStep,
  file,
  handleChange,
  fileChange,
  values,
  data,
}) {
  const [progresspercent, setProgresspercent] = useState(0);

  const router = useRouter();

  const saveData = async () => {
    try {
      //upload file
      const storageRef = ref(storage, data.file);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgresspercent(progress);
        },
        (error) => {
          alert(error);
        }
      );
      await addDoc(collection(db, "User"), data);

      router.push("/");

      // route
    } catch (error) {
      alert("Upload file");
    }
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <>
      <p className="text-center text-4xl uppercase font-bold p-10">Confirm</p>
      <div className="flex justify-center items-center ">
        <div className="mb-4 flex justify-center items-center flex-col   ">
          <div className="mb-6   ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              disabled
              className="shadow appearance-none border rounded  py-2 px-3
               text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="country"
              type="text"
              placeholder="Enter First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
            />
          </div>
          <div className="mb-6 ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              disabled
              className="shadow appearance-none border rounded  py-2 px-3
               text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="country"
              type="text"
              placeholder="Enter Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
            />
          </div>

          <div className="mb-6 ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="country"
            >
              Martial Status
            </label>
            <input
              disabled
              className="shadow appearance-none border rounded  py-2 px-3
               text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="martialStatus"
              type="text"
              placeholder="Enter martialStatus"
              onChange={handleChange("martialStatus")}
              defaultValue={values.martialStatus}
            />
          </div>
          <div className="mb-6 ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="city"
            >
              Age
            </label>
            <input
              disabled
              className="shadow appearance-none border rounded  py-2 px-3
               text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="country"
              type="number"
              placeholder="Enter Age"
              onChange={handleChange("age")}
              defaultValue={values.age}
            />
          </div>
          <div className="mb-6 ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              disabled
              className="shadow appearance-none border rounded  py-2 px-3 
               text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="phone"
              placeholder="Enter Mobile Number"
              onChange={handleChange("phoneNumber")}
              defaultValue={values.phoneNumber}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="postalCode"
            >
              Upload Image
            </label>

            <input
              className="shadow appearance-none border rounded  py-1 px-3
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="file"
              type="file"
              placeholder="upload image"
              onChange={fileChange("file")}
              defaultValue={values.file}
            />
          </div>
          <span> {progresspercent}%</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center  ">
        <button
          className="bg-red-500 px-10 m-10 py-2 my-4 text-white rounded-md"
          onClick={Previous}
        >
          Back
        </button>
        <button
          className="bg-green-500 px-10 m-10  py-2 my-4 text-white rounded-md"
          onClick={saveData}
        >
          Finish!
        </button>
      </div>
    </>
  );
}
