import * as Yup from "yup"

export const fourFormSchema = Yup.object().shape({
  phoneNumber: Yup.number()
    .positive("El número celular tiene que ser positiva")
    .min(400000000, "El número celular tiene que tener el limite requerido")
    .max(4000000000, "El número celular no puede superar este límite")
    .typeError('El campo número celular solo admite números')
    .required("El campo es obligatorio"),
  typeId: Yup.string()
    .oneOf(["CC", "CE", "ID", "PA", "LC"], "Debes sellecionar un tipo de docuemnto valido")
    .required("El campo es obligatorio"),
  id: Yup.number()
    .positive("El documento tiene que ser positiva")
    .min(1000000000, "El documento tiene que tener el limite requerido")
    .max(10000000000, "El documento no puede superar este límite")
    .typeError('El campo documento solo admite números')
    .required("El campo es obligatorio"),
})