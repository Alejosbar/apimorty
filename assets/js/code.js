// let estudiante = {
//     nombre: "Tomas",
//     edad: 47,
//     bictia: function(){
//         console.log(this.nombre)
//     }
// }
// estudiante.bictia()

// function saludo (){
//     console.log("Hola que tal")
// }

// saludo = () => console.log("Hola que tal")

let litros = 9 //La respuesta de la api
const x = new Promise((resolve, reject) => {
    if (litros==9) {
        resolve("Exito")
    } else{
        reject("Hay demasiado o poco contenido dentro de la botella")
    }
})

