/* 
Método slice()
Extrae y muestra los elementos de un array desde el índice 2 
hasta el índice 5 utilizando el método slice().
*/

export const MetodoSlice = () => {
  const numeros = [0, 1, 2, 3, 4, 5, 6];

  return (
    <>
      <ul>
        {numeros.slice(2, 5).map((num, i) => <li key={i}>{num}</li>)}
      </ul>
    </>
  );
};

