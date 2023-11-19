/* 
Método sort()
Ordena alfabéticamente un array de palabras y muéstralas en una lista 
utilizando el método sort().
*/

export const MetodoSort = () => {
  const palabras = ["Banana ", "Apple ", "Cherry"];

  return (
<p> {palabras.sort().map( (palabra, index) => (
  <span key={index}>{palabra}</span>
  ))}
  </p>
  );
};