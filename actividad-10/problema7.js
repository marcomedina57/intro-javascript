//  Problema 7
// **Objetos-Recursividad:**
// Dada la siguiente estructura de datos, encuentra la cantidad de veces que está la propiedad `id`

const root2 = {
  id: '123',
  child: [{
    id: '234',
    child: [{
      test: {
        id: 2
      }
    }]
  }],
  child2: [{
    id: '345',
    child3: {
      id: '534'
    }
  }]
};

cont = 0;
for(const pro in root2){
    if(pro === "id"){
        cont++
    } else {
        for(const [key, value] of Object.entries(root2[pro])){
            for(const [key, val] of Object.entries(value)){
                if (key === "id") {
                    cont++
                } else {
                    if (val.id){
                        cont++
                    } else {
                        for (const idFinal of val){
                            let ids = Object.values(idFinal);
                            for (const nombre of ids){
                                if(nombre.hasOwnProperty("id")){
                                    cont++;
                                }
                            }
                        }
                    }
                }
            }
            
        }

    }
    
}

console.log(`El numero de veces que se repite id es : ${cont}`);