import { db, storage } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";

export default function Confirmation({
  prevStep,
  nextStep,
  file,
  handleChange,
  fileChange,

  values,
}) {
  const [progresspercent, setProgresspercent] = useState(0);

  const router = useRouter();

  const saveData = async () => {
    console.log(values);
    try {
      const fileRef = ref(storage, "users");
      await addDoc(collection(db, "User"), values);
      //upload file
      const storageRef = ref(storage, values.file);
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
      // route
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <section>
      <h1 className="text-center text-4xl uppercase font-bold p-10">Confirm</h1>
      <div className="flex justify-center  ">
        <div className="mb-4 flex flex-wrap flex-row  ">
          <div className="mb-6 basis-1/2  ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              disabled
              className="shadow appearance-none border rounded w-full py-2 px-3
               text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="country"
              type="text"
              placeholder="Enter First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
            />
          </div>
          <div className="mb-6 basis-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              disabled
              className="shadow appearance-none border rounded w-full py-2 px-3
               text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="country"
              type="text"
              placeholder="Enter Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
            />
          </div>

          <div className="mb-6 basis-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="country"
            >
              Martial Status
            </label>
            <input
              disabled
              className="shadow appearance-none border rounded w-full py-2 px-3
               text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="martialStatus"
              type="text"
              placeholder="Enter martialStatus"
              onChange={handleChange("martialStatus")}
              defaultValue={values.martialStatus}
            />
          </div>
          <div className="mb-6 basis-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="city"
            >
              Age
            </label>
            <input
              disabled
              className="shadow appearance-none border rounded w-full py-2 px-3
               text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="country"
              type="number"
              placeholder="Enter Age"
              onChange={handleChange("age")}
              defaultValue={values.age}
            />
          </div>
          <div className="mb-6 basis-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              disabled
              className="shadow appearance-none border rounded w-full py-2 px-3 
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
              className="shadow appearance-none border rounded w-full py-2 px-3
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="file"
              type="file"
              placeholder="upload image"
              onChange={fileChange("file")}
              defaultValue={values.file}
            />
            {progresspercent}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center w-full ">
        <button
          className="bg-red-500 w-1/3  py-2 my-4 text-white rounded-md"
          onClick={Previous}
        >
          Back
        </button>
        <button
          className="bg-green-500 w-1/3  py-2 my-4 text-white rounded-md"
          onClick={saveData}
        >
          Finish!
        </button>
      </div>
    </section>
  );
}
