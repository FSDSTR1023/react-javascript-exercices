/* 
Ordenar Objetos
Crea un array de objetos y usa `sort()` 
para ordenarlos por una propiedad específica.
*/

export const ObjectEjercicio9 = () => {
  // Escribe tu solución
  const users = [
    { name: 'Luis', age: 44 } ,
    { name: 'Juana', age: 22 },
    { name: 'Leroy', age: 33 }
  ];

  return (
    <>
      <ul>
        {users.sort((a, b) => a.age - b.age).map((value, i) => (
          <li key={i}>{value.name}</li>
        ))}
      </ul>
    </>
  );
};


