import * as Yup from "yup"

export const thirdFormSchema = Yup.object().shape({
  country: Yup.string()
    .oneOf(["argentina", "brasil", "bolivia", "chile", "colombia", "ecuador", "paraguay", "peru", "uruguay", "venezuela"], "Debes sellecionar un pais valido")
    .required("El campo es obligatorio"),
  city: Yup.string()
    .min(4, "La ciudad tiene que tener al menos 4 carácteres")
    .max(10, "La ciudad no puede superar los 10 carácteres")
    .required("El campo es obligatorio"),
  gender: Yup.string()
    .required("Seleccione un genéro valido")
    .oneOf(["masculino", "femenino", "other"], 'Seleccione un genéro valido'),
})