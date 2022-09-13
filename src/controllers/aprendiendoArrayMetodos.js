// creando el array que contiene todos los productos de la tienda
    let productos=[
    {
        nombre:"DRUM KIT Pearl Export EXX 22'' Rock, Smokey Chrome",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/1bateria1.jpg?alt=media&token=5adea6a5-af34-4d77-826b-0677767d935f", "https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/1bateria2.jpg?alt=media&token=f3c4a7ce-1490-44ea-801c-b2e984d65b0d"],
        precio:739,
        popularidad:4,
        descripcion:"The Pearl Export EXX725BR/C21 22'' Rock Drum Kit, Smokey Chrome is a high-quality drum kit from Pearl, featuring 6-ply poplar and Asian mahogany for a crisp, warm tone complementing a range of drumming styles.Fitted with Remo drum heads,enhanced response and sensitivity is easily achieved. The drums also feature durable chrome hardware, adding to the structural integrity of the shells whilst complementing the stunning smokey chrome finish. The Export EXX Drum Kit is designed for beginner and intermediate drummers and includes a Pearl 830 series hardware pack and a Sabian SBR cymbal set, providing all you need to kick start your drumming career. Onstage or in the studio, the Pearl Export EXX Rock Drum Kit delivers the superior performance that you can expect from all Export series drums"
    },
    {
        nombre:"PIANO Roland GP607 Digital Grand, Polished Ebony",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/2Piano1.jpg?alt=media&token=3a6a8a64-9f32-47e3-8c42-e9fa906b1045", "https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/2piano2.jpg?alt=media&token=8a8e8730-2786-4dc8-9f92-ba824c14c6dc"],
        precio:4901,
        popularidad:3,
        descripcion:"The Roland GP607 Digital Grand Piano has a stunning finish and is packed with class leading technology to offer unforgettable playing experience. The mini grand piano size is large enough to have serious presence on any stage, but remains small enough to comfortably fit inside the home environment. The GP607 benefits from Roland's advanced SuperNatural piano modelling technology, developed over generations of Roland digital pianos. The PHA-50 hammer action keyboard has a similar feel to a true acoustic piano. The Bluetooth connectivity enhances your experience with the GP607 by integrating it with a range of dedicated editing and playback apps. Finally the polished ebony finish introduces a stunning look to this versatile instrument"
    },
    {
        nombre:"ACOUSTIC GUITAR Yamaha F310 Natural",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/10guitarra%20clasica1.jpg?alt=media&token=7150f89f-793a-4d17-99a1-7adc2b399e9d", "https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/10guitarra%20clasica2.jpg?alt=media&token=8994e5ee-15b0-44b0-8f08-d41ed054ed77"],
        precio:119,
        popularidad:5,
        descripcion:"Explore a rich, dynamic, well-rounded tone. Versatile with a sweet, melodic character that allows you to play almost any genre or style with great ease. And, with a traditional dreadnought body, your acoustic voice is loud, full, and beautifully dynamic. Experience a smooth, slick feel thanks to a slim, comfortable neck that's easier on your fingertips. Melodic and extremely playable - you won't want to put it down"
    },
    {
        nombre:"ELECTRIC GUITAR 3/4 + Miniamp, Black",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/3guitarra1.jpg?alt=media&token=5116996e-38d0-46e0-af8f-72c0375a2bf8", "https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/3guitarra2.jpg?alt=media&token=38155df2-ddf4-46d8-8aee-2a2fd9b5c735"],
        precio:100,
        popularidad:3,
        descripcion:"The 3/4 LA Electric Guitar accommodates smaller players needs while still projecting a powerful sound. It's comfortable, featuring lightweight tonewoods and a smooth fretboard that can be utilised for a range of genres perfect for a child who doesn't want to be limited in style. Better still, the 3/4 LA Electric Guitar comes equipped with a mini amplifier, gigbag, strap, cable, and plectrums - everything needed to play or practice, at home or in the classroom"
    },
    {
        nombre:"SAXOPHONE Alto Gold",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/4saxo2.jpg?alt=media&token=2406b7ca-17c4-413c-996a-6de94270c94e", "https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/4saxo1.jpg?alt=media&token=9377988e-2f6f-4198-942c-2943fdcfa2ec"],
        precio:320,
        popularidad:2,
        descripcion:"Is a reliable, durable and affordable instrument ideal for beginners and students. The saxophone produces a smooth tone with an easy blowing response ideal for those developing their technique. The durable, fully ribbed body is built to withstand regular practice and transport to and from lessons. A mouthpiece, case, reed and strap are included providing everything you need to get started straight away"
    },
    {
        nombre:"VIOLIN Yamaha Outfit, Full Size",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/5violin1.jpg?alt=media&token=daa6779a-5f72-4056-b9c1-cb00d9cf768e", "https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/5violin2.jpg?alt=media&token=f1c07ef2-13c6-4c5a-a2ed-6df0bf009b0b"],
        precio:385,
        popularidad:2,
        descripcion:"Your playing is becoming refined and so should your violin. The Yamaha V5 acoustic violin advances a student violinist to the higher grades with a more professional instrument. This is a violin made and designed for students, but has been created with the same traditional methods as high-end violins. High standard solid woods produce rich, warm sounds so you really get the most out of your advancing ability"
    },
    {
        nombre:"ACCORDION 24 Bass",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/6acordeon1.jpg?alt=media&token=bc33df53-80c4-470e-9ab1-e9d13c8a76a6", "https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/6acordeon2.jpg?alt=media&token=0cef1c04-cb3f-456f-8470-3efd3d799698"],
        precio:400,
        popularidad:1,
        descripcion:"Ideal for any beginner or intermediate player. The quality of the Accordion by Gear4music shines through with a fantastic full sound across its bass and treble range. A pearloid design and leather strap help finish our design in style"
    },
    {
        nombre:"TRUMPET Student Gold",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/7trompeta1.jpg?alt=media&token=12f5dd59-19c1-40a2-818b-100088c1ac27", "https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/7trompeta2.jpg?alt=media&token=ab8e90c8-19c6-4b8e-ab4d-8aa550c628df"],
        precio:130,
        popularidad:5,
        descripcion:"It's an affordable and robust instrument ideal for beginners. A yellow brass body and medium bore leadpipe produce a resonant and rich sound, even for smaller players. The nickel plated valves are long lasting, responsive and ideal for faster playing. The trumpet comes with a lightweight case and mouthpiece so beginners have everything they need to start playing straight away."
    },
    {
        nombre:"SITAR Bird Head Design",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/8citara1.jpg?alt=media&token=09ef5bcf-7377-4982-87bb-2e834f3c4ae7", "https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/8citara2.jpg?alt=media&token=45e3d41a-9406-4b2a-a2ea-d39e0aa80dfd"],
        precio:500,
        popularidad:4,
        descripcion:"The Sitar is one of the most common instruments in Indian Classical music ensemble. Featuring 7 primary plus 11 sympathetic strings, this instrument creates a rich and authentic tone that provides a drone throughout the music. This hand carved instrument has been carefully decorated, including a wonderfully designed bird head style peg box. The sitar also comes with a soft carry bag as well as a hard protective wooden case"
    },
    {
        nombre:"KEYBOARD MK-2000 61-key Portable - Complete Pack",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/9organeta1.jpg?alt=media&token=7ee196e3-f2d4-42b6-b3f1-2e2a99fac7c1", "https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/9organeta2.jpg?alt=media&token=503c475b-9999-4ca4-8434-c51516281974"],
        precio:110,
        popularidad:5,
        descripcion:"It's a great choice for pianists taking their first steps into the world of music. Comprehensive, the keyboard comes equipped with 61 keys with a broad range of features including a generous 510 sounds and rhythms, alongside 8 percussion pads and 24 songs you can play along to"
    },
    {
        nombre:"CONGAS LP City Series, Carved Mango",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/congas1.jpg?alt=media&token=41c7ee09-a1b4-4ebd-9c76-a7ed73190e47", "https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/congas2.jpg?alt=media&token=4605de32-ca2e-4a1b-9383-3b201ae8c9c8"],
        precio:385,
        popularidad:3,
        descripcion:"El set de conga LP City Series es ideal tanto para principiantes como para profesionales gracias a sus potentes tonos y su diseño ergonómico. Los cascos Siam Oak brindan una excelente proyección, ideal para tocar en conjuntos grupales. Estos se combinan con cabezas de cuero natural sin curtir, proporcionando durabilidad y una superficie de juego detallada. Gracias a los cómodos aros EZ Curve y al diseño robusto, el conjunto de conga también es ideal para entornos educativos"
    },
    {
        nombre:"CONTRABAJO ELÉCTRICO Yamaha SLB300 Silent Double Bass",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/contrabajo%20el%C3%A9ctrico1.jpg?alt=media&token=61259b30-3b7a-4e7f-a1f2-285ae9b67ad6", "https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/contrabajo%20el%C3%A9ctrico2.jpg?alt=media&token=22a363e7-d5e2-42ed-b964-9f45106dbf14"],
        precio:343,
        popularidad:5,
        descripcion:"El contrabajo eléctrico Yamaha SLB300 ofrece un tono rico y auténtico con una capacidad de ejecución sin igual. Perfecto para músicos que no quieren viajar con un bajo acústico, el diseño compacto del SLB300 es realmente un salvavidas en escenarios en vivo. Con la tecnología pionera SRT de Yamaha, se sorprenderá de cómo suena el SLB300. SRT modela la forma en que un contrabajo acústico sonaría profesionalmente con un micrófono en un estudio de grabación, completo con la resonancia añadida de un instrumento acústico. El resultado es un tono que suena increíble. Un instrumento de este nivel también necesita verse bien. Es por eso que el cuerpo y el marco tienen un acabado envejecido para resaltar la belleza orgánica de la madera. Este acabado se verá y se sentirá familiar para los bajistas acústicos. El contrabajo eléctrico Yamaha SLB300 incluye estuche blando, sordina y llave inglesa."
    },
]


//trayendo la etiqueta contenedora del html que va a empezar a llenar (la base para pintar)
let fila=document.getElementById("fila")

//RECORRIENDO EL ARREGLO. Por cada producto creará las siguientes etiquetas al html desde JS
productos.forEach(function(producto){
    //creando un div desde JS
    let columna=document.createElement("div", "mt-3")
    columna.classList.add("col")
    
    //creando una tarjeta
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "shadow", "text-center", "h-100")

    //creando una imagen
    let fotos=document.createElement("img")
    fotos.classList.add("img-fluid", "w-100")
    fotos.src=producto.fotos[0]
    
    //detectando el evento de pasar el mouse sobre una imagen
    fotos.addEventListener("mouseover",function(){
        fotos.src=producto.fotos[1]
    })
        //detectando el evento de quitar el mouse sobre una imagen
    fotos.addEventListener("mouseleave",function(){
        fotos.src=producto.fotos[0]
    })
    fotos.addEventListener("mouseup",function(){
        fotos.src=producto.fotos[0]
    })
    //crear el nombre
    let nombre=document.createElement("h3")
    nombre.classList.add("fw-bold")
    nombre.textContent=producto.nombre

    let precio=document.createElement("h4")
    precio.classList.add("fw")
    precio.textContent="£"+producto.precio

    let popularidad=document.createElement("h5")
    popularidad.classList.add("fw-bold","d-none")
    popularidad.textContent=producto.popularidad

    let descripcion=document.createElement("p")
    descripcion.classList.add("text-danger", "d-none")
    descripcion.textContent=producto.descripcion

    //definiendo padres e hijos
    tarjeta.appendChild(fotos)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(popularidad)
    tarjeta.appendChild(descripcion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    
})
