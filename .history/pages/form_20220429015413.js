import { useEffect, useState } from "react";
import Confirmation from "../components/stepper/confirmation.component";
import Step1 from "../components/stepper/step1.component";
import Step2 from "../components/stepper/step2.component";
import Step3 from "../components/stepper/step3.component";

export default function form() {
  const [step, setStep] = useState(0);

  let prevStep = () => {
    let stepValue = step;
    setStep(stepValue - 1);
  };
  let nextStep = () => {
    let stepValue = step;
    setStep(stepValue + 1);
  };
  let handleChange = (input) => (e) => {
    setData({ ...values, [input]: e.target.value });
  };

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
    // creditCardNumber: "",
    // cvc: "",
    // expDate: "",
  });

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
    // creditCardNumber: data.creditCardNumber,
    // cvc: data.cvc,
    // expDate: data.expDate,
  };

  switch (step) {
    case 0:
      return (
        <>
          <Step1
            values={values}
            handleChange={handleChange}
            nextStep={nextStep}
          />
          {/* {JSON.stringify(data)} */}
        </>
      );
    case 1:
      return (
        <>
          <Step2
            values={values}
            handleChange={handleChange}
            prevStep={prevStep}
            nextStep={nextStep}
          />
          {/* {JSON.stringify(data)} */}
        </>
      );
    case 2:
      return (
        <>
          <Step3
            values={values}
            handleChange={handleChange}
            prevStep={prevStep}
            nextStep={nextStep}
          />
          {/* {JSON.stringify(data)} */}
        </>
      );
    default:
      return (
        <>
          {" "}
          <Confirmation
            values={values}
            handleChange={handleChange}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        </>
      );
  }
}
