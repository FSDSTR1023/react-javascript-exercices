/* 
Ordenar Objetos
Crea un array de objetos y usa `sort()` 
para ordenarlos por una propiedad específica.
*/

export const ObjectEjercicio9 = () => {
  // Escribe tu solución
  const personas = [
    {
      nombre: 'Laura',
      edad: 25
    },
    {
      nombre: 'Sonia',
      edad: 10
    },
    {
      nombre: 'Miquel',
      edad: 40
    },
  ]

  return (
    <>
      <ul>
        {personas.sort((a, b) => a.edad - b.edad).map((persona, i) => <li key={i}>{persona.nombre} : {persona.edad}</li>)}
      </ul>
    </>
  );
};


