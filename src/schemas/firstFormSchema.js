// Se imporat todo lo necesario de yup para validar campos de cada input
import * as Yup from "yup";

export const firstFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, "El nombre tiene que tener al menos 4 carácteres")
    .max(50, "El nombre no puede superar los 50 carácteres")
    .required("El campo es obligatorio"),
  lastName: Yup.string()
    .min(5, "El apellido tiene que tener al menos 5 carácteres")
    .max(50, "El apellido no puede superar los 50 carácteres")
    .required("El campo es obligatorio"),
  age: Yup.number()
    .positive("La edad tiene que ser positiva")
    .max(99, "La edad no puede superar los 99")
    .typeError('El campo edad solo admite números')
    .required("El campo es obligatorio")
});