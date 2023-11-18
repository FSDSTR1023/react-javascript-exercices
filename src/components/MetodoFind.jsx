/* 
Método find()
Encuentra el primer número mayor que 10 en un array 
utilizando el método find().
*/

export const MetodoFind = () => {
  const numeros = [5, 10, 15, 20];
  const primerNumeroMayorQue10 = numeros.find((numero) => numero > 10);

  return (
    <>
      <h2>Primer número mayor que 10:</h2>
      {primerNumeroMayorQue10 ? (
        <p>{primerNumeroMayorQue10}</p>
      ) : (
        <p>No se encontró ningún número mayor que 10.</p>
      )}
    </>
  );
};
