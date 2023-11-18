/* 
Método Object.freeze()
Utiliza Object.freeze() para evitar que un objeto sea modificado, 
y verifica si el objeto es modificable o no.
*/

export const ObjectEjercicio23 = () => {
  // Objeto que deseamos congelar
  const miObjeto = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid",
  };

  // Congelamos el objeto usando Object.freeze()
  Object.freeze(miObjeto);

  // Verificamos si el objeto es modificable o no
  const esModificable = Object.isFrozen(miObjeto);

  return (
    <>
      <h2>Object.freeze():</h2>
      <p>Nombre: {miObjeto.nombre}</p>
      <p>Edad: {miObjeto.edad}</p>
      <p>Ciudad: {miObjeto.ciudad}</p>
      <p>¿Es modificable? {esModificable ? "No" : "Sí"}</p>
    </>
  );
};
