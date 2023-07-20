import React from "react";
import ReactDOM from "react-dom/client";

// Configuracion para rutas de navegacion
import { RouterProvider } from "react-router-dom";

// Rutas
import { router } from "./routes/Routes";

// Estilos
import "./styles/styles.scss";
// import "animate.css";
import { FormProvider } from "./context/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormProvider>
      <div className="container">
        <RouterProvider exact router={router} />
      </div>
    </FormProvider>
  </React.StrictMode>
);
