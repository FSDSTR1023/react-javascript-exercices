/* 
Comprobar Propiedades
Comprueba si un objeto tiene una propiedad 
específica utilizando `hasOwnProperty()`.
*/

export const ObjectEjercicio13 = () => {
  // Escribe tu solución
  const user = {
    name: 'Luis',
    age: 44,
    city: 'Kuala Lumpur'
  };

  return (
    <>
      <p>{user.hasOwnProperty('age') ? 'Tiene': 'No tiene'}</p>
    </>
  );
};

