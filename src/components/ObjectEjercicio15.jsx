/* 
Desestructuración de Objetos
Desestructura un objeto para acceder a sus propiedades más fácilmente.
*/

export const ObjectEjercicio15 = () => {
    // Escribe tu solución
    const user = {
      name: 'Luis',
      age: 44,
      city: 'Kuala Lumpur'
    };

    const {name, age, city} = user;

    return (
      <>
        <ul>
          <li>{name}</li>
          <li>{age}</li>
          <li>{city}</li>
        </ul>
      </>
    );
  };
  