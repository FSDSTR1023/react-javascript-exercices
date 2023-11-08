/* 
Iterar sobre Propiedades
Crea un objeto y usa `Object.keys()` para 
iterar sobre sus propiedades y mostrarlas en una lista.
*/

export const ObjectEjercicio2 = () => {
    const laptop = {
      modelo: 'MacBook Air',
      chip: 'Apple M1',
      color: 'oro',
      pantalla: '13.3 pulgadas',
      almacenamiento: '512 GB',
    }
    // Escribe tu solución
    
    return (
      <>
        <ul>
          {Object.keys(laptop).map((elemento) => <li>{elemento}</li>)}
        </ul>
      </>
    );
  };
  