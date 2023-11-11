/* 
Operador Spread
Utiliza el operador spread para combinar 
dos objetos en uno nuevo y renderiza el resultado.
*/

export const ObjectEjercicio12 = () => {
  // Escribe tu solución
  const objA = { a: 1 }
  const objB = { b: 2 }
  const combination = { ...objA, ...objB }
  return (
    <>
      {JSON.stringify(combination)}
    </>
  );
};

