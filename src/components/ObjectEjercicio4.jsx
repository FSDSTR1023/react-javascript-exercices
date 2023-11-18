/* 
Eliminar Propiedades
Elimina una propiedad de un objeto y 
renderiza el objeto actualizado.
*/


export const ObjectEjercicio4 = () => {
  // Crea un objeto inicial
  const miObjeto = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
  };

  // Elimina una propiedad del objeto
  delete miObjeto.edad;

  return (
    <>
      <h2>Objeto actualizado:</h2>
      <pre>{JSON.stringify(miObjeto, null, 2)}</pre>
    </>
  );
};
