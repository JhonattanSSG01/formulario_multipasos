import { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { secondFormSchema } from "../schemas/secondFormSchema";
import { Link } from "react-router-dom";

import { IoPersonCircleOutline } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import { TestContext } from "../context/TestContext";

const SecondForm = () => {
  const { formData, updateFormData } = useContext(TestContext);

  return (
    <main>
      <div className="title">
        <h2>
          Datos Personales <small>2-5</small>
        </h2>
      </div>
      <div className="container-form">
        <Formik
          initialValues={formData || ""}
          validationSchema={secondFormSchema}
          validate={(values) => {
            updateFormData("middleName", values.middleName),
            updateFormData("surName", values.surName),
            updateFormData("email", values.email);
          }}
        >
          <Form autoComplete="off" noValidate>
            <fieldset>
              <label htmlFor="middleName">Segundo Nombre</label>
              <div className="container-icon-input">
                <IoPersonCircle className="icon" />
                <Field
                  id="middleName"
                  name="middleName"
                  type="text"
                  placeholder="Ingresa segundo nombre (opcional)"
                  autoFocus
                />
              </div>
              <ErrorMessage
                name="middleName"
                component="div"
                className="animate__animated animate__backInRight animate__delay-.5s error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="surName">Segundo apellido</label>
              <div className="container-icon-input">
                <IoPersonCircleOutline className="icon" />
                <Field
                  id="surName"
                  name="surName"
                  type="text"
                  placeholder="Ingresa segundo apellido (opcional)"
                />
              </div>
              <ErrorMessage
                name="surName"
                component="div"
                className="animate__animated animate__backInRight animate__delay-.5s error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="email">Correo Electrónico</label>
              <div className="container-icon-input">
                <AiTwotoneMail className="icon" />
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Ingrese correo electrónico*"
                />
              </div>
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
