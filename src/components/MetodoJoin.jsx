/* 
Método join()
Junta todos los elementos de un array en una cadena de texto 
separados por comas utilizando el método join().
*/

export const MetodoJoin = () => {
  const palabras = ["Hola", "Mundo"];

  return (
    <>
      <p>{palabras.join(',')}</p>
    </>
  );
};
