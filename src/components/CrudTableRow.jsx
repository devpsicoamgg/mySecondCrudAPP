/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import deleteIcon from "../assets/eliminar.png";
import editIcon from "../assets/editar.png";

const CrudTableRow = ({ rowData, setDataToEdit, deleteData }) => {
  let { name, diagnostico, id } = rowData;

  return (
    <tr>
      <td> {name} </td>
      <td> {diagnostico} </td>
      <td>
        {" "}
        <button onClick={() => setDataToEdit(rowData)}>
          <img src={editIcon} alt="Icono" height={30} />{" "}
        </button>
        <button onClick={() => deleteData(id)}>
          {" "}
          <img src={deleteIcon} alt="Icono" height={30} />{" "}
        </button>{" "}
      </td>
    </tr>
  );
};

export default CrudTableRow;
