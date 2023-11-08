/* 
Ordenar Objetos
Crea un objeto y un botón que, al hacer clic, 
actualice una propiedad del objeto y 
muestre el objeto actualizado.
*/

import { useState } from "react";

export const ObjectEjercicio10 = () => {
    const [coche, setCoche] = useState({
      marca: 'Citroën',
      modelo: 'C3',
      año: 2015,
      color: 'blanco',
      kilómetros: 50000
    }); 
  
  
  function handleClick() {
    setCoche({ ...coche, color: 'rojo'}); 
    }

  function handleReset() {
    setCoche({...coche, color: 'blanco'})
  }


    return (
      <>
        <button onClick={handleClick}>Cambia el color</button>
        <button onClick={handleReset}>Reset</button>
        <p>Color de tu coche: {coche.color}</p>
      </>
    );
  };
  
