/* 
Operador Spread
Utiliza el operador spread para combinar 
dos objetos en uno nuevo y renderiza el resultado.
*/

export const ObjectEjercicio12 = () => {
  // Escribe tu solución
  const list1 = { a: 1, b: 2 };
  const list2 = { c: 3, d: 4 };
  const mergedList = { ...list1, ...list2};

  return (
    <>
      <ul>
      {Object.entries(mergedList).map(([key, value], i) => (
        <li key={i}>
          {key}: {value}
        </li>
      ))}
    </ul>
    </>
  );
};
  
