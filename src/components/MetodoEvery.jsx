/* 
Método every()
Verifica si todos los elementos de un array son 
mayores que 10 utilizando el método every().
*/

export const MetodoEvery = () => {
  const numeros = [11, 12, 13, 14];


  return (
    <>
      <p>{numeros.every(numero => numero > 10) ? "Todos > 10" : "Hay números menores que 10"}</p>
    </>
  );
};

