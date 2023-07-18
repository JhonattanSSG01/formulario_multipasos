import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="pagePrincipal home">
      <div className="title">
        <h2>Formulario Universal</h2>
      </div>
      <p>
        <span>Bienvenidos!!!</span> Este formulario tiene un objetivo principal,
        tu fan de este anime podrás enviar tus datos y un comentario positivo o
        negativo en base a la última temporada de Kimetsu No Yaiba(Demon
        Slayer).
      </p>
      <div className="btn">
        <Link to="/firstForm" className="button">
          Empezar
        </Link>
      </div>
    </div>
  );
};

export default Home;
