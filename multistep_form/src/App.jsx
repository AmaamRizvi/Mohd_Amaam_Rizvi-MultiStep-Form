import "./App.css";
import UserForm from "./components/userForm";
import AddressInfo from "./components/addressInfo";
import Review from "./components/review";
import Steps from "./components/steps";
import { useForm } from "./hooks/useForm";
import { useState, useEffect } from "react";

function App() {
  const formTemplate = {
    name: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
  };

  const [data, setData] = useState(formTemplate);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
    setErrors((prev) => {
      return { ...prev, [key]: "" };
    });
  };

  const formComponents = [
    <UserForm
      data={data}
      updateFieldHandler={updateFieldHandler}
      errors={errors}
    />,
    <AddressInfo
      data={data}
      updateFieldHandler={updateFieldHandler}
      errors={errors}
    />,
    <Review data={data} updateFieldHandler={updateFieldHandler} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    if (currentStep === 1) {
      if (!data.addressLine1) {
        formIsValid = false;
        newErrors.addressLine1 = "Address Line 1 is required";
      }
      if (!data.addressLine2) {
        formIsValid = false;
        newErrors.addressLine2 = "Address Line 2 is required";
      }
      if (!data.city) {
        formIsValid = false;
        newErrors.city = "City is required";
      }
      if (!data.state) {
        formIsValid = false;
        newErrors.state = "State is required";
      }
      if (!data.zipCode) {
        formIsValid = false;
        newErrors.zipCode = "Zip Code is required";
      }
    }

    setErrors(newErrors);
    setIsFormValid(formIsValid);
  };

  useEffect(() => {
    validateForm();
  }, [data, currentStep]);

  return (
    <div className="app">
      <div className="header">
        <h2>GURUCOOL</h2>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <span>Back</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit" disabled={!isFormValid}>
                <span>Next</span>
              </button>
            ) : (
              <button type="button" disabled={!isFormValid}>
                <span>Submit</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
