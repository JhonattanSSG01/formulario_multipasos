import { useContext } from "react";
import FormContext from "../context/FormContext";

const ThirdForm = () => {
  const { setStep } = useContext(FormContext);
  return (
    <>
      <div>ThirdForm</div>
      <button
        onClick={() => {
          setStep("secondform");
        }}
      >
        SecondForm
      </button>
      <button
        onClick={() => {
          setStep("fourform");
        }}
      >
        FourForm
      </button>
    </>
  );
}

export default ThirdForm