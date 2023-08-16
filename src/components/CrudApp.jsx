/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const CrudApp = () => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    setDb([...db, data]);
    let isCreated = `Se creó un nuevo registro con el nombre ${data.firstName}`;
    window.confirm(isCreated);
  };

  const updateData = (updatedData) => {
    const updatedDb = db.map((item) =>
      item.id === updatedData.id ? updatedData : item
    );
    setDb(updatedDb);
    setDataToEdit(null);
  };

  const deleteData = (id) => {
    let isDeleteData = window.confirm(
      `¿Estás seguro de eliminar el ID No ${id}?`
    );

    if (isDeleteData) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>Creación de usuarios</h2>
      <div className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </div>
    </div>
  );
};

export default CrudApp;
