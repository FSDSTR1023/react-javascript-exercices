/* 
Método includes()
Verifica si un array incluye el número 5 utilizando el método includes().
*/

export const MetodoIncludes = () => {
  const numeros = [0, 1, 2, 3, 4, 5];

  const number = 5;
  return (
    <>
      <p>{numeros.includes(number) ? `Incluye el ${number}` : `No incluye el ${number}`}</p>
    </>
  );
};
