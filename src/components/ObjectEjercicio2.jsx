/* 
Iterar sobre Propiedades
Crea un objeto y usa `Object.keys()` para 
iterar sobre sus propiedades y mostrarlas en una lista.
*/

export const ObjectEjercicio2 = () => {
  const miObjeto = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
  };
    
  // Utiliza Object.keys() para obtener un array de las propiedades del objeto
  const propiedades = Object.keys(miObjeto);
      
    return (
      <>
      <h2>Propiedades del objeto:</h2>
      <ul>
        {propiedades.map((propiedad, index) => (
          <li key={index}>{propiedad}: {miObjeto[propiedad]}</li>
        ))}
      </ul>
      </>
    );
  };
  