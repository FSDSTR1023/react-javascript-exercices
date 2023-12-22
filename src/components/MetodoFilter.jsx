/* 
Método filter()
Crea una lista que muestre solo los números pares 
de un array utilizando el método filter()
*/

export const MetodoFilter = () => {
  const numeros = [1, 2, 3, 4, 5];

  const numerosFiltrados = numeros.filter((numero) => numero > 2)
  return (
    <>
      Numbers that are greater than 2 :{numerosFiltrados.join(', ')}
    </>
  );
};
