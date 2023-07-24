// Se importa un hook de react para guardar datos y compartirlos entre componentes
import { useContext } from "react";
// Componente para la navegavilidad dentro de la app
import { Link } from "react-router-dom";
// Se importa varios componentes para el tema de manipular mejor los formularios
import { ErrorMessage, Field, Form, Formik } from "formik";

// Modelo para la validacion de cada campo input dentro de este formulario
import { fourFormSchema } from "../schemas/fourFormSchema";
// Contexto donde se realiza la logica para almacenar los datos y guardarlos
import { DataContext } from "../context/DataContext";

// Componentes para el manejo de iconos
import { MdOutlineNumbers } from "react-icons/md";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { FaList } from "react-icons/fa";
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";

// Componente del cuarto formulario de la app
const FourForm = () => {
  const { formData, updateFormData } = useContext(DataContext);

  return (
    <main className="container__all--main">
      <div className="container__all--title">
        <h2>
          Datos Personales <small>4-5</small>
        </h2>
      </div>
      <div className="container__all--multi">
        <Formik
          // Valores iniciales del formulario
          initialValues={formData || ""}
          // Modelo a validar de cada input
          validationSchema={fourFormSchema}
          // Validar, capturar los valores de los inputs
          validate={(values) => {
            // Actualizar el estado del contexto
            updateFormData("phoneNumber", values.phoneNumber),
              updateFormData("typeId", values.typeId),
              updateFormData("id", values.id);
          }}
        >
          {/* Se captura los valores de cada input para una validacion externa al formik */}
          {({ values }) => (
            <Form autoComplete="off">
              <fieldset className="container__all--fieldset">
                <label htmlFor="phoneNumber">Número Celular</label>
                <div className="container__all--fieldset-input">
                  {/* Componente icono */}
                  <MdOutlineNumbers className="container__all--icon" />
                  {/* Primer Input */}
                  <Field
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    placeholder="Ingresa número de celular*"
                    autoFocus
                  />
                </div>
                {/* Componente error validado */}
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="container__all--error"
                />
              </fieldset>
              <fieldset className="container__all--fieldset">
                <label htmlFor="typeId">Tipo De Documento</label>
                <div className="container__all--fieldset-input">
                  {/* Componente icono */}
                  <FaList className="container__all--icon" />
                  {/* Segundo Input */}
                  <Field
                    id="typeId"
                    name="typeId"
                    as="select"
                    className="select"
                  >
                    <option value="" selected>
                      Seleccione el tipo de documento*
                    </option>
                    <option value="CC">Cédula de Ciudadanía</option>
                    <option value="CE">Cédula de Extranjería</option>
                    <option value="ID">Docuemnto de Identidad</option>
                    <option value="PA">Pasaporte</option>
                    <option value="lLC">Licencia de Conducir</option>
                  </Field>
                </div>
                {/* Componente error validado */}
                <ErrorMessage
                  name="typeId"
                  component="div"
                  className="container__all--error"
                />
              </fieldset>
              <fieldset className="container__all--fieldset">
                <label htmlFor="id">Documento</label>
                <div className="container__all--fieldset-input">
                  {/* Componente icono */}
                  <AiOutlineFieldNumber className="container__all--icon" />
                  {/* Tercer Input */}
                  <Field
                    id="id"
                    name="id"
                    type="text"
                    placeholder="Ingresa número del documento*"
                  />
                </div>
                {/* Componente error validado */}
                <ErrorMessage
                  name="id"
                  component="div"
                  className="container__all--error"
                />
              </fieldset>
              {/* Validar boton si los campos estan llenos correctamente para poder pasar al siguiente formulario */}
              <div className="container__all--cont-btn">
                <Link
                  to="/thirdForm"
                  className="container__all--cont-btn--button"
                >
                  <BsArrowBarLeft className="container__all--cont-btn--icon" />
                  Anterior
                </Link>
                {values.phoneNumber && values.typeId && values.id ? (
                  <Link
                    to="/fiveForm"
                    className="container__all--cont-btn--button"
                  >
                    Siguiente
                    <BsArrowBarRight className="container__all--cont-btn--icon" />
                  </Link>
                ) : (
                  <button
                    type="submit"
                    className="container__all--cont-btn--button"
                  >
                    Siguiente
                    <BsArrowBarRight className="container__all--cont-btn--icon" />
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

export default FourForm;
