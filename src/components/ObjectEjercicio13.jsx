/* 
Comprobar Propiedades
Comprueba si un objeto tiene una propiedad 
específica utilizando `hasOwnProperty()`.
*/

export const ObjectEjercicio13 = () => {
  const coche = {
    marca: 'Citroën',
    modelo: 'C3',
    año: 2015,
    color: 'blanco',
    kilómetros: 50000,
    puertas: 4,
  }

    
    return (
      <>
        <p>{coche.hasOwnProperty("color") ? "true" : "false"}</p>
      </>
    );
  };

