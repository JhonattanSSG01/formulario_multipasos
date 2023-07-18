import { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { firstFormSchema } from "../schemas/firstFormSchema";
import {TestContext} from "../context/TestContext";
import { Link } from "react-router-dom";

const onSubmit = (values) => {
  console.log(values);
};

const FirstForm = () => {
  const { formData, updateFormData } = useContext(TestContext);

  return (
    <main>
      <h2>
        Datos Personales <small>1-5</small>
      </h2>
      <div className="container-form">
        <Formik initialValues={formData} validationSchema={firstFormSchema}>
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="firstName">Primer Nombre</label>
              <Field
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Ingresa primer nombre*"
                autoFocus
              />

              <ErrorMessage
                name="firstName"
                component="div"
                className="animate__animated animate__backInRight animate__delay-.5s error-message"
              />
            </fieldset>
            <fieldset>
            <label htmlFor="lastName">Primer Apellido</label>
            <Field
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Ingresa primer apellido*"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="animate__animated animate__backInRight animate__delay-.5s error-message"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="age">Edad</label>
            <Field
              id="age"
              name="age"
              type="text"
              placeholder="Ingresa la edad*"
            />
            <ErrorMessage
              name="age"
              component="div"
              className="animate__animated animate__backInRight animate__delay-.5s error-message"
            />
          </fieldset>
          </Form>
        </Formik>
      </div>
      <div className="btn">
        <Link to="/secondForm" className="button" onClick={updateFormData}>
          Siguiente
        </Link>
      </div>
    </main>
  );
};

export default FirstForm;
