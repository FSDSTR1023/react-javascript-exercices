/* 
Método findIndex()
Encuentra el índice del primer número mayor que 10 
en un array utilizando el método findIndex().
*/

export const MetodoFindIndex = () => {
  const numeros = [5, 10, 15, 20];

  const numIndexMayor10 = numeros.findIndex(number => number > 10)
  return (
    <>
      <p>{numIndexMayor10}</p>
    </>
  );
};
