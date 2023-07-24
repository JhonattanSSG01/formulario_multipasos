// Se importa un hook de react para guardar datos y compartirlos entre componentes
import { useContext } from "react";
// Componente para la navegavilidad dentro de la app
import { Link } from "react-router-dom";
// Se importa varios componentes para el tema de manipular mejor los formularios
import { ErrorMessage, Field, Form, Formik } from "formik";

// Modelo para la validacion de cada campo input dentro de este formulario
import { thirdFormSchema } from "../schemas/thirdFormSchema";
// Contexto donde se realiza la logica para almacenar los datos y guardarlos
import { DataContext } from "../context/DataContext";

// Componentes para el manejo de iconos
import { BiSolidMapPin } from "react-icons/bi";
import { BiSolidCity } from "react-icons/bi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";

// Componente del tercer formulario de la app
const ThirdForm = () => {
  // Se trae los atributos creados en el contexto para obtener datos y actualizarlos
  const { formData, updateFormData } = useContext(DataContext);

  return (
    <main className="container__all--main">
      <div className="container__all--title">
        <h2>
          Datos Personales <small>3-5</small>
        </h2>
      </div>
      <div className="container__all--multi">
        <Formik
          // Valores iniciales del formulario
          initialValues={formData || ""}
          // Modelo a validar de cada input
          validationSchema={thirdFormSchema}
          // Validar, capturar los valores de los inputs
          validate={(values) => {
            // Actualizar el estado del contexto
            updateFormData("country", values.country),
              updateFormData("city", values.city),
              updateFormData("gender", values.gender);
          }}
        >
          {/* Se captura los valores de cada input para una validacion externa al formik */}
          {({ values }) => (
            <Form autoComplete="off">
              <fieldset className="container__all--fieldset">
                <label htmlFor="country">País</label>
                <div className="container__all--fieldset-input">
                  {/* Componente icono */}
                  <BiSolidMapPin className="container__all--icon" />
                  {/* Primer Input */}
                  <Field
                    id="country"
                    name="country"
                    as="select"
                    className="select"
                  >
                    <option value="">Seleccione el país de nacimiento</option>
                    <option value="argentina">Argentina</option>
                    <option value="brasil">Brasil</option>
                    <option value="bolivia">Bolivia</option>
                    <option value="chile">Chile</option>
                    <option value="colombia">Colombia</option>
                    <option value="ecuador">Ecuador</option>
                    <option value="paraguay">Paraguay</option>
                    <option value="peru">Perú</option>
                    <option value="uruguay">Uruguay</option>
                    <option value="venezuela">Venezuela</option>
                  </Field>
                </div>
                {/* Componente error validado */}
                <ErrorMessage
                  name="country"
                  component="div"
                  className="container__all--error"
                />
              </fieldset>
              <fieldset className="container__all--fieldset">
                <label htmlFor="city">Ciudad</label>
                <div className="container__all--fieldset-input">
                  {/* Componente icono */}
                  <BiSolidCity className="container__all--icon" />
                  {/* Segundo Input */}
                  <Field
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Ingresa ciudad de residencia*"
                  />
                </div>
                {/* Componente error validado */}
                <ErrorMessage
                  name="city"
                  component="div"
                  className="container__all--error"
                />
              </fieldset>
              <fieldset className="container__all--fieldset">
                <h3 className="gender">Genéro</h3>
                <div className="container__all--fieldset-input">
                  {/* Componente icono */}
                  <BsGenderAmbiguous className="container__all--icon" />
                  {/* Tercer Input */}
                  <div className="container__all--radio">
                    <label htmlFor="masculino">
                      <Field
                        id="masculino"
                        name="gender"
                        type="radio"
                        value="masculino"
                      />
                      Masculino
                    </label>
                    <label htmlFor="femenino">
                      <Field
                        id="femenino"
                        name="gender"
                        type="radio"
                        value="femenino"
                      />
                      Femenino
                    </label>
                    <label htmlFor="other">
                      <Field
                        id="other"
                        name="gender"
                        type="radio"
                        value="other"
                      />
                      Prefiero no decirlo
                    </label>
                  </div>
                </div>
                {/* Componente error validado */}
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="container__all--error"
                />
              </fieldset>
              {/* Validar boton si los campos estan llenos correctamente para poder pasar al siguiente formulario */}
              <div className="container__all--cont-btn">
                <Link
                  to="/secondForm"
                  className="container__all--cont-btn--button"
                >
                  <BsArrowBarLeft className="container__all--icon" />
                  Anterior
                </Link>
                {values.country && values.city && values.gender ? (
                  <Link
                    to="/fourForm"
                    className="container__all--cont-btn--button"
                  >
                    Siguiente
                    <BsArrowBarRight className="container__all--icon" />
                  </Link>
                ) : (
                  <button
                    type="submit"
                    className="container__all--cont-btn--button"
                  >
                    Siguiente
                    <BsArrowBarRight className="container__all--icon" />
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default ThirdForm;
