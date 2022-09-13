import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"

let botonSalir=document.getElementById("botonSalir")
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user.email);
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;

    let botonusuario=document.getElementById("usuario")
    botonusuario.textContent=user.email
    botonSalir.classList.remove("d-none")
    // ...
  } else {
    // User is signed out
    // ...
    //para eliminar el salir de la barra
    
    botonSalir.classList.add("d-none")
  }
});