/* 
Método Object.seal()
Utiliza Object.seal() para evitar que se agreguen o eliminen propiedades de un objeto, 
y verifica si puedes agregar una nueva propiedad o no.
*/

export const ObjectEjercicio24 = () => {
    const MyObject = {
      propiedad1: "1299€",
      propiedad2: "789€"
    }

  Object.seal(MyObject)

  MyObject.nuevaPropiedad ="17000€"
    return (
      <>
        <p>Object : {JSON.stringify(MyObject)}</p>
        <P>Nueva propiedad {MyObject.hasOwnProperty("nuevaPropiedad") ?"Si" : "No"}</P>
      </>
    );
  };
  
