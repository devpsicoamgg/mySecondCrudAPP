import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Bienvenido a la Aplicación de Gestión de Atención Psicológica</h1>
      <p>Encuentra la ayuda que necesitas para tu bienestar emocional.</p>
      <Link to="/gestion" className="btn">
        Ingresar a la Aplicación
      </Link>
    </div>
  );
}

export default LandingPage;
