/* 
Objeto como Estado
Usa un objeto como estado en un componente y actualiza una propiedad del objeto.
*/

import { useState } from "react";

export const ObjectEjercicio18 = () => {
  
    const [objState, setObjState] = useState({a: 3, b: "hola", c: 4});
    function updateValues() {
      objState.a = 30;
      objState.b = 40;
      objState.c = 50;
      setObjState({...objState});
    }
  
    const resetState = () => {
      setObjState({a: 3, b: "hola", c: 4})
    }

    
    return (
      <>
        <p>Las propiedades son las siguientes:</p>
        <ul>
          <li>{objState.a}</li>
          <li>{objState.b}</li>
          <li>{objState.c}</li>
        </ul>
        <button onClick={updateValues}>Actualizar</button>
        <button onClick={resetState}>Reset</button>
      </>
    );
  };
  

