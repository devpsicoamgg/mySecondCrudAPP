/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "Ana López García",
    diagnostico: "F412-Trastorno mixto de ansiedad y depresión",
  },
  { id: 2, name: "Carlos Pérez Rodríguez", diagnostico: "F32-Depresión" },
  {
    id: 3,
    name: "María Martínez Ruiz",
    diagnostico: "F41-Trastornos de ansiedad",
  },
  {
    id: 4,
    name: "Luis González Fernández",
    diagnostico: "F40-Trastornos fóbicos y de ansiedad generalizada",
  },
  {
    id: 5,
    name: "Laura Hernández López",
    diagnostico: "F33-Trastorno depresivo recurrente",
  },
  {
    id: 6,
    name: "Eduardo Rodríguez Pérez",
    diagnostico: "F43-Reacciones al estrés grave y trastornos de adaptación",
  },
  {
    id: 7,
    name: "Isabel García Martínez",
    diagnostico: "F45-Trastornos somatomorfos",
  },
  {
    id: 8,
    name: "Juan López Sánchez",
    diagnostico: "F60-Trastornos de personalidad",
  },
  { id: 9, name: "Sofía Pérez Ramírez", diagnostico: "F31-Trastorno bipolar" },
  {
    id: 10,
    name: "Diego Martínez Jiménez",
    diagnostico: "F44-Trastornos disociativos",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const createData = (data) => {
    setDb([...db, data]);
    let isCreated = `Se creó un nuevo registro con el nombre ${data.name}`;
    window.confirm(isCreated);
  };

  const updateData = (updatedData) => {
    const updatedDb = db.map((item) =>
      item.id === updatedData.id ? updatedData : item
    );
    setDb(updatedDb);
  };

  const deleteData = (id) => {
    let isDeleteData = window.confirm(
      `¿Estas seguro de eliminar el ID No ${id}?`
    );

    if (isDeleteData) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }

    const updatedDb = db.filter((item) => item.id !== id);
    setDb(updatedDb);
  };

  return (
    <div>
      <h2>CRUD APP</h2>
      <div className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <div>
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        </div>
      </div>
    </div>
  );
};

export default CrudApp;
