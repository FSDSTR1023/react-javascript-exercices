/* 
Método sort()
Ordena alfabéticamente un array de palabras y muéstralas en una lista 
utilizando el método sort().
*/

export const MetodoSort = () => {
  const palabras = ["Banana", "Apple", "Cherry"];

  return (
    <>
    Lista ordenada alfabéticamente:
    <ul>
      {
        palabras.sort().map((word)=> <li>{word}</li>)
      }
    </ul>
    </>
  );
};

