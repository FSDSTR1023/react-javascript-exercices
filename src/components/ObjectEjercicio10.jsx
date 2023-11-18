/* 
Ordenar Objetos
Crea un objeto y un botón que, al hacer clic, 
actualice una propiedad del objeto y 
muestre el objeto actualizado.
*/

import React, { useState } from 'react';

export const ObjectEjercicio10 = () => {
  // Estado para almacenar el objeto
  const [miObjeto, setMiObjeto] = useState({
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid",
  });

  // Función para actualizar una propiedad del objeto
  const actualizarEdad = () => {
    // Creamos una copia del objeto original y actualizamos la propiedad
    const objetoActualizado = { ...miObjeto, edad: 26 };

    // Actualizamos el estado con el objeto modificado
    setMiObjeto(objetoActualizado);
  };

  return (
    <>
      <h2>Objeto Actual:</h2>
      <p>Nombre: {miObjeto.nombre}</p>
      <p>Edad: {miObjeto.edad}</p>
      <p>Ciudad: {miObjeto.ciudad}</p>
      <button onClick={actualizarEdad}>Actualizar Edad</button>
    </>
  );
};

