import "./App.css";
import UserForm from "./components/userForm";
import AddressInfo from "./components/addressInfo";
import Review from "./components/review";
import Steps from "./components/steps";
import { useForm } from "./hooks/useForm";
import { useState } from "react";


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
  }

  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) =>{
    setData((prev) =>{
      return {...prev,[key]: value}
    })
  }


  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <AddressInfo data={data} updateFieldHandler={updateFieldHandler} />,
    <Review data={data} updateFieldHandler={updateFieldHandler} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);


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
              <button type="submit">
                <span>Next</span>
              </button>
            ) : (
              <button type="button">
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
