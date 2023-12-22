/* 
Método sort()
Ordena alfabéticamente un array de palabras y muéstralas en una lista 
utilizando el método sort().
*/

export const MetodoSort = () => {
  const palabras = ["Banana", "Apple", "Cherry"];

 const palabrasOrdenadas = palabras.sort()

  return (
    <>
       <ul>
        {palabrasOrdenadas.map((palabra, index) => (
          <li key={index}>{palabra}</li>
        ))}
      </ul>
    </>
  );
};

