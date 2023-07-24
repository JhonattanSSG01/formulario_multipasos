// Se importa un hook de react para guardar datos y compartirlos entre componentes
import { useContext } from "react";
// Componente para la navegavilidad dentro de la app
import { Link } from "react-router-dom";
// Se importa varios componentes para el tema de manipular mejor los formularios
import { ErrorMessage, Field, Form, Formik } from "formik";

// Modelo para la validacion de cada campo input dentro de este formulario
import { fiveFormSchema } from "../schemas/fiveFormSchema";
// Contexto donde se realiza la logica para almacenar los datos y guardarlos
import { DataContext } from "../context/DataContext";

// Componentes para el manejo de iconos
import { IoCalendarNumber } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";
import { BiSolidCommentDetail } from "react-icons/bi";
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";

// Componente del quinto formulario de la app
const FiveForm = () => {
  // Se trae los atributos creados en el contexto para obtener datos y actualizarlos
  const { formData, updateFormData } = useContext(DataContext);

  return (
    <main className="container__all--main">
      <div className="container__all--title">
        <h2>
          Datos Personales <small>5-5</small>
        </h2>
      </div>
      <div className="container__all--multi">
        <Formik
          // Valores iniciales del formulario
          initialValues={formData || ""}
          // Modelo a validar de cada input
          validationSchema={fiveFormSchema}
          // Validar, capturar los valores de los inputs
          validate={(values) => {
            // Actualizar el estado del contexto
            updateFormData("date", values.date),
              updateFormData("course", values.course),
              updateFormData("comment", values.comment);
          }}
        >
          {/* Se captura los valores de cada input para una validacion externa al formik */}
          {({ values }) => (
            <Form autoComplete="off">
              <fieldset className="container__all--fieldset">
                <label htmlFor="date">Fecha De Nacimiento</label>
                <div className="container__all--fieldset-input">
                  {/* Componente icono */}
                  <IoCalendarNumber className="container__all--icon" />
                  {/* Primer Input */}
                  <Field id="date" name="date" type="date" autoFocus />
                </div>
                {/* Componente error validado */}
                <ErrorMessage
                  name="date"
                  component="div"
                  className="container__all--error"
                />
              </fieldset>
              <fieldset className="container__all--fieldset">
                <label htmlFor="course">Curso</label>
                <div className="container__all--fieldset-input">
                  {/* Componente icono */}
                  <GrTechnology className="container__all--icon" />
                  {/* Segundo Input */}
                  <Field
                    id="course"
                    name="course"
                    type="text"
                    placeholder="Ingresa el curso a culminar*"
                  />
                </div>
                {/* Componente error validado */}
                <ErrorMessage
                  name="course"
                  component="div"
                  className="container__all--error"
                />
              </fieldset>
              <fieldset className="container__all--fieldset">
                <label htmlFor="comment">Comentario</label>
                <div className="container__all--fieldset-input">
                  {/* Componente icono */}
                  <BiSolidCommentDetail className="container__all--icon" />
                  {/* Tercer Input */}
                  <Field
                    id="comment"
                    name="comment"
                    type="text"
                    placeholder="Ingresa un comentario*"
                    className="container__all--comment"
                    as="textarea"
                  />
                </div>
                {/* Componente error validado */}
                <ErrorMessage
                  name="comment"
                  component="div"
                  className="container__all--error"
                />
              </fieldset>
              {/* Validar boton si los campos estan llenos correctamente para poder pasar al siguiente formulario */}
              <div className="container__all--cont-btn">
                <Link
                  to="/fourForm"
                  className="container__all--cont-btn--button"
                >
                  <BsArrowBarLeft className="container__all--cont-btn--icon" />
                  Anterior
                </Link>
                {values.date && values.course && values.comment ? (
                  <Link
                    to="/confirm"
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

export default FiveForm;
