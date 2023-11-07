/* 
Método every()
Verifica si todos los elementos de un array son 
mayores que 10 utilizando el método every().
*/

export const MetodoEvery = () => {
  const numeros = [11, 12, 13, 14];

  const resultado = numeros.every((numero) => numero > 10);
  return (
    <>
      <p>
        {resultado ? ('Todos los números son mayores que 10.') : ('No todos los números son mayores que 10.')}
      </p>
    </>
  );
};

