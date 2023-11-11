/* 
Filtrar Objetos
Crea un array de objetos y usa `filter()` para mostrar 
solo los objetos que cumplan una condición específica.
*/

export const ObjectEjercicio8 = () => {
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
        {personas.filter(persona => persona.edad > 10).map((persona, i) => <li key={i}>{persona.nombre}</li>)}
      </ul>
    </>
  );
};

