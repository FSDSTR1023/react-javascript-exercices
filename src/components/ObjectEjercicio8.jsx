/* 
Filtrar Objetos
Crea un array de objetos y usa `filter()` para mostrar 
solo los objetos que cumplan una condición específica.
*/

export const ObjectEjercicio8 = () => {
    // Escribe tu solución
    const arrayOfObjects = [
    { id: 1, nombre: 'Objeto 1', categoria: 'A' },
    { id: 2, nombre: 'Objeto 2', categoria: 'B' },
    { id: 3, nombre: 'Objeto 3', categoria: 'A' },
    { id: 4, nombre: 'Objeto 4', categoria: 'C' },
  ];
  const condicionFiltrado = (objeto) => objeto.categoria === 'A';
  const objetosFiltrados = arrayOfObjects.filter(condicionFiltrado);
    return (
      <>
         <h2>Objetos que Cumplen la Condición:</h2>
      <ul>
        {objetosFiltrados.map((objeto) => (
          
          <li key={objeto.id}>{objeto.nombre}</li>
        ))}
      </ul>
      </>
    );
  };
  
