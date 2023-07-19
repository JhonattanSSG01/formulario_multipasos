import { createContext, useState } from "react";
import { initialValues } from "../values/initialValues";

export const TestContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({initialValues});

  // Función para actualizar el estado del formulario
  const updateFormData = (key, formData) => {
     setFormData((prev) => {
      return {...prev, [key]:formData}
     });

  };
  
  return (
    <TestContext.Provider value={{ formData, updateFormData }}>
      {children}
    </TestContext.Provider>
  );
}




