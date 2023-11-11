/* 
Método map()
Crea una lista que muestre los nombres de una serie de amigos 
almacenados en un array utilizando el método map()
*/

export const MetodoMap = () => {
  const amigos = ["Ana", "Carlos", "Elena"];

  return (
    <ul>
      <>
        {amigos.map((name, i) => <li key={i}>{name}</li>)}
      </>
    </ul>
  );
};
