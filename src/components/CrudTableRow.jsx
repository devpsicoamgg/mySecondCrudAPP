/* eslint-disable react/prop-types */
import React from "react";
import deleteIcon from "../assets/eliminar.png";
import editIcon from "../assets/editar.png";
import "../styles/CrudTable.css"; // Asegúrate de importar tus estilos

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
    <details className="table-row">
      <summary className="row-summary">
        {firstName} {middleName} {lastName} {secondLastName}
      </summary>
      <div className="row-details">
        <div>
          {" "}
          <b> Sexo:</b> {gender}
        </div>
        <div>
          <b> Documento:</b> {kindDoc} {docNumber}{" "}
        </div>
        <div>
          {" "}
          <b> Nacimiento:</b> {dateOfBirth}
        </div>
        <div>
          <b> Estado civil:</b> {maritalStatus}
        </div>
        <div>
          <b> Ocupación:</b> {occupation}
        </div>
        <div>
          <b>Discapacidad:</b> {disability}
        </div>
        <div>
          <b>Teléfono:</b>
          {telephone}
        </div>
        <div>
          <b>E-mail:</b>
          {email}
        </div>
      </div>
      <div className="table-actions">
        <button
          className="action-button edit-button"
          onClick={() => setDataToEdit(rowData)}
        >
          <img src={editIcon} alt="Editar" height={20} />
        </button>
        <button
          className="action-button delete-button"
          onClick={() => deleteData(id)}
        >
          <img src={deleteIcon} alt="Eliminar" height={20} />
        </button>
      </div>
    </details>
  );
};

export default CrudTableRow;
