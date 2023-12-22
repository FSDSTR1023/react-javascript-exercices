/* 
Método map()
Crea una lista que muestre los nombres de una serie de amigos 
almacenados en un array utilizando el método map()
*/

export const MetodoMap = () => {
  const amigos = ["Ana", "Carlos", "Elena"];

  const listaAmigos =amigos.map((amigo, index) => (
    <li key={index}>{amigo}</li>
  ))
  
  return (
    <>
      <lu>
        {listaAmigos}
      </lu>
    </>
  );
};
