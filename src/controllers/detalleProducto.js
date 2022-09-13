console.log("hola estoy detallando la compra");

//llamar a la memoria
let carrito

if(JSON.parse(localStorage.getItem("carrito"))!=null){
    carrito=JSON.parse(localStorage.getItem("carrito"))
    let pildora=document.getElementById("pildora")
    pildora.textContent=carrito.length
}else{
    carrito=[]
}


//JSON.parse es la forma de cambiar el string a objeto de nuevo
let producto=JSON.parse(localStorage.getItem("producto"))
console.log(producto)



// referenciar la imagen del producto
let fotos=document.getElementById("imagenInfo")
fotos.src=producto.fotos

let nombre=document.getElementById("nombreInfo")
nombre.textContent=producto.nombre

let descripcion=document.getElementById("descripcionInfo")
descripcion.textContent=producto.descripcion

let precio=document.getElementById("precioInfo")
precio.textContent=producto.precio

let pildora=document.getElementById("pildora")
console.log(pildora.textContent)

let popularidad=document.getElementById("popularidadInfo")
popularidad.textContent=producto.popularidad
popularidad.classList.add("fw-bold", "d-none")

let cantidadEstrellas=producto.popularidad

for (let index = 1; index <= cantidadEstrellas; index++) {
    if (index == 1) {
        let estrella1 = document.getElementById("1estrella")
        estrella1.classList.add("text-warning")
    }else if(index == 2){
        let estrella2 = document.getElementById("2estrella")
        estrella2.classList.add("text-warning")
    }else if(index == 3){
        let estrella3 = document.getElementById("3estrella")
        estrella3.classList.add("text-warning")
    }else if(index == 4){
        let estrella4 = document.getElementById("4estrella")
        estrella4.classList.add("text-warning")
    }else{
        let estrella5 = document.getElementById("5estrella")
        estrella5.classList.add("text-warning")
    }
}

//escucho el clic en el botón añadir al carrito:
let botonCarrito=document.getElementById("botonAgregarCarrito")
botonCarrito.addEventListener("click",function(evento){

    let cantidad=document.getElementById("cantidadProducto")
    cantidad=cantidad.value
    



    //agregamos la cantidad al objeto producto
    producto.cantidad=cantidad
    console.log(producto);

    //agregamos el producto al carrito de compras
    carrito.push(producto)
    console.log(carrito);

    //agregando el carrito a la memoria
    localStorage.setItem("carrito",JSON.stringify(carrito))


    //pintando la pildora con la cantidad de productos
    let cantidadCarrito=carrito.length
    pildora.textContent=cantidadCarrito




})


