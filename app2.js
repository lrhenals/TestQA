const checkboxS = document.getElementById("validaS");
const checkboxH = document.getElementById("validaH");

// Evento checkbox
checkboxS.addEventListener('change',(e)=>{
    e.preventDefault();
    if (checkboxS.checked == true){
        document.getElementById("service1").checked = true;
        document.getElementById("service2").checked = true;
        document.getElementById("service3").checked = true;
        document.getElementById("service4").checked = true;
        document.getElementById("service5").checked = true;
      } else {
        document.getElementById("service1").checked = false;
        document.getElementById("service2").checked = false;
        document.getElementById("service3").checked = false;
        document.getElementById("service4").checked = false;
        document.getElementById("service5").checked = false;
      }
});

checkboxH.addEventListener('change',(e)=>{
    e.preventDefault();
    if (checkboxH.checked == true){
        document.getElementById("home1").checked = true;
        document.getElementById("home2").checked = true;
        document.getElementById("home3").checked = true;
        document.getElementById("home4").checked = true;
        document.getElementById("home5").checked = true;
      } else {
        document.getElementById("home1").checked = false;
        document.getElementById("home2").checked = false;
        document.getElementById("home3").checked = false;
        document.getElementById("home4").checked = false;
        document.getElementById("home5").checked = false;
      }
});

// Evento back
const buttomBack = document.getElementById("btn_Back");

buttomBack.addEventListener('click', (e)=>{
  document.location.href = 'http://localhost/vinixcode/';
});
