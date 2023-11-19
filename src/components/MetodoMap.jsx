/* 
Método map()
Crea una lista que muestre los nombres de una serie de amigos 
almacenados en un array utilizando el método map()
*/

export const MetodoMap = () => {
  const amigos = ["Ana", "Carlos", "Elena",];

  return (
<p> {amigos.map( (amigo, index) => (
    <span key = {index}>{amigo}
    </span>
  ))}
</p>
  );
};