/* 
Desestructuración en Parámetros
Desestructura un objeto directamente en los parámetros de una función.
*/


// Función que recibe un objeto desestructurado como parámetro
const mostrarInformacion = ({ nombre, edad, ciudad }) => {
  return (
    <>
      <h2>Información Desestructurada:</h2>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
      <p>Ciudad: {ciudad}</p>
    </>
  );
};

export const ObjectEjercicio16 = () => {
  // Crear un objeto
  const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid",
  };

  return (
    <>
      <h2>Componente Padre</h2>
      {mostrarInformacion(persona)}
    </>
  );
};
