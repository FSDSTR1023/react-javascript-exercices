/* 
Método sort()
Ordena alfabéticamente un array de palabras y muéstralas en una lista 
utilizando el método sort().
*/

export const MetodoSort = () => {
  const palabras = ["Banana", "Apple", "Cherry"];

  return (
    <>
      <ul>
        {palabras.sort().map((fruit, ninja) => (<li key={ninja}>{fruit}</li>))}
      </ul>
    </>
  );
};

