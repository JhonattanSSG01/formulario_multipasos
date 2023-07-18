import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { secondFormSchema } from "../schemas/secondFormSchema";
import { Link } from "react-router-dom";

// Inicialización de valores del formulario
const initialValues = {
  middleName: "",
  surName: "",
  email: "",
};

const SecondForm = () => {
  return (
    <main>
      <h2>
        Datos Personales <small>2-5</small>
      </h2>
      <div className="container-form">
        <Formik
          initialValues={initialValues}
          validationSchema={secondFormSchema}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="middleName">Segundo Nombre</label>
              <Field
                id="middleName"
                name="middleName"
                type="text"
                placeholder="Ingresa segundo nombre (opcional)"
                autoFocus
              />
              <ErrorMessage
                name="middleName"
                component="div"
                className="animate__animated animate__backInRight animate__delay-.5s error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="surName">Segundo apellido</label>
              <Field
                id="surName"
                name="surName"
                type="text"
                placeholder="Ingresa segundo apellido (opcional)"
              />
              <ErrorMessage
                name="surName"
                component="div"
                className="animate__animated animate__backInRight animate__delay-.5s error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="email">Correo Electrónico</label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Ingrese correo electrónico*"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="animate__animated animate__backInRight animate__delay-.5s error-message"
              />
            </fieldset>
          </Form>
        </Formik>
      </div>
      <div className="btn">
        <Link to="/firstForm" className="button">
          Anterior
        </Link>
        <Link to="/thirdForm" className="button">
          Siguiente
        </Link>
      </div>
    </main>
  );
};

export default SecondForm;
