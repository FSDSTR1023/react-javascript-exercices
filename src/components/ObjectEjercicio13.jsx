/* 
Comprobar Propiedades
Comprueba si un objeto tiene una propiedad 
específica utilizando `hasOwnProperty()`.
*/


export const ObjectEjercicio13 = () => {
  // Crear un objeto
  const miObjeto = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid",
  };

  // Comprobar si el objeto tiene la propiedad "edad"
  const tieneEdad = miObjeto.hasOwnProperty("edad");

  return (
    <>
      <h2>Comprobar Propiedad Edad:</h2>
      <p>El objeto {tieneEdad ? "tiene" : "no tiene"} la propiedad "edad".</p>
    </>
  );
};
