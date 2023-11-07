/* 
Método sort()
Ordena alfabéticamente un array de palabras y muéstralas en una lista 
utilizando el método sort().
*/

export const MetodoSort = () => {
  const palabras = ["Banana", "Apple", "Cherry"];

  const palabrasSorted = palabras.sort()

  return (
    <>
      <ul>
        {palabrasSorted.map((palabraSorted) => <li>{palabraSorted}</li>)}
      </ul>
    </>
  );
};

