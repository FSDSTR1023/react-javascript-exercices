/* 
Métodos de Objeto
Crea un objeto con un método y llama a ese método en un componente.
*/

export const ObjectEjercicio20 = () => {
  // Escribe tu solución
  const methodObj = {
    saludar: () => 'Hello World'
  }
  return (
    <>
      <p>{methodObj.saludar()}</p>
    </>
  );
};

