import { useContext } from "react";
import FormContext from "../context/FormContext";

const FirstForm = () => {
  const { setStep } = useContext(FormContext);
  return (
    <>
      <div>FirstForm</div>
      <button
        onClick={() => {
          setStep("secondform");
        }}
      >
        SecondForm
      </button>
    </>
  );
};

export default FirstForm;
