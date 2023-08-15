/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CrudTableRow from "./CrudTableRow";

function CrudTable({ data, setDataToEdit, deleteData }) {
  return (
    <div>
      <h3> Tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Diagnostico</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Sin Datos </td>
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
