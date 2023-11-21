/* 
Filtrar Objetos
Crea un array de objetos y usa `filter()` para mostrar 
solo los objetos que cumplan una condición específica.
*/

export const ObjectEjercicio8 = () => {
    // Escribe tu solución
    const users = [
      { name: 'Luis', age: 44 } ,
      { name: 'Juana', age: 22 },
      { name: 'Leroy', age: 33 }
    ];

    return (
      <>
        <ul>
          {users.filter(value => value.name.startsWith('L') && value.age < 40).map((value, i) => (
            <li key={i}>{value.name}</li>
          ))}
        </ul>
      </>
    );
  };
  
