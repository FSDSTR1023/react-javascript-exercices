/* 
Método join()
Junta todos los elementos de un array en una cadena de texto 
separados por comas utilizando el método join().
*/

export const MetodoJoin = () => {
  const palabras = ["Hola", "Mundo"];
  const cadenaUnida = palabras.join(', ');

  return (
    <>
      <h2>Cadena de texto unida:</h2>
      <p>{cadenaUnida}</p>
    </>
  );
};
