/* 
Asignación de Propiedades
Utiliza `Object.assign()` para combinar dos objetos 
en uno nuevo y renderiza el resultado.
*/

export const ObjectEjercicio11 = () => {
  // Escribe tu solución
  const objA = { a: 1 }
  const objB = { b: 2 }

  return (
    <>
      {JSON.stringify(Object.assign(objA, objB))}
    </>
  );
};
