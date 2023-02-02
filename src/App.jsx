import { useState } from "react";
import { ContactForm } from "./components/ContactForm";
import { useMultistepForm } from "./components/useMultistepForm";
import { UserForm } from "./components/UserForm";
import { DateForm } from "./components/DateForm";
import { AddressForm } from "./components/AddressForm";
import { AdditionalForm } from "./components/AdditionalForm";
import "../src/styles/App.css";
import { ThankYouForm } from "./components/ThankYouForm";

const INITIAL_DATA = {
  dataUpdateEmail: "",
  dataLog: "",
  dataPhone: "",
  "dataValues[serviceDataAddressCityText]": "",
  "dataValues[serviceDataAddress]": "",
  "dataValues[serviceDataCity]": "",
  "dataValues[serviceDataArea]": "",
  "dataValues[serviceHomeType]": "",
  date: "",
  docs: "",
  tips: "",
};

export const App = () => {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isLastStep, next } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <ContactForm {...data} updateFields={updateFields} />,
    <DateForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AdditionalForm {...data} updateFields={updateFields} />,
    <ThankYouForm {...data} updateFields={updateFields} />,
  ]);

  function onSubmit(e) {
    e.preventDefault();
    console.log(data);

    if (currentStepIndex === 0) {
      // fetch(
      //   "https://system.pewnylokal.pl/crm/api/newEndpoint.php?format=json",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(data),
      //   }
      // )
      //   .then((response) => response.json())
      //   .then((data) => {
      //     setData({ clientHash: data.hash });
      //     console.log("Success: ", data);
      //   })
      //   .catch((error) => {
      //     console.error("Error: ", error);
      //   });
      next();
    } else {
      if (!isLastStep) {
        // fetch(
        //   "https://system.pewnylokal.pl/crm/api/updateClientData.php?format=json",
        //   {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        //   }
        // )
        //   .then((response) => response.json())
        //   .then((data) => { 
        //     console.log("Success: ", data);
        //   })
        //   .catch((error) => {
        //     console.error("Error: ", error);
        //   });
        next();
      } else if (isLastStep) {
        // fetch(
        //   "https://system.pewnylokal.pl/crm/api/updateClientData.php?format=json",
        //   {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        //   }
        // )
        //   .then((response) => response.json())
        //   .then((data) => {
        //     console.log("Success hash: ", data.clientHash);
        //     console.log("Success: ", data);
        //   })
        //   .catch((error) => {
        //     console.error("Error: ", error);
        //   });
      }
    }
  }

  return (
    <div className="form-container">
      <div className="num-of-page">
        <img src="/img/logo.svg" alt="log" height={40} />
      </div>
      <form onSubmit={onSubmit}>
        {step}
        {isLastStep ? (
          <></>
        ) : (
          <>
            {" "}
            <div className="form-foot">
              <button className="btn-main" type="submit">
                {isLastStep ? "Koniec" : "Dalej"}
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
