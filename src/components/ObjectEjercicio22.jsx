/* 
Método Object.entries()
Crea un objeto y utiliza Object.entries() para renderizar una lista con las entradas del objeto.
*/

import React from 'react';

// Objeto
const miObjeto = {
  nombre: "Juan",
  edad: 25,
  ciudad: "Madrid",
};

export const ObjectEjercicio22 = () => {
  // Obtener las entradas del objeto usando Object.entries()
  const entradas = Object.entries(miObjeto);

  return (
    <>
      <h2>Entradas del Objeto:</h2>
      <ul>
        {entradas.map(([clave, valor], index) => (
          <li key={index}>
            {clave}: {valor}
          </li>
        ))}
      </ul>
    </>
  );
};
