import { useContext } from "react";
import FormContext from "../context/FormContext";

const FiveForm = () => {
  const { setStep } = useContext(FormContext)
  return (
    <>
      <div>FiveForm</div>
      <button onClick={() => {
        setStep("fourform")}}>FourForm</button>
      <button >Enviar</button>
    </>
  );
}

export default FiveForm