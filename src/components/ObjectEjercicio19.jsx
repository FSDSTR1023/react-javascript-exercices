/* 
Objetos Constantes
Crea un objeto constante fuera de un componente 
y accede a sus propiedades en el componente.
*/


// Objeto constante fuera del componente
const miObjeto = {
  nombre: "Juan",
  edad: 25,
  ciudad: "Madrid",
};

export const ObjectEjercicio19 = () => {
  return (
    <>
      <h2>Objeto Constante:</h2>
      <p>Nombre: {miObjeto.nombre}</p>
      <p>Edad: {miObjeto.edad}</p>
      <p>Ciudad: {miObjeto.ciudad}</p>
    </>
  );
};

