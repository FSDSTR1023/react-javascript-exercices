/* 
Método includes()
Verifica si un array incluye el número 5 utilizando el método includes().
*/

export const MetodoIncludes = () => {
  const numeros = [0, 1, 2, 3, 4, 5];

  return (
    <>
      El array {(numeros.includes(5))? "incluye":"no incluye"} el número 5
    </>
  );
};
