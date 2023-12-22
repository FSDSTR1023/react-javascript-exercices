/* 
Método splice()
Utiliza el método forEach() para sumar todos 
los elementos de un array y mostrar el resultado.
*/

export const MetodoForEach = () => {
  const numeros = [1, 2, 3, 4, 5];
 
  const elementosRenderizados = [];
  numeros.forEach((numero, index) => {
    elementosRenderizados.push(<p key={index}>Número: {numero}</p>);
  })
  
  return (
    <>
      {elementosRenderizados}
    </>
  );
};
