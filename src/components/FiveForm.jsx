import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { fiveFormSchema } from "../schemas/fiveFormSchema";
import { Link } from "react-router-dom";

// Inicialización de valores del formulario
const initialValues = {
  date: "",
  course: "",
};

const FiveForm = () => {
  return (
    <main>
      <h2>
        Datos Personales <small>5-5</small>
      </h2>
      <div className="container-form">
        <Formik initialValues={initialValues} validationSchema={fiveFormSchema}>
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="date">Fecha De Nacimiento</label>
              <Field
                id="date"
                name="date"
                type="date"
                autoFocus
              />
              <ErrorMessage
                name="date"
                component="div"
                className="animate__animated animate__backInRight animate__delay-.5s error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="course">Curso</label>
              <Field
                id="course"
                name="course"
                type="text"
                placeholder="Ingresa el curso a culminar"
              />
              <ErrorMessage
                name="course"
                component="div"
                className="animate__animated animate__backInRight animate__delay-.5s error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="comment">Comentario</label>
              <Field
                id="comment"
                name="comment"
                type="text"
                placeholder="Ingresa un comentario"
                className="coment"
                as="textarea"
              />
              <ErrorMessage
                name="comment"
                component="div"
                className="animate__animated animate__backInRight animate__delay-.5s error-message"
              />
            </fieldset>
          </Form>
        </Formik>
      </div>
      <div className="btn">
        <Link to="/fourForm" className="button">
          Anterior
        </Link>
        <button className="button">Enviar</button>
      </div>
    </main>
  );
};

export default FiveForm;
