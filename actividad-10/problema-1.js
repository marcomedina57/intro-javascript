// ### Problema 1:
// Crea una función para encontrar la diferencia de edad entre el miembro mas viejo y el más jóven de la familia. Retorna como resultado un objeto indicando las edades de cada miembro, y la diferencia de edad.
const Family = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];

  const mayorMenor = () => {
      let min = Family[0]["age"];
      let max = Family[0]["age"];

      for(let fam of Family){
          if (min > fam.age){
              console.log(min)
              min = fam.age
          } 
      
          if (max < fam.age){
              max = fam.age
          }
      }

      return [min, max]

  }

  const [min, max] = mayorMenor();
console.log(` El mayor tiene  ${max} años y el menor ${min} la diferencia es de ${max - min}`)