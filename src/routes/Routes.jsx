// Se importa componente para crear las rutas de navegabilidad
import { createBrowserRouter } from "react-router-dom";

// Componentes
import FirstForm from "../components/FirstForm";
import SecondForm from "../components/SecondForm";
import ThirdForm from "../components/ThirdForm";
import FourForm from "../components/FourForm";
import FiveForm from "../components/FiveForm";
import NotFound from "../pages/NotFound";
import App from "../App";
import ConfirmData from "../components/ConfirmData";

// Rutas
export const router = createBrowserRouter([
  {
    path: "/firstForm",
    element: <FirstForm />,
  },
  {
    path: "/secondForm",
    element: <SecondForm />,
  },
  {
    path: "/thirdForm",
    element: <ThirdForm />,
  },
  {
    path: "/fourForm",
    element: <FourForm />,
  },
  {
    path: "/fiveForm",
    element: <FiveForm />,
  },
  {
    path: "/confirm",
    element: <ConfirmData />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <App />,
  },
]);