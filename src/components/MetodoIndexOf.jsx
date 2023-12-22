/* 
Método indexOf()
Encuentra el índice del primer número 5 
en un array utilizando el método indexOf().
*/

export const MetodoIndexOf = () => {
  const numeros = [1, 2, 3, 4, 5];

  const indice = numeros.indexOf(5)
  return (
    <>
      {indice}
    </>
  );
};

