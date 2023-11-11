/* 
Método Object.entries()
Crea un objeto y utiliza Object.entries() para renderizar una lista con las entradas del objeto.
*/

export const ObjectEjercicio22 = () => {
  // Escribe tu solución
  const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
  };
  return (
    <>
      <ul>{Object.entries(persona).map(([key, value], i) => <li key={i}>{key} : {value}</li>)}</ul>
    </>
  );
};


