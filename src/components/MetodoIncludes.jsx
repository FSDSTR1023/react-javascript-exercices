/* 
Método includes()
Verifica si un array incluye el número 5 utilizando el método includes().
*/

export const MetodoIncludes = () => {
  const numeros = [0, 1, 2, 3, 4, 5];

  const incluyeNumero3 = numeros.includes(3)

  return (
    <>
      ¿Esta incluido el number 3?  {incluyeNumero3 ? 'Si': 'No'}
    </>
  );
};
