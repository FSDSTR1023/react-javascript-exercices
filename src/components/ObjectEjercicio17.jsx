/* 
Comparar Objetos
Crea una función que compare dos objetos y determine si son iguales o no.
*/

export const ObjectEjercicio17 = () => {
  // Escribe tu solución

  const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
  };
  const persona2 = {
    nombre: "Robert",
    edad: 25,
    ciudad: "Lleida"
  };
  function compareObj(obj1, obj2) {
    JSON.stringify(obj1) === JSON.stringify(obj2)
  }

  return (
    <>
      <p>{compareObj(persona, persona2) ? 'Son iguales' : 'No lo son'}</p>
    </>
  );
};

