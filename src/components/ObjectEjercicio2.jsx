/* 
Iterar sobre Propiedades
Crea un objeto y usa `Object.keys()` para 
iterar sobre sus propiedades y mostrarlas en una lista.
*/

export const ObjectEjercicio2 = () => {
    const myObject = {
    prop1: 'Valor 1',
    prop2: 'Valor 2',
    prop3: 'Valor 3',
};
    const objectKeys = Object.keys(myObject);
  
    return (
      <>
       <h2>Propiedades del Objeto:</h2>
      <ul>
        {objectKeys.map((key) => (
          <li key={key}>
            <strong>{key}:</strong> {myObject[key]}
          </li>
        ))}
      </ul>
      </>
    );
  };
  