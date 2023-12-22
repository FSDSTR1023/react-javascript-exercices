/* 
Método every()
Verifica si todos los elementos de un array son 
mayores que 10 utilizando el método every().
*/

export const MetodoEvery = () => {
  const numeros = [11, 12, 13, 14];

  
  const todosMayoresQue10 = numeros.every((numero) => numero > 10)
  return (
    <>
      Todos los elementos son mayores que 10: {todosMayoresQue10 ? 'Sí' : 'No'}
    </>
  );
};

