/* eslint-disable no-unused-vars */ // Deshabilita las advertencias de variables no utilizadas para este archivo

import CrudApp from "./components/CrudApp.jsx"; // Importa el componente CrudApp desde el archivo CrudApp.jsx en la carpeta components

function App() {
  return (
    <>
      <h1> EJERCICIOS REACT </h1>{" "}
      {/* Renderiza el encabezado h1 en la interfaz */}
      <CrudApp /> {/* Renderiza el componente CrudApp importado */}
    </>
  );
}

export default App; // Exporta el componente App como el componente principal de la aplicación
