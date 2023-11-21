/* 
Ordenar Objetos
Crea un objeto y un botón que, al hacer clic, 
actualice una propiedad del objeto y 
muestre el objeto actualizado.
*/
import React, { useState } from 'react';

export const ObjectEjercicio10 = () => {
  // Escribe tu solución
  const [age, setAge] = useState({ value: 0 });

  const updateAge = () => {
    setAge (prevAge => ({ ...prevAge, value: prevAge.value + 1}))
  }

  return (
    <>
      <div>
        <p>Edad actualizada: {JSON.stringify(age.value)}</p>
        <button onClick={updateAge}>Un año más!</button>
      </div>
    </>
  );
};
  
