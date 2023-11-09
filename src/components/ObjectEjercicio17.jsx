/* 
Comparar Objetos
Crea una función que compare dos objetos y determine si son iguales o no.
*/

export const ObjectEjercicio17 = () => {
  const coche1 = {
    marca: 'Citroën',
    modelo: 'C3',
    año: 2015,
    color: 'blanco',
  }

  const coche2 = {
    marca: 'SEAT',
    año: 2018,
    kilómetros: 50000,
    puertas: 4,
  }
    
    return (
      <>
        <p>{JSON.stringify(coche1) === JSON.stringify(coche2) ? "true" : "false"}</p>
      </>
    );
  };
  
