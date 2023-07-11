import { useContext } from "react";
import FormContext from "../context/FormContext";

const SecondForm = () => {
  const { setStep } = useContext(FormContext);
  return (
    <>
      <div>SecondForm</div>
      <button
        onClick={() => {
          setStep("firstform");
        }}
      >
        FirstForm
      </button>
      <button
        onClick={() => {
          setStep("thirdform");
        }}
      >
        ThirdForm
      </button>
    </>
  );
};

export default SecondForm;
