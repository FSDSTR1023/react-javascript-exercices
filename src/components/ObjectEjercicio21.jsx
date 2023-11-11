/* 
Método Object.values():
Crea un objeto y utiliza Object.values() para renderizar una lista con los valores del objeto.
*/

export const ObjectEjercicio21 = () => {
  // Escribe tu solución
  const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
  };

  return (
    <>
      <ul>{Object.values(persona).map((key, i) => <li key={i}>{key}</li>)}</ul>
    </>
  );
};

