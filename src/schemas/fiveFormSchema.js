// Se imporat todo lo necesario de yup para validar campos de cada input
import * as Yup from "yup";

export const fiveFormSchema = Yup.object().shape({
  date: Yup.date().max(new Date(), "Selecciona una fecha acorde")
    .required("El campo es obligatorio"),
  course: Yup.string()
    .min(4, "El curso tiene que tener al menos 6 carácteres")
    .max(20, "El curso no puede superar los 20 carácteres")
    .required("El campo es obligatorio"),
  comment: Yup.string()
    .min(100, "El comentario tiene que tener al menos 200 carácteres")
    .max(400, "El comentario no puede superar los 400 carácteres")
    .required("El campo es obligatorio")
});