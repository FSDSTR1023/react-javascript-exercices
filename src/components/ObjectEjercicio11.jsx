/* 
Asignación de Propiedades
Utiliza `Object.assign()` para combinar dos objetos 
en uno nuevo y renderiza el resultado.
*/


export const ObjectEjercicio11 = () => {
  // Crear dos objetos
  const objeto1 = { nombre: "Juan", edad: 25 };
  const objeto2 = { ciudad: "Madrid" };

  // Combinar los objetos en uno nuevo utilizando Object.assign()
  const objetoCombinado = Object.assign({}, objeto1, objeto2);

  return (
    <>
      <h2>Objeto Combinado:</h2>
      <p>Nombre: {objetoCombinado.nombre}</p>
      <p>Edad: {objetoCombinado.edad}</p>
      <p>Ciudad: {objetoCombinado.ciudad}</p>
    </>
  );
};
