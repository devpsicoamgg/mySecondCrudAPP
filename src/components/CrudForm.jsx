/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/CrudForm.css";

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
  const [searchValue, setSearchValue] = useState(""); 
  const [searchResult, setSearchResult] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {

    setSearchResult(results);
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
    scrollToForm();
  };

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
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
    <>
      <div className="search-container">
        <div className="form-search-container">
          <input
            type="text"
            className="input-search"
            placeholder="Ingrese nombre del paciente a consultar"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="btn-search" onClick={handleSearch}>
            Buscar
          </button>
        </div>
      </div>

      <div className="crud-form-container" ref={formRef}>
        <form onSubmit={handleSubmit}>
          <div className="crud-form-grid">
            <div className="crud-form-group">
              <label htmlFor="firstName" className="crud-form-label">
                Primer Nombre:
                <br />
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="crud-form-input"
                onChange={handleChange}
                value={form.firstName}
              />
            </div>

            <div className="crud-form-group">
              <label htmlFor="middleName" className="crud-form-label">
                Segundo Nombre:
                <br />
              </label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                className="crud-form-input"
                onChange={handleChange}
                value={form.middleName}
              />
            </div>
            <div className="crud-form-group">
              <label htmlFor="lastName" className="crud-form-label">
                Primer Apellido:
                <br />
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="crud-form-input"
                onChange={handleChange}
                value={form.lastName}
              />
            </div>

            <div className="crud-form-group">
              <label htmlFor="secondLastName" className="crud-form-label">
                Segundo Apellido:
                <br />
              </label>
              <input
                type="text"
                id="secondLastName"
                name="secondLastName"
                className="crud-form-input"
                onChange={handleChange}
                value={form.secondLastName}
              />
            </div>

            <div className="crud-form-group">
              <label htmlFor="dateOfBirth" className="crud-form-label">
                Fecha de Nacimiento:
                <br />
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className="crud-form-input"
                onChange={handleChange}
                value={form.dateOfBirth}
              />
            </div>

            <div className="crud-form-group">
              <label htmlFor="gender" className="crud-form-label">
                Género: <br />
              </label>
              <select
                id="gender"
                name="gender"
                onChange={handleChange}
                className="crud-form-input"
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

            <div className="crud-form-group">
              <label htmlFor="kindDoc" className="crud-form-label">
                Tipo de Documento:
                <br />
              </label>
              <select
                id="kindDoc"
                name="kindDoc"
                className="crud-form-input"
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

            <div className="crud-form-group">
              <label htmlFor="docNumber" className="crud-form-label">
                Número de Documento:
                <br />
              </label>
              <input
                type="text"
                id="docNumber"
                name="docNumber"
                className="crud-form-input"
                onChange={handleChange}
                value={form.docNumber}
              />
            </div>

            <div className="crud-form-group">
              <label htmlFor="maritalStatus" className="crud-form-label">
                Estado Civil: <br />
              </label>
              <select
                id="maritalStatus"
                name="maritalStatus"
                className="crud-form-input"
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

            <div className="crud-form-group">
              <label htmlFor="occupation" className="crud-form-label">
                Ocupación:
                <br />
              </label>
              <input
                type="text"
                id="occupation"
                name="occupation"
                className="crud-form-input"
                onChange={handleChange}
                value={form.occupation}
              />
            </div>

            <div className="crud-form-group">
              <label htmlFor="disability" className="crud-form-label">
                Discapacidad: <br />
              </label>
              <select
                id="disability"
                name="disability"
                className="crud-form-input"
                onChange={handleChange}
                value={form.disability}
              >
                <option>- - -</option>
                <option value="no">No</option>
                <option value="si">Sí</option>
              </select>
            </div>

            <div className="crud-form-group">
              <label htmlFor="telephone" className="crud-form-label">
                Teléfono: <br />
              </label>
              <input
                type="text"
                name="telephone"
                className="crud-form-input"
                onChange={handleChange}
                value={form.telephone}
              />
            </div>

            <div className="crud-form-group">
              <label htmlFor="email" className="crud-form-label">
                Correo Electrónico: <br />
              </label>
              <input
                type="email"
                name="email"
                className="crud-form-input"
                onChange={handleChange}
                value={form.email}
              />
            </div>
            <div className="crud-button-container">
              <input
                type="submit"
                value={dataToEdit ? "Actualizar" : "Agregar"}
              />
              <input type="reset" value="Limpiar" onClick={handleReset} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CrudForm;
