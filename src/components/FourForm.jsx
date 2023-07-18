import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { fourFormSchema } from "../schemas/fourFormSchema";
import { Link } from "react-router-dom";

import { MdOutlineNumbers } from "react-icons/md";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { FaList } from "react-icons/fa";

// Inicialización de valores del formulario
const initialValues = {
  phoneNumber: "",
  typeId: "",
  id: "",
};

const FourForm = () => {
  return (
    <main>
      <div className="title">
        <h2>
          Datos Personales <small>4-5</small>
        </h2>
      </div>
      <div className="container-form">
        <Formik initialValues={initialValues} validationSchema={fourFormSchema}>
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
                className="animate__animated animate__backInRight animate__delay-.5s error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="typeId">Tipo De Documento</label>
              <div className="container-icon-input">
                <FaList className="icon" />
                <Field id="typeId" name="typeId" as="select" className="select">
                  <option value="">Seleccione el tipo de documento</option>
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
                className="animate__animated animate__backInRight animate__delay-.5s error-message"
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
                className="animate__animated animate__backInRight animate__delay-.5s error-message"
              />
            </fieldset>
          </Form>
        </Formik>
      </div>
      <div className="btn">
        <Link to="/thirdForm" className="button">
          Anterior
        </Link>
        <Link to="/fiveForm" className="button">
          Siguiente
        </Link>
      </div>
    </main>
  );
};

export default FourForm;
