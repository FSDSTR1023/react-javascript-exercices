/* 
Objetos dentro de Arrays
Crea un array de objetos y renderiza 
una lista de una propiedad específica.
*/

export const ObjectEjercicio7 = () => {
  // Escribe tu solución
  const personas = [
    {
      nombre: 'Laura',
      edad: 10
    },
    {
      nombre: 'Sonia',
      edad: 25
    },
    {
      nombre: 'Miquel',
      edad: 40
    },
  ]

  return (
    <>
      <ul>
        {personas.map((persona, i) => <li key={i}>Su nombre es {persona.nombre} y su edad es {persona.edad} años</li>)}
      </ul>
    </>
  );
};


