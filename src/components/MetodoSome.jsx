/* 
Método some()
Verifica si alguno de los elementos de un array 
es mayor que 10 utilizando el método some().
*/

export const MetodoSome = () => {
  const numeros = [5, 10, 15, 20];

  return (
    <>
      <p>{numeros.some((x) => x > 10) ? 'true' : 'false'}</p>
    </>
  );
};

