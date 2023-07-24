// Se importa un hook de react para guardar datos y compartirlos entre componentes
import { useContext } from "react";
// Componente para la navegavilidad dentro de la app
import { Link } from "react-router-dom";
// Contexto donde se realiza la logica para almacenar los datos y guardarlos
import { DataContext } from "../context/DataContext";

// Componentes para el manejo de iconos
import { BiSend } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { LinkButton } from "../stories/Button/Button";

// Componente de confirmar informacion a enviar
const ConfirmData = () => {
    // Se trae los atributos creados en el contexto para obtener los datos
  const { formData } = useContext(DataContext);

  // Funcion para el mensaje y reseteo de los valores
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
    <main className="container__all--main" style={{ maxWidth: "1200px" }}>
      <div className="container__all--title">
        <h2>Datos a confirmar</h2>
      </div>
      <div className="container__all--container-confirm">
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
      {/* Validar boton para cancelar el envio o envairlo definitivamente */}
      <div className="container__all--cont-btn">
        {/* // Componente link de storybook */}
        <LinkButton
          to="/firstForm"
          label="Cancelar"
          primary={true}
          dir={false}
          option="cancel"
          active={false}
        />
        {/* // Componente link de storybook */}
        <LinkButton
          to="/"
          label="Enviar"
          primary={false}
          dir={true}
          option="send"
          active={false}
          onClick={onSubmit}
        />
      </div>
    </main>
  );
};

export default ConfirmData;
