import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"

let botonSalir=document.getElementById("botonSalir")
botonSalir.addEventListener("click",function(evento){

    
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Gracias por visitarnos',
        showConfirmButton: false,
        timer: 1500
      })
      //el window.location es para redirigir, cuando es a la propia página lo que hace es recargarse
      window.location.href="./index.html"
    }).catch((error) => {
      // An error happened.
    });

})

