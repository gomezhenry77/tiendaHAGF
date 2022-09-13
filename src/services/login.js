import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"

let botonIniciar=document.getElementById("botonIniciar")
botonIniciar.addEventListener("click",function(evento){
  evento.preventDefault()
  let email=document.getElementById("emailLogin").value
  let password=document.getElementById("passwordLogin").value

  console.log(email,password)

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Ha iniciado correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  })
  .catch((error) => {
    const errorCode = error.code;
    Swal.fire({
      icon: 'error',
      title: 'Usuario o contraseña incorrectos',
      text: errorMessage,
    })
    
  });

  
})