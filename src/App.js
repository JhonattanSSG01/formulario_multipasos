import { useState} from "react";
import FirstForm from "./components/FirstForm";
import SecondForm from "./components/SecondForm";
import ThirdForm from "./components/ThirdForm";
import FourForm from "./components/FourForm";
import FiveForm from "./components/FiveForm";

import FormContext from "./context/FormContext";

const App = () => {
  const  [step, setStep] = useState("firstform");
  return (
    <FormContext.Provider value={{ step,setStep }}>
      <div class="container">
        {step === 'firstform' && <FirstForm />}
        {step === 'secondform' && <SecondForm />}
        {step === 'thirdform' && <ThirdForm />}
        {step === 'fourform' && <FourForm />}
        {step === 'fiveform' && <FiveForm />}
      </div>
    </FormContext.Provider>
  );
}

export default App;
