/* 
Método some()
Verifica si alguno de los elementos de un array 
es mayor que 10 utilizando el método some().
*/

export const MetodoSome = () => {
  const numeros = [5, 10, 15, 20];

  return (
    <>
      {numeros.some(num => num > 10) ? 'Hay almenos un numero mayor que 10' : 'No hay ningun numero superior a 10'}
    </>
  );
};

