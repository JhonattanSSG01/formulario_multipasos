import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { fiveFormSchema } from "../schemas/fiveFormSchema";
import { Link } from "react-router-dom";

import { IoCalendarNumber } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";
import { BiSolidCommentDetail } from "react-icons/bi";
import { AiOutlineSend } from "react-icons/ai";

// Inicialización de valores del formulario
const initialValues = {
  date: "",
  course: "",
};

const FiveForm = () => {
  return (
    <main>
      <div className="title">
        <h2>
          Datos Personales <small>5-5</small>
        </h2>
      </div>
      <div className="container-form">
        <Formik initialValues={initialValues} validationSchema={fiveFormSchema}>
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="date">Fecha De Nacimiento</label>
              <div className="container-icon-input">
                <IoCalendarNumber className="icon" />
                <Field id="date" name="date" type="date" autoFocus />
              </div>
              <ErrorMessage
                name="date"
                component="div"
                className="animate__animated animate__backInRight animate__delay-.5s error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="course">Curso</label>
              <div className="container-icon-input">
                <GrTechnology className="icon"/>
                <Field
                  id="course"
                  name="course"
                  type="text"
                  placeholder="Ingresa el curso a culminar"
                />
              </div>
              <ErrorMessage
                name="course"
                component="div"
                className="animate__animated animate__backInRight animate__delay-.5s error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="comment">Comentario</label>
              <div className="container-icon-input">
                <BiSolidCommentDetail className="icon" />
                <Field
                  id="comment"
                  name="comment"
                  type="text"
                  placeholder="Ingresa un comentario"
                  className="coment"
                  as="textarea"
                />
              </div>
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
        <button className="button submit">
          <AiOutlineSend className="icon" />
          Enviar
        </button>
      </div>
    </main>
  );
};

export default FiveForm;
