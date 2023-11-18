/* 
Método map()
Crea una lista que muestre los nombres de una serie de amigos 
almacenados en un array utilizando el método map()
*/

export const MetodoMap = () => {
  const amigos = ["Ana", "Carlos", "Elena"];
    // Utiliza el método map() para crear una lista de elementos li
    const listaAmigos = amigos.map((amigo, index) => (
      <li key={index}>{amigo}</li>
    ));
  

  return (
    <>
      <h2>Lista de Amigos:</h2>
      <ul>
        {listaAmigos}
      </ul>
    </>
  );
};
