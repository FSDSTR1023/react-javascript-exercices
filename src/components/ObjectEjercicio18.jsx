/* 
Objeto como Estado
Usa un objeto como estado en un componente y actualiza una propiedad del objeto.
*/

import React, { useState } from 'react';

export const ObjectEjercicio18 = () => {
  // Estado inicial con un objeto
  const [estado, setEstado] = useState({
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid",
  });

  // Función para actualizar la propiedad 'edad' del objeto
  const aumentarEdad = () => {
    // Crear una copia del objeto actual
    const nuevoEstado = { ...estado };

    // Actualizar la propiedad 'edad'
    nuevoEstado.edad += 1;

    // Actualizar el estado con el nuevo objeto
    setEstado(nuevoEstado);
  };

  return (
    <>
      <h2>Estado con Objeto:</h2>
      <p>Nombre: {estado.nombre}</p>
      <p>Edad: {estado.edad}</p>
      <p>Ciudad: {estado.ciudad}</p>
      <button onClick={aumentarEdad}>Aumentar Edad</button>
    </>
  );
};


