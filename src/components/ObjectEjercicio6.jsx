/* 
Modificar Propiedades Anidadas
Modifica una propiedad anidada en un objeto y
renderiza el objeto actualizado.
*/

export const ObjectEjercicio6 = () => {
    // Escribe tu solución
   const [myNestedObject, setMyNestedObject] = useState({
    prop1: 'Valor 1',
    prop2: {
      subprop1: 'Subvalor 1',
      subprop2: {
        subsubprop1: 'Subsubvalor 1',
        subsubprop2: 'Subsubvalor 2',
      },
    },
  });
  const modificarPropiedadAnidada = () => {
    const objetoActualizado = { ...myNestedObject };
    objetoActualizado.prop2.subprop2.subsubprop1 = 'Nuevo Subsubvalor';
     setMyNestedObject(objetoActualizado);
  };
    return (
      <>
        <h2>Objeto con Propiedad Anidada Actualizado:</h2>
      <p>Valor de subsubprop1: {myNestedObject.prop2.subprop2.subsubprop1}</p>
      <button onClick={modificarPropiedadAnidada}>Modificar Propiedad Anidada</button>
      </>
    );
  };
  