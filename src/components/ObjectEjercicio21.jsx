/* 
Método Object.values():
Crea un objeto y utiliza Object.values() para renderizar una lista con los valores del objeto.
*/


// Objeto
const miObjeto = {
  nombre: "Juan",
  edad: 25,
  ciudad: "Madrid",
};

export const ObjectEjercicio21 = () => {
  // Obtener los valores del objeto usando Object.values()
  const valores = Object.values(miObjeto);

  return (
    <>
      <h2>Valores del Objeto:</h2>
      <ul>
        {valores.map((valor, index) => (
          <li key={index}>{valor}</li>
        ))}
      </ul>
    </>
  );
};
