import { createBrowserRouter } from "react-router-dom";

// Componentes
import FirstForm from "../components/FirstForm";
import SecondForm from "../components/SecondForm";
import ThirdForm from "../components/ThirdForm";
import FourForm from "../components/FourForm";
import FiveForm from "../components/FiveForm";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import App from "../App";

// Rutas
export const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/firstForm',
    element: <FirstForm />
  },
  {
    path: '/secondForm',
    element: <SecondForm />
  },
  {
    path: '/thirdForm',
    element: <ThirdForm />
  },
  {
    path: '/fourForm',
    element: <FourForm />
  },
  {
    path: '/fiveForm',
    element: <FiveForm />
  },
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: '/',
    element: <App />
  },
]);