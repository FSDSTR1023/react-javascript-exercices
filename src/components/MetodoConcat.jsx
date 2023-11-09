/* 
Método concat()
Combina dos arrays y muestra el resultado en 
una lista utilizando el método concat().
*/

export const MetodoConcat = () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];

  return (
    <>
      <ul>
        {
          arr1.concat(arr2).map((number)=> <li>{number}</li>)
        }
      </ul>
    </>
  );
};

