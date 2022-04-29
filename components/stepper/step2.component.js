export default function Step2({ prevStep, nextStep, handleChange, values }) {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <section>
      <h1 className="text-center text-4xl uppercase font-bold p-10">Step 2</h1>
      <div className="flex justify-center w-full">
        <div className="mb-4">
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="country"
            >
              Country
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="country"
              type="text"
              placeholder="Enter Country Name"
              onChange={handleChange("country")}
              defaultValue={values.country}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="city"
            >
              City
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="country"
              type="text"
              placeholder="Enter City"
              onChange={handleChange("city")}
              defaultValue={values.city}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="postalCode"
            >
              Postal Code
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="postalCode"
              type="text"
              placeholder="Enter Postal Code"
              onChange={handleChange("postalCode")}
              defaultValue={values.postalCode}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="city"
            >
              Address
            </label>
            <textarea
              className=" shadow appearance-none border rounded w-full py-2 px-3
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="country"
              type="text"
              placeholder="Enter Address"
              onChange={handleChange("address")}
              defaultValue={values.address}
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
              className="bg-green-500 basis-1/2  py-2 my-4 text-white rounded-md"
              onClick={Continue}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
