import { useState } from "react";
import { ContactForm } from "./components/ContactForm";
import { useMultistepForm } from "./components/useMultistepForm";
import { UserForm } from "./components/UserForm";
import { DateForm } from "./components/DateForm";
import { AddressForm } from "./components/AddressForm";
import { AdditionalForm } from "./components/AdditionalForm";
import "../src/styles/App.css";

const INITIAL_DATA = {
  phone: "",
  propertyType: "",
  voivodeship: "",
  email: "",
  area: "",
  date: "",
  city: "",
  street: "",
  tips: "",
  extraInfo: "",
  docs: "",
};

export const App = () => {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <ContactForm {...data} updateFields={updateFields} />,
      <DateForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AdditionalForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();

    fetch("https://example.com/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        // TODO REMOVE
        console.log("Error but: ", data);

        //
        console.error("Error:", error);
      });
  }

  return (
    <div className="form-container">
      <div className="num-of-page">
        <img src="/img/logo.svg" alt="log" height={40} />
        {currentStepIndex + 1} / {steps.length}
      </div>
      <form onSubmit={onSubmit}>
        {step}
        <div className="form-foot">
          <button className="btn-main" type="submit">{isLastStep ? "Wyślij" : "Dalej"}</button>
          {!isFirstStep && (
            <button className="btn-second" type="button" onClick={back}>
              Cofnij
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
