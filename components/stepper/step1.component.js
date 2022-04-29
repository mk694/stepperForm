import { useEffect, useState } from "react";

export default function Step1({ nextStep, handleChange, values }) {
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (values.firstName === "" || values.lastName === "") {
      setDisable(true);
    } else setDisable(false);
  }, [values]);

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <>
      <p className="text-center text-4xl uppercase font-bold p-10">Step 1</p>
      <div className="flex justify-center w-full">
        <div className="mb-4">
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="country"
              type="text"
              placeholder="Enter First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="country"
              type="text"
              placeholder="Enter Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
            />
          </div>
          <button
            disabled={disable}
            className="bg-green-500 w-full py-2 my-4 disabled:bg-gray-400 text-white rounded-md"
            onClick={Continue}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
