/* 
Ordenar Objetos
Crea un objeto y un botón que, al hacer clic, 
actualice una propiedad del objeto y 
muestre el objeto actualizado.
*/

import { useState } from "react";

export const ObjectEjercicio10 = () => {
  // Escribe tu solución
  const [obj, setObj] = useState({ a: 1 })

  function modifyObj() {
    setObj(prevObj => ({ ...prevObj, a: prevObj.a + 1 }))
  }
  return (
    <>
      <p>{JSON.stringify(obj)}</p>
      <button onClick={modifyObj}>Add</button>
    </>
  );
};

