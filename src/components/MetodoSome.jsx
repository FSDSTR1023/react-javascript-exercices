/* 
Método some()
Verifica si alguno de los elementos de un array 
es mayor que 10 utilizando el método some().
*/

export const MetodoSome = () => {
  const numeros = [5, 10, 15, 20];
  const algunElementoMayorQue10 = numeros.some((numero) => numero > 10);

  return (
    <>
      <h2>¿Alguno de los elementos es mayor que 10?</h2>
      {algunElementoMayorQue10 ? (
        <p>Sí, algunos elementos son mayores que 10.</p>
      ) : (
        <p>No, ninguno de los elementos es mayor que 10.</p>
      )}
    </>
  );
};

