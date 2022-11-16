const formulario = document.getElementById('formulario');
const nome       = document.querySelector("#nome");
const email      = document.querySelector('#email');
const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
const telefone   = document.querySelector("#telefone");
const profissao  = document.querySelector("#profissao"); 
const inputs     = document.querySelectorAll(".input-padrao");

// Validação do Nome:_________________________________________________________________________________________________________________________________________________________________________________________________


function erroNome(index){
    let span = document.querySelector(".formulario__span--nome") 

    inputs[index].style.border = '2px solid #e63636';
    span.textContent = "O nome deve ter no mínimo 3 caracteres.";
}

function tiraErroNome(index){
    let span = document.querySelector(".formulario__span--nome") 

    inputs[index].style.border = '2px solid #008000';
    span.textContent = ""

}

function validaNome(){
    if (inputs[0].value.length < 3){
        erroNome(0);
    }
    else {
        tiraErroNome(0)
    }
}

//Validação do e-mail:_________________________________________________________________________________________________________________________________________________________________________________________________


function erroEmail(){
    let span = document.querySelector(".formulario__span--email") 

    email.style.border = '2px solid #e63636';
    span.textContent = "O e-mail deve ser válido";

}

function tiraErroEmail(){
    let span = document.querySelector(".formulario__span--email") 

    email.style.border = '2px solid #008000';
    span.textContent = ""

}

function validaEmail(){
    if(emailRegex.test(email.value)){
        tiraErroEmail();
    }
    else{
        erroEmail();
    }
}


// Validação do Telefone:_________________________________________________________________________________________________________________________________________________________________________________________________


function erroTelefone(index){
    let span = document.querySelector(".formulario__span--telefone") 

    inputs[index].style.border = '2px solid #e63636';
    span.textContent = "O Telefone deve ser válido";

}


function tiraErroTelefone(index){
    let span = document.querySelector(".formulario__span--telefone") 

    inputs[index].style.border = '2px solid #008000';
    span.textContent = ""

}

function validaTelefone(){
    if (inputs[2].value.length < 10 || inputs[2].value.length > 11) {
        erroTelefone(2);
    }
    else {
        tiraErroTelefone(2)
    }
}










