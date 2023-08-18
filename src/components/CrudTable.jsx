/* eslint-disable react/prop-types */
import React from "react";
import CrudTableRow from "./CrudTableRow";
import "../styles/CrudTable.css";

function CrudTable({ data, setDataToEdit, deleteData }) {
  return (
    <div className="crud-table-container">
      <h3>PACIENTE</h3>
      <div className="table-container">
        <div className="table-body">
          {data && data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                rowData={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <div className="table-row">
              <div className="no-data" colSpan="14">
                Sin Datos
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CrudTable;
