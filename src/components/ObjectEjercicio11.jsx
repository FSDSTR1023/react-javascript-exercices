/* 
Asignación de Propiedades
Utiliza `Object.assign()` para combinar dos objetos 
en uno nuevo y renderiza el resultado.
*/

export const ObjectEjercicio11 = () => {
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

   
    const newCar = Object.assign({}, coche1, coche2);
    
    return (
      <>
      <p>{JSON.stringify(newCar)}</p>
      </>
    );
  };


   