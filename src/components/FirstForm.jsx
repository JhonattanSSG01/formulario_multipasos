// Se importa un hook de react para guardar datos y compartirlos entre componentes
import { useContext } from "react";
// Componente para la navegavilidad dentro de la app
import { Link } from "react-router-dom";
// Se importa varios componentes para el tema de manipular mejor los formularios
import { ErrorMessage, Field, Form, Formik } from "formik";

// Modelo para la validacion de cada campo input dentro de este formulario
import { firstFormSchema } from "../schemas/firstFormSchema";
// Contexto donde se realiza la logica para almacenar los datos y guardarlos
import { DataContext } from "../context/DataContext";

// Componentes para el manejo de iconos
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { TbListNumbers } from "react-icons/tb";
import { BsArrowBarRight } from "react-icons/bs";

// Importamos el componente mas reutilzado con storybook
import { Button, LinkButton } from "../stories/Button/Button";


// Componente del primer formulario de la app
const FirstForm = () => {
  // Se trae los atributos creados en el contexto para obtener datos y actualizarlos
  const { formData, updateFormData } = useContext(DataContext);

  return (
    <main className="container__all--main">
      <div className="container__all--title">
        <h2>
          Datos Personales <small>1-5</small>
        </h2>
      </div>
      <div className="container__all--multi">
        <Formik
          // Valores iniciales del formulario
          initialValues={formData || ""}
          // Modelo a validar de cada input
          validationSchema={firstFormSchema}
          // Validar, capturar los valores de los inputs
          validate={(values) => {
            // Actualizar el estado del contexto
            updateFormData("firstName", values.firstName),
              updateFormData("lastName", values.lastName),
              updateFormData("age", values.age);
          }}
        >
          {/* Se captura los valores de cada input para una validacion externa al formik */}
          {({ values }) => (
            <Form autoComplete="off">
              <fieldset className="container__all--fieldset">
                <label htmlFor="firstName">Primer Nombre</label>
                <div className="container__all--fieldset-input">
                  {/* Componente icono */}
                  <IoPersonCircleOutline className="container__all--icon" />
                  {/* Primer Input */}
                  <Field
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Ingresa primer nombre*"
                    autoFocus
                  />
                </div>
                {/* Componente error validado */}
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="container__all--error"
                />
              </fieldset>
              <fieldset className="container__all--fieldset">
                <label htmlFor="lastName">Primer Apellido</label>
                <div className="container__all--fieldset-input">
                  {/* Componente icono */}
                  <IoPersonCircle className="container__all--icon" />
                  {/* Segundo Input */}
                  <Field
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Ingresa primer apellido*"
                  />
                </div>
                {/* Componente error validado */}
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="container__all--error"
                />
              </fieldset>
              <fieldset className="container__all--fieldset">
                <label htmlFor="age">Edad</label>
                <div className="container__all--fieldset-input">
                  {/* Componente icono */}
                  <TbListNumbers className="container__all--icon" />
                  {/* Tercer Input */}
                  <Field
                    id="age"
                    name="age"
                    type="text"
                    placeholder="Ingresa la edad*"
                  />
                </div>
                {/* Componente error validado */}
                <ErrorMessage
                  name="age"
                  component="div"
                  className="container__all--error"
                />
              </fieldset>
              {/* Validar boton si los campos estan llenos correctamente para poder pasar al siguiente formulario */}
              <div className="container__all--cont-btn">
                {values.firstName && values.lastName && values.age ? (
                  // Componente link de storybook
                  <LinkButton
                    to="/secondForm"
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

export default FirstForm;
