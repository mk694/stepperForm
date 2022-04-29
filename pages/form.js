import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Confirmation from "../components/stepper/confirmation.component";
import Step1 from "../components/stepper/step1.component";
import Step2 from "../components/stepper/step2.component";
import Step3 from "../components/stepper/step3.component";
import withAuth from "../hoc/WithAuth";

const form = () => {
  const [step, setStep] = useState(0);
  const [mFile, setMFile] = useState();
  const [error, setError] = useState(false);
  const router = useRouter();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    postalCode: "",
    address: "",
    phoneNumber: "",
    age: "",
    martialStatus: "",
    file: "",
  });

  let prevStep = () => {
    let stepValue = step;
    setStep(stepValue - 1);
  };
  let nextStep = () => {
    let stepValue = step;
    setStep(stepValue + 1);
  };
  let handleChange = (input) => (e) => {
    // if (e.target.value[input] !== "") {
    setData({ ...values, [input]: e.target.value });
  };
  let fileChange = (input) => (e) => {
    setData({ ...values, [input]: e.target.value });

    const file = e.target[0]?.files[0];
    if (!file) return;
    setMFile(file);
  };

  const values = {
    firstName: data.firstName,
    lastName: data.lastName,
    country: data.country,
    city: data.city,
    postalCode: data.postalCode,
    address: data.address,
    age: data.age,
    martialStatus: data.martialStatus,
    phoneNumber: data.phoneNumber,
    file: data.file,
  };

  switch (step) {
    case 0:
      return (
        <Step1
          values={values}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      );
    case 1:
      return (
        <Step2
          values={values}
          handleChange={handleChange}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <Step3
          values={values}
          handleChange={handleChange}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      );
    default:
      return (
        <Confirmation
          values={values}
          data={data}
          handleChange={handleChange}
          prevStep={prevStep}
          nextStep={nextStep}
          fileChange={fileChange}
          file={mFile}
        />
      );
  }
};
export default withAuth(form);
