import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Formik, Form } from "formik";

import { BiSend } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const ConfirmData = () => {
  const { formData } = useContext(DataContext);

  const onSubmit = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      text: "Tus datos han sido enviados exitosamente",
      showConfirmButton: false,
      timer: 1500,
    });
    Object.keys(formData).forEach((key) => {
      formData[key] = "";
    });
  };

  return (
    <main className="main-confirm">
      <div className="title">
        <h2>Datos a confirmar</h2>
      </div>
      <div className="container-confirm">
        <article>
          <details open>
            <summary>
              Primer Nombre <IoIosArrowForward className="icon" />
            </summary>
            <p>{formData.firstName}</p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Primer Apellido <IoIosArrowForward className="icon" />
            </summary>
            <p>{formData.lastName}</p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Segundo Nombre <IoIosArrowForward className="icon" />
            </summary>
            <p>{formData.middleName ? formData.middleName : "Ninguno"}</p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Segundo Apellido
              <IoIosArrowForward className="icon" />
            </summary>
            <p>{formData.surName ? formData.surName : "Ninguno"}</p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Edad <IoIosArrowForward className="icon" />
            </summary>
            <p>{formData.age}</p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Email <IoIosArrowForward className="icon" />
            </summary>
            <textarea disabled>{formData.email}</textarea>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Fecha De Nacimiento <IoIosArrowForward className="icon" />
            </summary>
            <p>{formData.date}</p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              País <IoIosArrowForward className="icon" />
            </summary>
            <p>{formData.country}</p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Ciudad <IoIosArrowForward className="icon" />
            </summary>
            <p>{formData.city}</p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Genéro <IoIosArrowForward className="icon" />
            </summary>
            <p>{formData.gender}</p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Número Celular <IoIosArrowForward className="icon" />
            </summary>
            <p>{formData.phoneNumber}</p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Tipo De Documento <IoIosArrowForward className="icon" />
            </summary>
            <p>{formData.typeId}</p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Documento <IoIosArrowForward className="icon" />
            </summary>
            <p>{formData.id}</p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Curso <IoIosArrowForward className="icon" />
            </summary>
            <p>{formData.course}</p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Comentario <IoIosArrowForward className="icon" />
            </summary>
            <textarea disabled>{formData.comment}</textarea>
          </details>
        </article>
      </div>
      <div className="btn">
        <Link to="/firstForm" className="button-link button button-icon">
          <MdOutlineCancel className="icon" />
          Cancelar
        </Link>
        <Link to="/" className="button submit button-icon" onClick={onSubmit}>
          Enviar
          <BiSend className="icon" />
        </Link>
      </div>
    </main>
  );
};

export default ConfirmData;
