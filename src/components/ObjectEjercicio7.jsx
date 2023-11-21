/* 
Objetos dentro de Arrays
Crea un array de objetos y renderiza 
una lista de una propiedad específica.
*/

export const ObjectEjercicio7 = () => {
    // Escribe tu solución
    const users = [
      { name: 'Luis' } ,
      { name: 'Juana' },
      { name: 'Leroy' }
    ];

    return (
      <>
        <ul>
          {users.map((value, i) => (
            <li key={i}>{value.name}</li>
          ))}
        </ul>
      </>
    );
  };
  

