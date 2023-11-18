/* 
Método every()
Verifica si todos los elementos de un array son 
mayores que 10 utilizando el método every().
*/

export const MetodoEvery = () => {
  const numeros = [11, 12, 13, 14];

   // Utilizo el método every() 
   const todosMayoresQue10 = numeros.every((numero) => numero > 10);

  return (
    <>
      <h2>Verificación de si todos los elementos son mayores que 10:</h2>
      {todosMayoresQue10 ? (
        <p>Todos los elementos son mayores que 10</p>
      ) : (
        <p>No todos los elementos son mayores que 10</p>
      )}
    </>
  );
};

