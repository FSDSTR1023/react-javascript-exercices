/* 
Desestructuración en Parámetros
Desestructura un objeto directamente en los parámetros de una función.
*/

export const ObjectEjercicio16 = () => {
  const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
  };
  const NewComponent = ({ nombre, edad, ciudad }) => {
    return <p> {edad}, {ciudad}, {nombre}</p>
  }

  return (
    <>
      <NewComponent  {...persona} />
    </>
  );
};
