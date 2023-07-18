import { useContext } from "react";
import {TestContext} from "../context/TestContext";

const ConfirmData = () => {
  const formData = useContext(TestContext);

  console.log({formData});

  return (
    <>
      <h2>{formData.firstName}</h2>
    </>
  );
};

export default ConfirmData;
