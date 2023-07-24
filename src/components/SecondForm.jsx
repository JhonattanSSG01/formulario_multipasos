// Se importa un hook de react para guardar datos y compartirlos entre componentes
import { useContext } from "react";
// Componente para la navegavilidad dentro de la app
import { Link } from "react-router-dom";
// Se importa varios componentes para el tema de manipular mejor los formularios
import { ErrorMessage, Field, Form, Formik } from "formik";

// Modelo para la validacion de cada campo input dentro de este formulario
import { secondFormSchema } from "../schemas/secondFormSchema";
// Contexto donde se realiza la logica para almacenar los datos y guardarlos
import { DataContext } from "../context/DataContext";

// Componentes para el manejo de iconos
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";
import { Button, LinkButton } from "../stories/Button/Button";

// Componente del segundo formulario de la app
const SecondForm = () => {
  // Se trae los atributos creados en el contexto para obtener datos y actualizarlos
  const { formData, updateFormData } = useContext(DataContext);

  return (
    <main className="container__all--main">
      <div className="container__all--title">
        <h2>
          Datos Personales <small>2-5</small>
        </h2>
      </div>
      <div className="container__all--multi">
        <Formik
          // Valores iniciales del formulario
          initialValues={formData || ""}
          // Modelo a validar de cada input
          validationSchema={secondFormSchema}
          // Validar, capturar los valores de los inputs
          validate={(values) => {
            // Actualizar el estado del contexto
            updateFormData("middleName", values.middleName),
              updateFormData("surName", values.surName),
              updateFormData("email", values.email);
          }}
        >
          {/* Se captura los valores de cada input para una validacion externa al
          formik */}
          {({ values }) => (
            <Form autoComplete="off">
              <fieldset className="container__all--fieldset">
                <label htmlFor="middleName">Segundo Nombre</label>
                <div className="container__all--fieldset-input">
                  {/* Componente icono */}
                  <IoPersonCircle className="container__all--icon" />
                  {/* Primer Input */}
                  <Field
                    id="middleName"
                    name="middleName"
                    type="text"
                    placeholder="Ingresa segundo nombre (opcional)"
                    autoFocus
                  />
                </div>
                {/* Componente error validado */}
                <ErrorMessage
                  name="middleName"
                  component="div"
                  className="container__all--error"
                />
              </fieldset>
              <fieldset className="container__all--fieldset">
                <label htmlFor="surName">Segundo apellido</label>
                <div className="container__all--fieldset-input">
                  {/* Componente icono */}
                  <IoPersonCircleOutline className="container__all--icon" />
                  {/* Segundo Input */}
                  <Field
                    id="surName"
                    name="surName"
                    type="text"
                    placeholder="Ingresa segundo apellido (opcional)"
                  />
                </div>
                {/* Componente error validado */}
                <ErrorMessage
                  name="surName"
                  component="div"
                  className="container__all--error"
                />
              </fieldset>
              <fieldset className="container__all--fieldset">
                <label htmlFor="email">Correo Electrónico</label>
                <div className="container__all--fieldset-input">
                  {/* Componente icono */}
                  <AiTwotoneMail className="container__all--icon" />
                  {/* Tercer Input */}
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Ingrese correo electrónico*"
                  />
                </div>
                {/* Componente error validado */}
                <ErrorMessage
                  name="email"
                  component="div"
                  className="container__all--error"
                />
              </fieldset>
              {/* Validar boton si los campos estan llenos correctamente para poder pasar al siguiente formulario */}
              <div className="container__all--cont-btn ">
                {/* // Componente link de storybook */}
                <LinkButton
                  to="/firstForm"
                  label="Anterior"
                  primary={true}
                  dir={false}
                  active={true}
                />
                {values.email ? (
                  // Componente link de storybook
                  <LinkButton
                    to="/thirdForm"
                    label="Siguiente"
                    primary={true}
                    dir={true}
                    active={true}
                  />
                ) : (
                  // Componente button de storybook
                  <Button label="Siguiente" primary={false} dir={true}></Button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default SecondForm;
