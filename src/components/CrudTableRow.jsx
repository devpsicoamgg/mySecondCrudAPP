/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import deleteIcon from "../assets/eliminar.png";
import editIcon from "../assets/editar.png";

const CrudTableRow = ({ rowData, setDataToEdit, deleteData }) => {
  const {
    firstName,
    middleName,
    lastName,
    secondLastName,
    gender,
    kindDoc,
    docNumber,
    dateOfBirth,
    maritalStatus,
    occupation,
    disability,
    telephone,
    email,
    id,
  } = rowData;

  return (
    <tr className="table-row">
      <td>{firstName}</td>
      <td>{middleName}</td>
      <td>{lastName}</td>
      <td>{secondLastName}</td>
      <td>{gender}</td>
      <td>{kindDoc}</td>
      <td>{docNumber}</td>
      <td>{dateOfBirth}</td>
      <td>{maritalStatus}</td>
      <td>{occupation}</td>
      <td>{disability}</td>
      <td>{telephone}</td>
      <td>{email}</td>
      <td className="table-actions">
        <button className="edit-button" onClick={() => setDataToEdit(rowData)}>
          <img src={editIcon} alt="Editar" height={20} />
        </button>
        <button className="delete-button" onClick={() => deleteData(id)}>
          <img src={deleteIcon} alt="Eliminar" height={20} />
        </button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
