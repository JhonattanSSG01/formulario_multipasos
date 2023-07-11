import { useContext } from "react";
import FormContext from "../context/FormContext";

const FourForm = () => {
  const { setStep } = useContext(FormContext);
  return (
    <>
      <div>FourForm</div>
      <button
        onClick={() => {
          setStep("thirdform");
        }}
      >
        ThirdForm
      </button>
      <button
        onClick={() => {
          setStep("fiveform");
        }}
      >
        FiveForm
      </button>
    </>
  );
};

export default FourForm;
