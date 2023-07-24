// Se importa el hook de estado de los datos y el crear un contexto para compartir datos entre componentes
import { createContext, useState } from "react";
// Se importa el objetos con los valores iniciales de los inputs
import { initialValues } from "../values/initialValues";

// Se crea el contexto y se exporta para su uso externamente
export const DataContext = createContext();

// Se crea un componente donde se engloba que todos los componentes hijos del contexto pueden acceder a los datos correctamente
export const FormProvider = ({ children }) => {
  // Se crear el estado de los valores iniciales
  const [formData, setFormData] = useState(initialValues);

  // Función para actualizar el estado del formulario
  const updateFormData = (key, formData) => {
     setFormData((prev) => {
      return {...prev, [key]:formData}
     });

  };
  
  return (
    <DataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </DataContext.Provider>
  );
}




