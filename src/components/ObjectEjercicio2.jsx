/* 
Iterar sobre Propiedades
Crea un objeto y usa `Object.keys()` para 
iterar sobre sus propiedades y mostrarlas en una lista.
*/

export const ObjectEjercicio2 = () => {
  // Escribe tu solución
  const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
  };
  return (
    <>
      <ul>
        {Object.keys(persona).map((key, i) => <li key={i}>{key}: {persona[key]}</li>)}
      </ul>
    </>
  );
};
