/* 
Ordenar Objetos
Crea un array de objetos y usa `sort()` 
para ordenarlos por una propiedad específica.
*/

export const ObjectEjercicio9 = () => {
    const arrayOfObjects = [
    { id: 3, nombre: 'Objeto C', valor: 30 },
    { id: 1, nombre: 'Objeto A', valor: 10 },
    { id: 2, nombre: 'Objeto B', valor: 20 },
    { id: 4, nombre: 'Objeto D', valor: 40 },
  ];

  const compararPorValor = (objetoA, objetoB) => objetoA.valor - objetoB.valor;
  const objetosOrdenados = arrayOfObjects.sort(compararPorValor);
    return (
      <>
        <h2>Objetos Ordenados por Valor:</h2>
      <ul>
        {objetosOrdenados.map((objeto) => (
          <li key={objeto.id}>{`${objeto.nombre} - Valor: ${objeto.valor}`}</li>
        ))}
      </ul>
      </>
    );
  };


