import { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { firstFormSchema } from "../schemas/firstFormSchema";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";

import { IoPersonCircleOutline } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { TbListNumbers } from "react-icons/tb";
import { BsArrowBarRight } from "react-icons/bs";

const FirstForm = () => {
  const { formData, updateFormData } = useContext(DataContext);

  return (
    <main>
      <div className="title">
        <h2>
          Datos Personales <small>1-5</small>
        </h2>
      </div>
      <div className="container-form">
        <Formik
          initialValues={formData || ""}
          validationSchema={firstFormSchema}
          validate={(values) => {
            updateFormData("firstName", values.firstName),
              updateFormData("lastName", values.lastName),
              updateFormData("age", values.age);
          }}
        >
          {({ values }) => (
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
                  className="error-message"
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
                  className="error-message"
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
                  className="error-message"
                />
              </fieldset>
              <div className="btn">
                {values.firstName && values.lastName && values.age ? (
                  <Link
                    to="/secondForm"
                    className="button button-icon"
                  >
                    Siguiente
                    <BsArrowBarRight className="icon" />
                  </Link>
                ) : (
                  <button type="submit" className="button button-icon">
                    Siguiente
                    <BsArrowBarRight className="icon" />
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

export default FirstForm;
