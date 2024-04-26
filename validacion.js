const moon_btn= document.querySelector("#toogle-btn--img");


// utilizo un interruptor para los modos de luz
    
moon_btn.addEventListener("click",function(){
    let body = document.querySelector("body");
    if (body.classList.contains("dark-mode")){
        body.classList.remove("dark-mode");
        moon_btn.setAttribute("src", "./assets/moon.png");
    }else{
        body.classList.add("dark-mode");
        moon_btn.setAttribute("src", "./assets/sun.png");
}});

function capturarDatos(){       
    
    let nombre = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let asunto = document.getElementById('asunto').value;
    let mensaje = document.getElementById('mensagem').value;

    // Verificar si los campos obligatorios están vacíos
    if (!nombre || !email || !asunto || !mensaje) {
        alert('Todos los campos son obligatorios.');
        return; // Detener la función si algún campo está vacío
    }

     // Verificar si el formato del correo electrónico es válido
     //usando una expresion regular que básicamente es un patrón
     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(email)) {
         alert('Por favor, introduce una dirección de correo electrónico válida.');
         return; // Detener la función si el correo electrónico no es válido
     }

    let user = {
        nombre: nombre,
        email: email,
        asunto: asunto,
        mensaje: mensaje
    };    

    
    // Verificamos si ya hay datos en localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];    
    
    // Agregamos el nuevo usuario a la lista
    usuarios.push(user);    
    

    // Guardamos la lista actualizada en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));   

    console.log(usuarios);

   
}

// function imprimir(usuarios){
//     usuarios.forEach(user=> {          
//         console.log(user);  
        
//     });       

// }








