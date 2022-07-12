// 1 - Concatena los siguientes arreglos

const animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']

const animalsSoon = ['panter', 'dragon', 'turtle'];

let arrConcat = animals.concat(animalsSoon)
console.log(arrConcat);


// 2 aocmoda el arreglo de menor a mayor
const arrAcomodar = [4,6,1,0,8,2,45,11,5,33,50,101]
console.log(arrAcomodar.sort((a,b) =>  a -b));

// 3 agregar un nuevo animal cow
arrConcat.push('cow')
console.log(arrConcat)


// 4.- retira el elemento eagle
console.log(arrConcat.slice(arrConcat.indexOf('eagle'), arrConcat.indexOf('eagle') + 1));

// 5 .- Encuentra el index del animal parrot
for (let i = 0; i < arrConcat.length; i ++){
    let indexOf = arrConcat.indexOf('parrot');
    if (indexOf !== -1){
        console.log(`El indice de parrot es: ${indexOf}`)
    }
}