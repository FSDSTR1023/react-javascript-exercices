/* 
Método indexOf()
Encuentra el índice del primer número 5 
en un array utilizando el método indexOf().
*/

export const MetodoIndexOf = () => {
  const numeros = [1, 2, 3, 4, 5];
  const indiceNumero5 = numeros.indexOf(5);

  return (
    <>
      <h2>Índice del primer número 5:</h2>
      {indiceNumero5 !== -1 ? (
        <p>El número 5 se encuentra en el índice {indiceNumero5}.</p>
      ) : (
        <p>El número 5 no se encuentra en el array.</p>
      )}
    </>
  );
};

