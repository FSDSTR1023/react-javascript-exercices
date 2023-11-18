/* 
Filtrar Objetos
Crea un array de objetos y usa `filter()` para mostrar 
solo los objetos que cumplan una condición específica.
*/

export const ObjectEjercicio8 = () => {
  // Crea un array de objetos
  const arrayDeObjetos = [
    { id: 1, nombre: "Juan", edad: 25 },
    { id: 2, nombre: "Maria", edad: 30 },
    { id: 3, nombre: "Carlos", edad: 22 },
  ];

  //  mostrar solo objetos con edad mayor de 25
  const condicion = (objeto) => objeto.edad > 25;

  //  objetos que cumplen la condición
  const objetosFiltrados = arrayDeObjetos.filter(condicion);

  // Renderiza la lista de objetos filtrados
  const listaDeObjetos = objetosFiltrados.map((objeto) => (
    <li key={objeto.id}>
      Nombre: {objeto.nombre}, Edad: {objeto.edad}
    </li>
  ));

  return (
    <>
      <h2>Objetos filtrados por edad mayor de 25:</h2>
      <ul>{listaDeObjetos}</ul>
    </>
  );
};