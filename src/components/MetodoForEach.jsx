/* 
Método splice()
Utiliza el método forEach() para sumar todos 
los elementos de un array y mostrar el resultado.
*/

export const MetodoForEach = () => {
  const numeros = [1, 2, 3, 4, 5];
  let  suma = 0;
    numeros.forEach (num => {suma += num;
    });
    return (
    <p>{suma}</p>
  );
};
