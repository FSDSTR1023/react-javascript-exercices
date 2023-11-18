/* 
Operador Spread
Utiliza el operador spread para combinar 
dos objetos en uno nuevo y renderiza el resultado.
*/

export const ObjectEjercicio12 = () => {
  // Crear dos objetos
  const objeto1 = { nombre: "Juan", edad: 25 };
  const objeto2 = { ciudad: "Madrid" };

  // Combinar los objetos en uno nuevo utilizando el operador spread (...)
  const objetoCombinado = { ...objeto1, ...objeto2 };

  return (
    <>
      <h2>Objeto Combinado:</h2>
      <p>Nombre: {objetoCombinado.nombre}</p>
      <p>Edad: {objetoCombinado.edad}</p>
      <p>Ciudad: {objetoCombinado.ciudad}</p>
    </>
  );
};