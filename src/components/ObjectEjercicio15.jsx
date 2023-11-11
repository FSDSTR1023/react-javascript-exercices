/* 
Desestructuración de Objetos
Desestructura un objeto para acceder a sus propiedades más fácilmente.
*/

export const ObjectEjercicio15 = () => {
  // Escribe tu solución
  const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
  };
  const { nombre, edad, ciudad } = persona
  return (
    <>
      <p>{nombre}, {ciudad}, {edad}</p>
    </>
  );
};
