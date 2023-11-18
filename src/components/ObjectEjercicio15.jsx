/* 
Desestructuración de Objetos
Desestructura un objeto para acceder a sus propiedades más fácilmente.
*/

export const ObjectEjercicio15 = () => {
  // Crear un objeto
  const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid",
  };

  // Desestructurar el objeto para acceder a sus propiedades
  const { nombre, edad, ciudad } = persona;

  return (
    <>
      <h2>Desestructuración de Objetos:</h2>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
      <p>Ciudad: {ciudad}</p>
    </>
  );
};
