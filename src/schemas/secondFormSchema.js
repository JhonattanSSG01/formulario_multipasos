import * as Yup from "yup"

export const secondFormSchema = Yup.object().shape({
  middleName: Yup.string()
    .min(4, "El nombre tiene que tener al menos 4 carácteres")
    .max(50, "El nombre no puede superar los 50 carácteres"),
  surName: Yup.string()
    .min(5, "El apellido tiene que tener al menos 5 carácteres")
    .max(50, "El apellido no puede superar los 50 carácteres"),
  email: Yup.string()
    .email("Ingrese un correo valido")
    .max(50, "El correo no puede superar los 50 carácteres")
    .required("El campo es obligatorio")
})