import { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { firstFormSchema } from "../schemas/firstFormSchema";
import { TestContext } from "../context/TestContext";
import { Link } from "react-router-dom";

import { IoPersonCircleOutline } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { TbListNumbers } from "react-icons/tb";
import { GrFormNext } from "react-icons/gr";

const onSubmit = (values) => {
  console.log(values);
};

const FirstForm = () => {
  const { formData, updateFormData } = useContext(TestContext);

  return (
    <main>
      <div className="title">
        <h2>
          Datos Personales <small>1-5</small>
        </h2>
      </div>
      <div className="container-form">
        <Formik initialValues={formData} validationSchema={firstFormSchema}>
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="firstName">Primer Nombre</label>
              <div className="container-icon-input">
                <IoPersonCircleOutline className="icon" />
                <Field
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Ingresa primer nombre*"
                  autoFocus
                />
              </div>

              <ErrorMessage
                name="firstName"
                component="div"
                className="animate__animated animate__backInRight animate__delay-.5s error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="lastName">Primer Apellido</label>
              <div className="container-icon-input">
                <IoPersonCircle className="icon" />
                <Field
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Ingresa primer apellido*"
                />
              </div>
              <ErrorMessage
                name="lastName"
                component="div"
                className="animate__animated animate__backInRight animate__delay-.5s error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="age">Edad</label>
              <div className="container-icon-input">
                <TbListNumbers className="icon" />
                <Field
                  id="age"
                  name="age"
                  type="text"
                  placeholder="Ingresa la edad*"
                />
              </div>
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
        <Link to="/secondForm" className="button">
          Siguiente
        </Link>
      </div>
    </main>
  );
};

export default FirstForm;
