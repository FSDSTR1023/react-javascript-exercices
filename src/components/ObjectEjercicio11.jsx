/* 
Asignación de Propiedades
Utiliza `Object.assign()` para combinar dos objetos 
en uno nuevo y renderiza el resultado.
*/

export const ObjectEjercicio11 = () => {
  // Escribe tu solución
  const list1 = { a: 1, b: 2 };
  const list2 = { c: 3, d: 4 };

  const mergedList = Object.assign({}, list1, list2);

  return (
    <ul>
      {Object.entries(mergedList).map(([key, value], i) => (
        <li key={i}>
          {key}: {value}
        </li>
      ))}
    </ul>
  );
};
  