function IMC() {
    var peso = prompt("Dime tu peso en kilogramos")
    var estatura = prompt("Dime tu estatura en centimetros")
    //var resp_dolor = prompt("¿Tiene usted dolor de cabeza en este momento?")

    //let peso = document.getElementById("peso_user").value

    //let estatura = document.getElementById("estatura_user").value
    estatura = (estatura / 100)

    estatura_final = Math.pow(estatura, 2)


    let indice_masa_corporal = parseFloat(peso) / parseFloat(estatura_final)

    indice_masa_corporal = parseInt(indice_masa_corporal)
    console.log(peso)
    console.log(estatura_final)

    console.log("MAsa " + indice_masa_corporal)

    if (indice_masa_corporal < 18) {
        alert("Peso inferior al normal")
        //document.write("Peso inferior al normal")
    }
    else if (indice_masa_corporal >= 18 && indice_masa_corporal < 25) {
        alert("Peso Normal")
       // document.write("Peso Normal")
    }
    else if (indice_masa_corporal >= 25 && indice_masa_corporal < 30) {
        alert("Peso superior al normal")
        //document.write("Peso superior al normal")
    }
    else if (indice_masa_corporal >= 30) {
        alert("Tienes obesidad")
        //document.write("Tienes obesidad")
    }
    else {
        document.write("Datos erroneos")
    }
    
    return;
}


function cantidad_recomendada() {
    let dulces_almacenados = localStorage.getItem("dulces_local")
    dulces_almacenados = parseInt(dulces_almacenados)

    if (dulces_almacenados > 30) {
        alert("Comer tantos dulces no es bueno para la salud")
        console.log("Comer tantos dulces no es bueno para la salud")
    }
    else {
        alert("Aun te queda espacio en el carrito")
        console.log("Aun te queda espacio en el carrito")
    }

}

function carrito_de_compras() {
    let carrito = document.getElementById("cantidad_dulces").value
    let contador_dulces = 0
    if (localStorage.getItem("contador_dulces") == null) {
        localStorage.setItem("contador_dulces", 1)
        localStorage.setItem("carrito", carrito)


    }
    else {
        contador_dulces = localStorage.getItem("contador_dulces")
        contador_dulces = parseInt(contador_dulces) + 1
        localStorage.setItem("carrito")

    }
}
