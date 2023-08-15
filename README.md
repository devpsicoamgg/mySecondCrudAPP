# Tutorial: Aplicación CRUD en React - Jonathan Mircha 

Creación de una aplicación CRUD en React que se enfoca en la gestión de pacientes y la edición de sus datos básicos. 

---

## Estructura de Componentes

La aplicación está compuesta por varios componentes reutilizables que trabajan juntos para crear un sistema CRUD completo:

- **`App.js`**: El componente raíz que renderiza la aplicación y contiene el componente `CrudApp`.

- **`CrudApp.js`**: El componente principal que administra la funcionalidad CRUD. Aquí se gestiona el estado de la base de datos y los datos para editar.

- **`CrudForm.js`**: El componente que permite agregar y editar datos. Contiene un formulario con campos para el nombre y diagnóstico del paciente.

- **`CrudTable.js`**: El componente que muestra la tabla de datos. Utiliza el componente `CrudTableRow` para renderizar cada fila de la tabla.

- **`CrudTableRow.js`**: El componente de presentación que muestra una fila en la tabla. Permite la edición y eliminación de pacientes.

---

## Flujo de Datos

La comunicación entre componentes se realiza a través de la propiedades. El flujo de datos se establece de la siguiente manera:

1. `CrudApp` administra el estado de la base de datos y los datos para editar.
2. `CrudForm` recibe datos y funciones de `CrudApp` a través de las propiedades.
3. `CrudTable` recibe la base de datos de `CrudApp` y pasa funciones a `CrudTableRow`.
4. `CrudTableRow` muestra los datos y activa funciones en `CrudTable`.

Este enfoque garantiza que los datos fluyan de manera eficiente y mantenible en la aplicación.

---

## Lógica en `CrudApp`

`CrudApp` es el componente principal que maneja la lógica CRUD. Sus funciones clave son:

- `createData(data)`: Agrega un nuevo paciente a la base de datos.
- `updateData(updatedData)`: Actualiza los datos de un paciente existente.
- `deleteData(id)`: Elimina un paciente de la base de datos.

Estas funciones aseguran que la base de datos esté actualizada con los cambios realizados por el usuario.

---

## Eventos en `CrudForm`

`CrudForm` maneja los eventos del formulario:

- `handleChange(e)`: Captura los cambios en los campos del formulario y actualiza el estado.
- `handleSubmit(e)`: Procesa el envío del formulario, llamando a las funciones `createData` o `updateData` según corresponda.
- `handleReset()`: Restaura el formulario a su estado inicial y cancela la edición.

---

## Limpieza del Formulario

Después de enviar o cancelar la edición, el formulario se restablece a su estado inicial mediante la función `handleReset()` en `CrudForm`.

---

## `CrudTable` como Contenedor

`CrudTable` actúa como un contenedor para renderizar dinámicamente las filas de la tabla. Recibe el estado `db` de `CrudApp` y pasa funciones a cada fila a través de las propiedades. Si no hay datos en la base de datos, muestra un mensaje indicando que no hay datos.

---

En resumen, se ha creado una aplicación CRUD en React que se enfoca en la gestión de pacientes y la edición de sus datos básicos. Se exploró la estructura de componentes, el flujo de datos, la lógica en `CrudApp`, los eventos en `CrudForm`, la limpieza del formulario y el papel de `CrudTable` como contenedor. 

Recursos adicionales:
- [Documentación oficial de React](https://reactjs.org/docs/getting-started.html)
