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
        {numeros.slice(2, 6).map((data, i) => (<li key={i}>{data}</li>))}
      </ul>
    </>
  );
};

