/* 
Método some()
Verifica si alguno de los elementos de un array 
es mayor que 10 utilizando el método some().
*/

export const MetodoSome = () => {
  const numeros = [5, 10, 15, 20];
 
 const algunoMayorQue10 = numeros.some((numero) => numero > 10)

  return (
    <>
     Alguno de los elementos es mayor que 10: {algunoMayorQue10 ? 'Sí' : 'No'}
    </>
  );
};

