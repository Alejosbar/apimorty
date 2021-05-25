function insertar() {
    let dato_local = localStorage.getItem("dato_local_storage")
    let tipo_dulces = document.getElementById("tipo_dulces").value
    localStorage.setItem("tipo_dulces", tipo_dulces)

    let dulces = []

    if (dato_local == null) {
        let carrito = [tipo_dulces]
        localStorage.setItem("dato_local_storage", carrito)
        dulces.push(tipo_dulces)
        //let carrito = [tipo_dulces]
        //localStorage.getItem("dato_local", carrito)
        console.log(dulces)
    }
    else {
        dato_auxiliar = [tipo_dulces]
        carrito = [localStorage.getItem('dato_local_storage')]
        carrito = carrito.concat(dato_auxiliar)
        localStorage.setItem('dato_local_storage', carrito)
        console.log(carrito)
    }
}

function cantidad_recomendada() {
    //let dulces_almacenados = localStorage.getItem("dulces_local")

    let cantidad_dulces = document.getElementById("cantidad_dulces").value
    
    
    localStorage.setItem("cantidad_dulces", cantidad_dulces)

    cantidad_dulces = parseInt(cantidad_dulces)

    if (cantidad_dulces > 30) {
        alert("Comer tantos dulces no es bueno para la salud")
        console.log("Comer tantos dulces no es bueno para la salud")
    }
    else {
        alert("Aun te queda espacio en el carrito")
        console.log("Aun te queda espacio en el carrito")
    }

}
function eliminar() {
    let dato_local = localStorage.getItem("dato_local_storage")
    let tipo_dulces = document.getElementById("tipo_dulces").value
    localStorage.setItem("tipo_dulces", tipo_dulces)

    if (dato_local != null) {
        let carrito = [tipo_dulces]
        localStorage.setItem("dato_local_storage", carrito)
        localStorage.clear("dato_local_storage")
        carrito.pop()
        //let carrito = [tipo_dulces]
        //localStorage.getItem("dato_local", carrito)
        console.log(carrito)
    }

    carrito.pop()
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






