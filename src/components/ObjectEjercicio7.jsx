/* 
Objetos dentro de Arrays
Crea un array de objetos y renderiza 
una lista de una propiedad específica.
*/

export const ObjectEjercicio7 = () => {
    // Escribe tu solución
   const arrayOfObjects = [
    { id: 1, nombre: 'Objeto 1' },
    { id: 2, nombre: 'Objeto 2' },
    { id: 3, nombre: 'Objeto 3' },
  ];

    return (
      <>
       <h2>Lista de Nombres:</h2>
      <ul>
        {arrayOfObjects.map((objeto) => (
          
          <li key={objeto.id}>{objeto.nombre}</li>
        ))}
      </ul>
      </>
    );
  };
  

