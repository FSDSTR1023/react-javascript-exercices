/* 
Método findIndex()
Encuentra el índice del primer número mayor que 10 
en un array utilizando el método findIndex().
*/

export const MetodoFindIndex = () => {
  const numeros = [5, 10, 15, 20];

  return (
<p> {numeros.findIndex (num => num > 10)
  }</p>
  );
};
