import { useContext } from "react";
import {TestContext} from "../context/TestContext";

const ConfirmData = () => {
  const {formData} = useContext(TestContext);

  console.log({formData});

  return (
    <>
      <h2>{formData.firstName}</h2>
      <h2>{formData.lastName}</h2>
      <h2>{formData.age}</h2>
      <h2>{formData.middleName}</h2>
      <h2>{formData.surName}</h2>
      <h2>{formData.email}</h2>
    </>
  );
};

export default ConfirmData;
