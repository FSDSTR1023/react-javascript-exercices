/* 
Método fill()
Rellena un array con el número 0 y 
muestra el resultado utilizando el método fill().
*/

export const MetodoFill = () => {
  const numeros = [0, 1, 2, 3, 4, 5];
  
  // Utilizo el método fill() para rellenar el array con el número 0
  const numerosRellenados = numeros.fill(0);

  return (
    <>
      <h2>Array después de rellenar con 0:</h2>
      <p> {numerosRellenados.join(', ')}</p>
    </>
  );
};
