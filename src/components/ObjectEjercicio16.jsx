/* 
Desestructuración en Parámetros
Desestructura un objeto directamente en los parámetros de una función.
*/

export const ObjectEjercicio16 = () => {

    const persona = {
      nombre: "Shirley", 
      ciudad: "Los Angeles"
    }

    const saludo = ({nombre, ciudad}) => {
      return "Hola " + nombre + " estás en " + ciudad ;
    }
    
    return (
      <>
        <p>{saludo(persona)}</p>
      </>
    );
  };
  