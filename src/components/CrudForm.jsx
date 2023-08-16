/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/CrudForm.css";
import CrudTable from "./CrudTable";

const initialForm = {
  firstName: "",
  middleName: "",
  lastName: "",
  secondLastName: "",
  gender: "",
  kindDoc: "",
  docNumber: "",
  dateOfBirth: "",
  maritalStatus: "",
  occupation: "",
  disability: "",
  telephone: "",
  email: "",
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName) {
      alert("Datos Incompletos");
      return;
    }
    if (dataToEdit === null) {
      createData({ ...form, id: new Date().getTime() });
    } else {
      updateData(form);
    }
    handleReset();
  };

  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Primer Nombre:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleChange}
            value={form.firstName}
          />
        </div>
        <hr />
        <div>
          <label htmlFor="middleName">Segundo Nombre:</label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            onChange={handleChange}
            value={form.middleName}
          />
          <hr />
        </div>
        <div>
          <label htmlFor="lastName">Primer Apellido:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleChange}
            value={form.lastName}
          />
        </div>
        <hr />
        <div>
          <label htmlFor="secondLastName">Segundo Apellido:</label>
          <input
            type="text"
            id="secondLastName"
            name="secondLastName"
            onChange={handleChange}
            value={form.secondLastName}
          />
        </div>
        <hr />
        <div>
          <label htmlFor="dateOfBirth">Fecha de Nacimiento:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            onChange={handleChange}
            value={form.dateOfBirth}
          />
        </div>
        <hr />
        <div>
          <label htmlFor="gender">Género:</label>
          <select
            id="gender"
            name="gender"
            onChange={handleChange}
            value={form.gender}
          >
            <option>- - -</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
            <option value="gay">Gay</option>
            <option value="lesbiana">Lesbiana</option>
            <option value="bisexual">Bisexual</option>
            <option value="pansexual">Pansexual</option>
            <option value="transgénero">Transgénero</option>
            <option value="no-binario">No Binario</option>
            <option value="intersex">Intersex</option>
          </select>
        </div>
        <hr />
        <div>
          <label htmlFor="kindDoc">Tipo de Documento:</label>
          <select
            id="kindDoc"
            name="kindDoc"
            onChange={handleChange}
            value={form.kindDoc}
          >
            <option>- - -</option>
            <option value="cedulaCiudadania">Cédula de Ciudadanía</option>
            <option value="tarjetaIdentidad">Tarjeta de Identidad</option>
            <option value="pep">PEP</option>
            <option value="visa">Visa</option>
            <option value="cedulaExtranjeria">Cédula Extranjería</option>
            <option value="registroCivil">Registro Civil</option>
          </select>
        </div>
        <hr />
        <div>
          <label htmlFor="docNumber">Número de Documento:</label>
          <input
            type="text"
            id="docNumber"
            name="docNumber"
            onChange={handleChange}
            value={form.docNumber}
          />
        </div>
        <hr />
        <div>
          <label htmlFor="maritalStatus">Estado Civil:</label>
          <select
            id="maritalStatus"
            name="maritalStatus"
            onChange={handleChange}
            value={form.maritalStatus}
          >
            <option>- - -</option>
            <option value="soltero/a">Soltero/a</option>
            <option value="casado/a">Casado/a</option>
            <option value="unión libre">Unión Libre</option>
            <option value="divorciado/a">Divorciado/a</option>
            <option value="viudo/a">Viudo/a</option>
            <option value="religioso/a">Religioso/a</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <hr />
        <div>
          <label htmlFor="occupation">Ocupación:</label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            onChange={handleChange}
            value={form.occupation}
          />
        </div>
        <hr />
        <div>
          <div>
            <label htmlFor="disability">Discapacidad:</label>
            <select
              id="disability"
              name="disability"
              onChange={handleChange}
              value={form.disability}
            >
              <option>- - -</option>
              <option value="no">No</option>
              <option value="si">Sí</option>
            </select>
          </div>
        </div>
        <hr />
        <div>
          <label htmlFor="telephone">Teléfono:</label>
          <input
            type="text"
            name="telephone"
            onChange={handleChange}
            value={form.telephone}
          />
        </div>
        <hr />
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
        </div>
        <hr />
        <div className="button-container">
          <input type="submit" value={dataToEdit ? "Actualizar" : "Agregar"} />
          <input type="reset" value="Limpiar" onClick={handleReset} />
        </div>
      </form>
    </div>
  );
};

export default CrudForm;
