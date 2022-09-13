import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"

let botonRegistro=document.getElementById("botonRegistro")
botonRegistro.addEventListener("click",function(evento){
    //frenar el comportamiento por defecto(en este caso es porque el formulario se limpia y autorecarga pero no queremos eso)
    event.preventDefault()
    //con value captura lo que el usuario escriba en la caja
    let email=document.getElementById("correo").value
    let password=document.getElementById("password").value
    let formulario=document.getElementById("formulario")
    console.log(email,password)

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registro exitoso',
          showConfirmButton: false,
          timer: 2000
        })
        formulario.reset()
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: errorMessage,
        })
      });

})