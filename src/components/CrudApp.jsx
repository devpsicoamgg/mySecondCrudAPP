/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// Importaciones de módulos y componentes
import React, { useEffect, useState } from "react";
import CrudForm from "./CrudForm"; // Importa el componente CrudForm desde el archivo CrudForm.jsx
import CrudTable from "./CrudTable"; // Importa el componente CrudTable desde el archivo CrudTable.jsx
import { helpHttp } from "../helpers/helpHttp"; // Importa la función helpHttp desde el módulo helpers/helpHttp
import Loader from "./Loader"; // Importa el componente Loader desde el archivo Loader.jsx
import Messaje from "./Messaje"; // Importa el componente Messaje desde el archivo Messaje.jsx

// Definición del componente principal CrudApp
const CrudApp = () => {
  // Estados para el manejo de datos, edición, errores y carga
  const [db, setDb] = useState(null); // Estado para almacenar datos obtenidos
  const [dataToEdit, setDataToEdit] = useState(null); // Estado para datos en edición
  const [error, setError] = useState(null); // Estado para manejar errores
  const [loading, setLoading] = useState(false); // Estado para manejar el estado de carga
  let api = helpHttp(); // Instancia de la función helpHttp
  let url = "http://localhost:3000/pacientes"; // URL para las solicitudes HTTP

  // Efecto que se ejecuta al cargar el componente y obtiene los datos
  useEffect(() => {
    setLoading(true); // Cambia el estado de carga a true
    api.get(url).then((res) => {
      // Realiza una solicitud GET a la URL y maneja la respuesta
      if (!res.err) {
        setDb(res); // Establece los datos obtenidos en el estado db
        setError(null); // Limpia el estado de error
      } else {
        setDb(null); // Limpia los datos en caso de error
        setError(res); // Establece el error en el estado
      }
      setLoading(false); // Cambia el estado de carga a false al finalizar
    });
  }, [url]); // Se ejecuta cuando la URL cambia

  // Función para crear un nuevo registro en la base de datos
  const createData = (data) => {
    data.id = Date.now(); // Asigna un ID único basado en la fecha
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.post(url, options).then((res) => {
      // Realiza una solicitud POST para crear el registro
      if (!res.err) {
        setDb([...db, res]); // Agrega el nuevo registro a los datos
      } else {
        setError(res); // Establece el error en caso de fallo
      }
    });
  };

  // Función para actualizar un registro existente en la base de datos
  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`; // Construye la URL para la actualización
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.put(endpoint, options).then((res) => {
      // Realiza una solicitud PUT para actualizar el registro
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData); // Actualiza los datos con la información actualizada
      } else {
        setError(res); // Establece el error en caso de fallo
      }
    });
  };

  // Función para eliminar un registro de la base de datos
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`; // Construye la URL para la eliminación
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        // Realiza una solicitud DELETE para eliminar el registro
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData); // Actualiza los datos eliminando el registro
        } else {
          setError(res); // Establece el error en caso de fallo
        }
      });
    } else {
      return;
    }
  };

  // Renderización del componente
  return (
    <>
      <div className="crud-app">
        <h1>Creación de usuarios, búsqueda & Agendamiento </h1>
        <div className="grid-1-2">
          <div className="crud-form-container">
            <CrudForm
              createData={createData}
              updateData={updateData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CrudApp; // Exporta el componente CrudApp como componente principal
