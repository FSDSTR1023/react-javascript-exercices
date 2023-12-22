/* 
Agregar Propiedades
Agrega una nueva propiedad a un objeto y 
renderiza el objeto actualizado.
*/

export const ObjectEjercicio3 = () => {
    // Escribe tu solución
    const [myObject, setMyObject] = useState({
    prop1: 'Valor 1',
    prop2: 'Valor 2',
    prop3: 'Valor 3',
  });
   const agregarNuevaPropiedad = () => {
    setMyObject({
      ...myObject,
      nuevaPropiedad: 'Nuevo Valor',
    });
  };
    return (
      <>
       <h2>Objeto Actualizado:</h2>
      <ul>
        {Object.keys(myObject).map((key) => (
          <li key={key}>
            <strong>{key}:</strong> {myObject[key]}
          </li>
        ))}
      </ul>

      <button onClick={agregarNuevaPropiedad}>Agregar Nueva Propiedad</button>
      </>
    );
  };
  