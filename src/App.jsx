import { useEffect, useState } from "react";
import { ContactForm } from "./components/ContactForm";
import { UseMultistepForm } from "./components/UseMultistepForm";
import { UserForm } from "./components/UserForm";
import { DateForm } from "./components/DateForm";
import { AddressForm } from "./components/AddressForm";
import { AdditionalForm } from "./components/AdditionalForm";
import { ThankYouForm } from "./components/ThankYouForm";
import "../src/styles/App.css";
import { useAddHiddenInputs } from "./scripts/Hidden";

const INITIAL_DATA = {
  dataLog: "",
  dataPhone: "",
  dataEmailTemplate: "odbiorymieszkan.info.php",
  dataSMSTemplate: "odbiorymieszkan.info.php",
  dataTags: {
    3: "1",
    4: "1",
  },
  "dataValues[serviceDataType]": 394,
  "dataValues[serviceClientSource]": 19,
  "dataValues[serviceClientChannel]": 39,
  "dataValues[serviceDataAddressCityText]": "",
  "dataValues[serviceDataAddress]": "",
  "dataValues[serviceDataCity]": "",
  "dataValues[serviceDataArea]": "",
  "dataValues[serviceHomeType]": "",
  "dataValues[serviceDataServiceDate]": "",
  "dataValues[serviceDataServiceDateAccuracyBox]": 627,
  dataUpdateEmail: "",
  docs: "",
  submit: 1,
  tips: "",
  street: "",
};

export const App = () => {
  const [data, setData] = useState(INITIAL_DATA);

  // Callback function to update data state
  const updateData = (newData) => {
    setData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  useAddHiddenInputs("my-form", updateData);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const hash = urlParams.get("hash");
    if (hash) {
      setData((prevData) => ({
        ...prevData,
        clientHash: hash,
      }));
      window.pagesense = window.pagesense || [];
      window.pagesense.push(["trackEvent", "leady dla om"]);
      next(); // Move to the next step if hash is present
    }
  }, []);

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { isFirstStep, step, isLastStep, next } = UseMultistepForm([
    <UserForm key={1} {...data} updateFields={updateFields} />,
    <ContactForm key={2} {...data} updateFields={updateFields} />,
    <AddressForm key={3} {...data} updateFields={updateFields} />,
    <DateForm key={4} {...data} updateFields={updateFields} />,
    <AdditionalForm key={5} {...data} updateFields={updateFields} />,
    <ThankYouForm key={6} {...data} updateFields={updateFields} />,
  ]);

  function onSubmit(e) {
    e.preventDefault();

    if (isFirstStep) {
      const formData = { ...data };
      console.log({ formData });
      fetch(
        "https://system.pewnylokal.pl/crm/api/newEndpoint.php?format=json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setData({
            clientHash: data.hash,
            submit: 1,
            dataEmailTemplate: "odbiorymieszkan.info.php",
          });
          window.pagesense = window.pagesense || [];
          window.pagesense.push(["trackEvent", "leady dla om"]);
          console.log("Endpoint Success: ", data);
        })
        .catch((error) => {
          console.error("Endpoint Error: ", error);
        });
      next();
      setData({
        dataEmailTemplate: "odbiorymieszkan.info.php",
        clientHash: data.clientHash,
        submit: 1,
      });
    } else if (!isLastStep) {
      console.log(data);
      fetch(
        "https://system.pewnylokal.pl/crm/api/updateClientData.php?format=json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((response) => {
          response.json();
        })
        .then((data) => {
          console.log("UpdateClientData Success: ", data);
        })
        .catch((error) => {
          console.error("UpdateClientData Error: ", error);
        });
      next();
      setData({
        dataEmailTemplate: "",
        clientHash: data.clientHash,
        submit: 1,
      });
    }
  }

  return (
    <div className="form-container">
      <div className="num-of-page">
        <img src="logo.svg" alt="logo" height={40} width={129.31} />
      </div>
      <form onSubmit={onSubmit} id="my-form">
        {step}
        {isLastStep ? (
          <></>
        ) : (
          <div className="form-foot">
            <button className="btn-main" type="submit">
              Dalej
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
