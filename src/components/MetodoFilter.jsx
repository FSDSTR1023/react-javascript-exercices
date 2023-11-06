/* 
Método filter()
Crea una lista que muestre solo los números pares 
de un array utilizando el método filter()
*/

export const MetodoFilter = () => {
  const numeros = [1, 2, 3, 4, 5];

  return (
    <>
      <p>{numeros.filter((numero) => numero % 2 === 0).join(', ')}</p>
    </>
  );
};
