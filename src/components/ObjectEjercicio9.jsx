/* 
Ordenar Objetos
Crea un array de objetos y usa `sort()` 
para ordenarlos por una propiedad específica.
*/


export const ObjectEjercicio9 = () => {
  // Crea un array de objetos
  const arrayDeObjetos = [
    { id: 1, nombre: "Juan", edad: 25 },
    { id: 2, nombre: "Maria", edad: 30 },
    { id: 3, nombre: "Carlos", edad: 22 },
  ];

  // función de comparación para ordenar por edad
  const compararPorEdad = (a, b) => a.edad - b.edad;

  //  ordenar los objetos por edad
  const objetosOrdenados = arrayDeObjetos.slice().sort(compararPorEdad);

  // Renderiza la lista 
  const listaDeObjetos = objetosOrdenados.map((objeto) => (
    <li key={objeto.id}>
      Nombre: {objeto.nombre}, Edad: {objeto.edad}
    </li>
  ));

  return (
    <>
      <h2>Objetos ordenados por edad:</h2>
      <ul>{listaDeObjetos}</ul>
    </>
  );
};

