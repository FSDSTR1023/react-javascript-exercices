/* 
Objetos dentro de Arrays
Crea un array de objetos y renderiza 
una lista de una propiedad específica.
*/

export const ObjectEjercicio7 = () => {
  // Crea un array de objetos
  const arrayDeObjetos = [
    { id: 1, nombre: "Juan", edad: 25 },
    { id: 2, nombre: "Maria", edad: 30 },
    { id: 3, nombre: "Carlos", edad: 22 },
  ];

  // Renderiza una lista de una propiedad específica (en este caso, la propiedad "nombre")
  const listaDeNombres = arrayDeObjetos.map((objeto) => (
    <li key={objeto.id}>{objeto.nombre}</li>
  ));

  return (
    <>
      <h2>Lista de Nombres:</h2>
      <ul>{listaDeNombres}</ul>
    </>
  );
};
