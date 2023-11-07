/* 
Método fill()
Rellena un array con el número 0 y 
muestra el resultado utilizando el método fill().
*/

export const MetodoFill = () => {
  const numeros = [0, 1, 2, 3, 4, 5];

  return (
    <>
      {numeros.fill(0).map((number, i) => (
        <li key={i}>{number}</li>
      ))}
    </>
  );
};
