/* 
Método slice()
Extrae y muestra los elementos de un array desde el índice 2 
hasta el índice 5 utilizando el método slice().
*/

export const MetodoSlice = () => {
  const numeros = [0, 1, 2, 3, 4, 5, 6];

  numeros.slice();

  return (
    <>
      Elementos extraídos (índice 2, 3, 4 y 5):
      <ul>
        {
          numeros.slice(2,6).map((number)=> <li>{number}</li>)
        }
      </ul>
    </>
  );
};

