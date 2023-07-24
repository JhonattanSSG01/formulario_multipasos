// Componente para la navegavilidad dentro de la app
import { LinkButton } from "../stories/Button/Button";

// Componente principal del inicio de una solicitud de datos
const Home = () => {
  return (
    <div className="container__all--page container__all--home">
      <div className="container__all--title">
        <h2>Formulario Universal</h2>
      </div>
      <p className="container__all--text">
        <span>Bienvenidos!!!</span> Este formulario tiene un objetivo principal,
        tu fan de este anime podrás enviar tus datos y un comentario positivo o
        negativo en base a la última temporada de Kimetsu No Yaiba(Demon
        Slayer).
      </p>
      <div className="container__all--cont-btn">
        {/* Redirecciona a un componente especifico mediante una ruta establecida */}
        <LinkButton to="/firstForm" label="Empezar" primary={true} dir={true} active={true}/>
      </div>
    </div>
  );
};

export default Home;
