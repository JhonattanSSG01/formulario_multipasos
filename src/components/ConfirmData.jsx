import { useContext } from "react";
import { DataContext } from "../context/DataContext";

import { BiSend } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const ConfirmData = () => {
  const { formData } = useContext(DataContext);

  console.log(formData);
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
            <p>
              <h4>{formData.firstName}</h4>
            </p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Primer Apellido <IoIosArrowForward className="icon" />
            </summary>
            <p>
              <h4>{formData.lastName}</h4>
            </p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Segundo Nombre <IoIosArrowForward className="icon" />
            </summary>
            <p>
              <h4>{formData.middleName ? formData.middleName : "Ninguno"}</h4>
            </p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Segundo Apellido
              <IoIosArrowForward className="icon" />
            </summary>
            <p>
              <h4>{formData.surName ? formData.surName : "Ninguno"}</h4>
            </p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Edad <IoIosArrowForward className="icon" />
            </summary>
            <p>
              <h4>{formData.age}</h4>
            </p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Email <IoIosArrowForward className="icon" />
            </summary>
            <p>
              <h4>{formData.email}</h4>
            </p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Fecha De Nacimiento <IoIosArrowForward className="icon" />
            </summary>
            <p>
              <h4>{formData.date}</h4>
            </p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              País <IoIosArrowForward className="icon" />
            </summary>
            <p>
              <h4>{formData.country}</h4>
            </p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Ciudad <IoIosArrowForward className="icon" />
            </summary>
            <p>
              <h4>{formData.city}</h4>
            </p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Genéro <IoIosArrowForward className="icon" />
            </summary>
            <p>
              <h4>{formData.gender}</h4>
            </p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Número Celular <IoIosArrowForward className="icon" />
            </summary>
            <p>
              <h4>{formData.phoneNumber}</h4>
            </p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Tipo De Documento <IoIosArrowForward className="icon" />
            </summary>
            <p>
              <h4>{formData.typeId}</h4>
            </p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Documento <IoIosArrowForward className="icon" />
            </summary>
            <p>
              <h4>{formData.id}</h4>
            </p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Curso <IoIosArrowForward className="icon" />
            </summary>
            <p>
              <h4>{formData.course}</h4>
            </p>
          </details>
        </article>
        <article>
          <details open>
            <summary>
              Comentario <IoIosArrowForward className="icon" />
            </summary>
            <p>
              <h4>{formData.comment}</h4>
            </p>
          </details>
        </article>
      </div>
      <div className="btn">
        <button type="submit" className="button button-icon">
          <MdOutlineCancel className="icon " />
          <Link to="/firstForm" className="button-link">
            Cancelar
          </Link>
        </button>
        <button type="submit" className="button submit button-icon">
          <BiSend className="icon" />
          Enviar
        </button>
      </div>
    </main>
  );
};

export default ConfirmData;
