/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CrudTableRow from "./CrudTableRow";
import "../styles/CrudTable.css";

function CrudTable({ data, setDataToEdit, deleteData }) {
  return (
    <div>
      <h3>Tabla de datos</h3>
      <table className="table-container">
        <thead>
          <tr>
            <th>Primer Nombre</th>
            <th>Segundo Nombre</th>
            <th>Primer Apellido</th>
            <th>Segundo Apellido</th>
            <th>Género</th>
            <th>Tipo de Documento</th>
            <th>Número de Documento</th>
            <th>Fecha de Nacimiento</th>
            <th>Estado Civil</th>
            <th>Ocupación</th>
            <th>Discapacidad</th>
            <th>Teléfono</th>
            <th>Correo Electrónico</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length === 0 ? (
            <tr>
              <td colSpan="14">Sin Datos</td>
            </tr>
          ) : (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                rowData={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CrudTable;
