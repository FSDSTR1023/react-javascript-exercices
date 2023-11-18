/* 
Agregar Propiedades
Agrega una nueva propiedad a un objeto y 
renderiza el objeto actualizado.
*/
export const ObjectEjercicio3 = () => {  
  const miObjeto = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
  };

  // Agrega una nueva propiedad al objeto
  miObjeto.trabajo = "Desarrollador";

  return (
    <>
      <h2>Objeto actualizado:</h2>
      <pre>{JSON.stringify(miObjeto, null, 2)}</pre>
    </>
  );
};

  