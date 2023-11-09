/* 
Método some()
Verifica si alguno de los elementos de un array 
es mayor que 10 utilizando el método some().
*/

export const MetodoSome = () => {
  const numeros = [5, 10, 15, 20];
  const numeros2 = [5, 1, 5, 2];

  return (
    <>
      {(numeros.some((number)=>number>10)? "Hay":"No hay")} al menos un elemento mayor que 10
    </>
  );
};

