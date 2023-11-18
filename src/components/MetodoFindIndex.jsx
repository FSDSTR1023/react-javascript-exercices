/* 
Método findIndex()
Encuentra el índice del primer número mayor que 10 
en un array utilizando el método findIndex().
*/

export const MetodoFindIndex = () => {
  const numeros = [5, 10, 15, 20];
  const indicePrimerNumeroMayorQue10 = numeros.findIndex((numero) => numero > 10);

  return (
    <>
      <h2>el array es:</h2>
      {numeros.join(', ')}
      <h2>Índice del primer número mayor que 10:</h2>
      <p>{indicePrimerNumeroMayorQue10}</p>
    </>
  );
};
