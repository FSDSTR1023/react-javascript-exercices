/* 
Método every()
Verifica si todos los elementos de un array son 
mayores que 10 utilizando el método every().
*/

export const MetodoEvery = () => {
  const numeros = [11, 12, 13, 14];
  const numeros2 = [1, 2, 3, 4];

  return (
    <>
      Los números son {(numeros.every((number)=>number>10))? "mayores":"menores"} que 10
    </>
  );
};

