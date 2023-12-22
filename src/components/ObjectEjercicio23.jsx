/* 
Método Object.freeze()
Utiliza Object.freeze() para evitar que un objeto sea modificado, 
y verifica si el objeto es modificable o no.
*/

export const ObjectEjercicio23 = () => {
      const miObjeto = {
    propiedad1: "valor1",
    propiedad2: "valor2"
  };
    Object.freeze(miObjeto)

     miObjeto.propiedad1 = "nuevoValor"

      const esModificable = Object.isFrozen(miObjeto)
    return (
      <>
        <p>{JSON.stringify(miObjeto)}</p>
        <p>{esModificable ? "No" : "Sí"}</p>
      </>
    );
  };

