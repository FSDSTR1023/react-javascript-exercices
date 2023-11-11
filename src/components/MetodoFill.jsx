/* 
Método fill()
Rellena un array con el número 0 y 
muestra el resultado utilizando el método fill().
*/

export const MetodoFill = () => {
  const numeros = [0, 1, 2, 3, 4, 5];

  return (
    <>
      <ul>
        {numeros.fill(0).map((num, i) => <li key={i}>{num}</li>)}
      </ul>
    </>
  );
};
