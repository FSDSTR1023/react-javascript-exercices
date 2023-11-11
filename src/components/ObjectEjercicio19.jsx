/* 
Objetos Constantes
Crea un objeto constante fuera de un componente 
y accede a sus propiedades en el componente.
*/

export const ObjectEjercicio19 = () => {
  // Escribe tu solución
  const CONSTANT_OBJECT = { a: 1, b: 2 }
  return (
    <>
      <p>{CONSTANT_OBJECT.a}, {CONSTANT_OBJECT.b}</p>
    </>
  );
};

