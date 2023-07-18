import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { thirdFormSchema } from "../schemas/thirdFormSchema";
import { Link } from "react-router-dom";

// Inicialización de valores del formulario
const initialValues = {
  country: "",
  city: "",
  gender: "",
};

const ThirdForm = () => {
  return (
    <main>
      <h2>
        Datos Personales <small>3-5</small>
      </h2>
      <div className="container-form">
        <Formik
          initialValues={initialValues}
          validationSchema={thirdFormSchema}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="country">País</label>
              <Field id="country" name="country" as="select" className="select">
                <option value="">Seleccione el país de nacimiento</option>
                <option value="argentina">Argentina</option>
                <option value="brasil">Brasil</option>
                <option value="bolivia">Bolivia</option>
                <option value="chile">Chile</option>
                <option value="colombia">Colombia</option>
                <option value="ecuador">Ecuador</option>
                <option value="paraguay">Paraguay</option>
                <option value="peru">Perú</option>
                <option value="uruguay">Uruguay</option>
                <option value="venezuela">Venezuela</option>
              </Field>
              <ErrorMessage
                name="country"
                component="div"
                className="animate__animated animate__backInRight animate__delay-.5s error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="city">Ciudad</label>
              <Field
                id="city"
                name="city"
                type="text"
                placeholder="Ingresa ciudad de residencia*"
              />
              <ErrorMessage
                name="city"
                component="div"
                className="animate__animated animate__backInRight animate__delay-.5s error-message"
              />
            </fieldset>
            <fieldset>
              <h3 className="gender">Genéro</h3>
              <div className="group-radio">
                <label htmlFor="masculino">
                  <Field
                    id="masculino"
                    name="gender"
                    type="radio"
                    value="masculino"
                  />
                  Masculino
                </label>
                <label htmlFor="femenino">
                  <Field
                    id="femenino"
                    name="gender"
                    type="radio"
                    value="femenino"
                  />
                  Femenino
                </label>
                <label htmlFor="other">
                  <Field id="other" name="gender" type="radio" value="other" />
                  Prefiero no decirlo
                </label>
              </div>
              <ErrorMessage
                name="gender"
                component="div"
                className="animate__animated animate__backInRight animate__delay-.5s error-message"
              />
            </fieldset>
          </Form>
        </Formik>
      </div>
      <div className="btn">
        <Link to="/secondForm" className="button">
          Anterior
        </Link>
        <Link to="/fourForm" className="button">
          Siguiente
        </Link>
      </div>
    </main>
  );
};

export default ThirdForm;
