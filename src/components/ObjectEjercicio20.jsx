/* 
Métodos de Objeto
Crea un objeto con un método y llama a ese método en un componente.
*/


// Objeto con un método
const miObjeto = {
  nombre: "Juan",
  saludar: function() {
    return `Hola, soy ${this.nombre}.`;
  }
};

export const ObjectEjercicio20 = () => {
  // Llamamos al método saludar del objeto
  const saludo = miObjeto.saludar();

  return (
    <>
      <h2>Método de Objeto:</h2>
      <p>{saludo}</p>
    </>
  );
};
