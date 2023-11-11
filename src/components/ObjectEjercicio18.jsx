/* 
Objeto como Estado
Usa un objeto como estado en un componente y actualiza una propiedad del objeto.
*/

import { useState } from "react";

export const ObjectEjercicio18 = () => {
  // Escribe tu solución
  const [obj, setObj] = useState({ a: 1 })

  function modifyObj() {
    setObj(prevObj => ({ ...prevObj, a: prevObj.a + 1 }))
  }

  return (
    <>
      <button onClick={modifyObj}>{JSON.stringify(obj)}</button>
    </>
  );
};


