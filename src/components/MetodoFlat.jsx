/* 
Método flat()
Aplana un array de arrays y muestra el resultado 
en una lista utilizando el método flat().
*/

export const MetodoFlat = () => {
  const arr = [[1, 2], [3, 4], [5, 6]];
  const arrAplanado = arr.flat();
  return (
    <>
      <h2>Array aplanado:</h2>
      {arrAplanado.join(', ')}   </>
  );
};
