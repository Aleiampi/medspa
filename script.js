let botonFormulario = document.getElementById('botonFormulario'),
    nombre = document.getElementById('nombre'),
    email = document.getElementById('email'),
    mensaje = document.getElementById('mensaje');



function validarNombre (){
    if (nombre.value == ""){
        alert("ingrese su nombre")
        
    }
}

function validarEmail (){
    // if (email.value == ""){
    //     alert("ingrese su email")
    // }

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.value.match(validRegex)) {

    alert("Valid email address!");

    // document.form1.text1.focus();

    return true;

  } else {

    alert("Invalid email address!");

    // document.form1.text1.focus();

    return false;

  }

}


function validarMensaje (){

    let texto = mensaje.value;
    if (texto==""){
        alert("Ingrese su mensaje")
    }
}



function clearForm() {
    document.getElementById('formulario').reset();
    alert("mensaje enviado")
}

botonFormulario.addEventListener('click', (e)=>{
    e.preventDefault();
    validarNombre();
    validarEmail();
    validarMensaje();
    clearForm();
})


