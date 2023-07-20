import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { fourFormSchema } from "../schemas/fourFormSchema";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

import { MdOutlineNumbers } from "react-icons/md";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { FaList } from "react-icons/fa";
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";

const FourForm = () => {
  const { formData, updateFormData } = useContext(DataContext);

  return (
    <main>
      <div className="title">
        <h2>
          Datos Personales <small>4-5</small>
        </h2>
      </div>
      <div className="container-form">
        <Formik
          initialValues={formData || ""}
          validationSchema={fourFormSchema}
          validate={(values) => {
            updateFormData("phoneNumber", values.phoneNumber),
              updateFormData("typeId", values.typeId),
              updateFormData("id", values.id);
          }}
        >
          {({ values }) => (
            <Form autoComplete="off">
              <fieldset>
                <label htmlFor="phoneNumber">Número Celular</label>
                <div className="container-icon-input">
                  <MdOutlineNumbers className="icon" />
                  <Field
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    placeholder="Ingresa número de celular*"
                    autoFocus
                  />
                </div>
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="error-message"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="typeId">Tipo De Documento</label>
                <div className="container-icon-input">
                  <FaList className="icon" />
                  <Field
                    id="typeId"
                    name="typeId"
                    as="select"
                    className="select"
                  >
                    <option value="" selected>
                      Seleccione el tipo de documento*
                    </option>
                    <option value="cc">Cédula de Ciudadanía</option>
                    <option value="ce">Cédula de Extranjería</option>
                    <option value="id">Docuemnto de Identidad</option>
                    <option value="pa">Pasaporte</option>
                    <option value="lc">Licencia de Conducir</option>
                  </Field>
                </div>
                <ErrorMessage
                  name="typeId"
                  component="div"
                  className="error-message"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="id">Documento</label>
                <div className="container-icon-input">
                  <AiOutlineFieldNumber className="icon" />
                  <Field
                    id="id"
                    name="id"
                    type="text"
                    placeholder="Ingresa número del documento*"
                  />
                </div>
                <ErrorMessage
                  name="id"
                  component="div"
                  className="error-message"
                />
              </fieldset>
              <div className="btn">
                <Link to="/thirdForm" className="button button-icon">
                  <BsArrowBarLeft className="icon" />
                  Anterior
                </Link>
                <button type="submit" className="button button-icon">
                  {values.phoneNumber && values.typeId && values.id ? (
                    <Link to="/fiveForm" className="button-link">
                      Siguiente
                    </Link>
                  ) : (
                    "Siguiente"
                  )}
                  <BsArrowBarRight className="icon" />
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default FourForm;
