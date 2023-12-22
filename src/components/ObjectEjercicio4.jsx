/* 
Eliminar Propiedades
Elimina una propiedad de un objeto y 
renderiza el objeto actualizado.
*/

export const ObjectEjercicio4 = () => {
    // Escribe tu solución
    const [myObject, setMyObject] = useState({
    prop1: 'Valor 1',
    prop2: 'Valor 2',
    prop3: 'Valor 3',
  });
  const eliminarPropiedad = (propiedad) => {
    const objetoActualizado = { ...myObject };
    delete objetoActualizado[propiedad];
      setMyObject(objetoActualizado);
  };
    return (
      <>
       <h2>Objeto Actualizado:</h2>
      <ul>
        {Object.keys(myObject).map((key) => (
          
          <li key={key}>
            <strong>{key}:</strong> {myObject[key]}
            <button onClick={() => eliminarPropiedad(key)}>Eliminar</button>
          </li>
        ))}
      </ul>
      </>
    );
  };
  
