import { useEffect, useState } from "react";

export default function Step3({ prevStep, nextStep, handleChange, values }) {
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (
      values.martialStatus === "" ||
      values.age === "" ||
      values.phoneNumber === ""
    ) {
      setDisable(true);
    } else setDisable(false);
  }, [values]);

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <>
      <p className="text-center text-4xl uppercase font-bold p-10">Step 3</p>
      <div className="flex justify-center w-full">
        <div className="mb-4">
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="country"
            >
              Martial Status
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="martialStatus"
              type="text"
              placeholder="Enter martialStatus"
              onChange={handleChange("martialStatus")}
              defaultValue={values.martialStatus}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="city"
            >
              Age
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="country"
              type="number"
              placeholder="Enter Age"
              onChange={handleChange("age")}
              defaultValue={values.age}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="phone"
              placeholder="Enter Phone Number"
              onChange={handleChange("phoneNumber")}
              defaultValue={values.phoneNumber}
            />
          </div>

          <div className="flex flex-wrap">
            <button
              className="bg-red-500 basis-1/2  py-2 my-4 text-white rounded-md"
              onClick={Previous}
            >
              Back
            </button>
            <button
              disabled={disable}
              className="bg-green-500 basis-1/2 disabled:bg-gray-400 py-2 my-4 text-white rounded-md"
              onClick={Continue}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
