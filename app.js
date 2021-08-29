const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const selects = document.getElementById("interest");
const checkbox = document.getElementById("validCheck");
//
const buttomContinue = document.getElementById("btn_Continue");

//expresiones regulares
const expresiones = {
	fname: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    lname: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    fname: false,
    lname: false,
    phone: false,
    email: false
}

// Funcion de validacion
const validarFormulario = (e) =>{
    switch(e.target.name){
        case "fname":
            if(expresiones.fname.test(e.target.value)){
                document.getElementById('fname').classList.remove('error-form');
                document.getElementById('l-fname').classList.remove('error');
                //
                document.getElementById('fname').classList.add('good-form');
                document.getElementById('l-fname').classList.add('good');
                campos['fname'] = true;
            }
            else{
                document.getElementById('fname').classList.remove('good-form');
                document.getElementById('l-fname').classList.remove('good');
                //
                document.getElementById('fname').classList.add('error-form');
                document.getElementById('l-fname').classList.add('error');
                campos['fname'] = false;
            }
        break;
        case "lname":
            if(expresiones.lname.test(e.target.value)){
                document.getElementById('lname').classList.remove('error-form');
                document.getElementById('l-fname').classList.remove('error');
                //
                document.getElementById('lname').classList.add('good-form');
                document.getElementById('l-lname').classList.add('good');
                campos['lname'] = true;
            }
            else{
                document.getElementById('lname').classList.remove('good-form');
                document.getElementById('l-lname').classList.remove('good');
                //
                document.getElementById('lname').classList.add('error-form');
                document.getElementById('l-lname').classList.add('error');
                campos['lname'] = false;
            }
        break;
        case "phone":
            if(expresiones.phone.test(e.target.value)){
                document.getElementById('phone').classList.remove('error-form');
                document.getElementById('l-phone').classList.remove('error');
                //
                document.getElementById('phone').classList.add('good-form');
                document.getElementById('l-phone').classList.add('good');
                campos['phone'] = true;
            }
            else{
                document.getElementById('phone').classList.remove('good-form');
                document.getElementById('l-phone').classList.remove('good');
                //
                document.getElementById('phone').classList.add('error-form');
                document.getElementById('l-phone').classList.add('error');
                campos['phone'] = false;
            }
        break;
        case "email":
            if(expresiones.email.test(e.target.value)){
                document.getElementById('email').classList.remove('error-form');
                document.getElementById('l-email').classList.remove('error');
                //
                document.getElementById('email').classList.add('good-form');
                document.getElementById('l-email').classList.add('good');
                campos['email'] = true;
            }
            else{
                document.getElementById('email').classList.remove('good-form');
                document.getElementById('l-email').classList.remove('good');
                //
                document.getElementById('email').classList.add('error-form');
                document.getElementById('l-email').classList.add('error');
                campos['email'] = false;
            }
        break;
    }
};

// Metodo para recorrer los inputs del formulario
inputs.forEach((input)=>{
    //por cada input agregue
    input.addEventListener('keyup', validarFormulario);// ingreso tecla
    input.addEventListener('blur', validarFormulario);// click afuera
});

// Evento lista de seleccion
selects.addEventListener('change',(e)=>{
    e.preventDefault();
    if(selects.value >= 1){
        document.getElementById("validCheck").disabled = true;
        document.getElementById("otheri").disabled = true;
    }
    else{
        document.getElementById("validCheck").disabled = false;
        document.getElementById("otheri").disabled = false;
    }
});

// Evento checkbox
checkbox.addEventListener('change',(e)=>{
    e.preventDefault();
    if (checkbox.checked == true){
        document.getElementById("interest").disabled = true;
      } else {
        document.getElementById("interest").disabled = false;
        document.getElementById('otheri').value = '';
      }
});

// Evento validacion
formulario.addEventListener('keyup', (e)=>{
    e.preventDefault();
    if(campos.fname && campos.lname && campos.phone && campos.email){
        document.getElementById("btn_Continue").disabled = false;
    }
    else{
        document.getElementById("btn_Continue").disabled = true;
    }
});







