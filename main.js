// Verificação input email
const inputEmail = document.getElementById("email");
let emailOk = false;

inputEmail.addEventListener("input", function () {
    let email = inputEmail.value;
    if (email.includes("@") && email.includes(".") && email.length >= 5) {
        inputEmail.style.border = "1.4px solid green";
        emailOk = true;
    } else {
        inputEmail.style.border = "1.4px solid red";
        emailOk = false;
    }
    statusBotao();
});

// Verificação input nome
const inputNome = document.getElementById("nome");
let nomeOk = false;

inputNome.addEventListener("input", function () {
    const nome = inputNome.value;

    if (nome.length < 3) {
        inputNome.style.border = "1.4px solid red";
        nomeOk = false;
    } else {
        inputNome.style.border = "1.4px solid green";
        nomeOk = true;
    }
    statusBotao();
});

// Verificação input telefone
const inputTelefone = document.getElementById("telefone");
let telefoneOk = false;

inputTelefone.addEventListener("input", function () {
    let telefone = inputTelefone.value;

    telefone = telefone.replace(/\D/g, "");
    telefone = telefone.slice(0, 11);

    if (telefone.length > 2) {
        telefone = `(${telefone.slice(0, 2)}) ${telefone.slice(2)}`;
    }
    if (telefone.length > 10) {
        telefone = telefone.slice(0, 10) + "-" + telefone.slice(10);
    }

    inputTelefone.value = telefone;
    if (telefone.length == 15) {
        telefoneOk = true;
        inputTelefone.style.border = "1.4px solid green";
    } else {
        inputTelefone.style.border = "1.4px solid red";
        telefoneOk = false;
    }
    statusBotao();
});

// Verificação textarea
const inputMensagem = document.getElementById("mensagem");
let mensagemOk = false;

inputMensagem.addEventListener("input", function () {
    var mensagem = inputMensagem.value;

    if (mensagem.length < 4) {
        mensagemOk = false;
        inputMensagem.style.border = "1.4px solid red";
    } else {
        mensagemOk = true;
        inputMensagem.style.border = "1.4px solid green";
    }
    statusBotao();
});

// Verificação botão de envio
const botaoEnviar = document.getElementById("enviar");

function statusBotao() {
    if (nomeOk && emailOk && telefoneOk && mensagemOk) {
        botaoEnviar.disabled = false;
    } else {
        botaoEnviar.disabled = true;
    }
}

// Envio do alert de envio e formatação da página
botaoEnviar.addEventListener("click", function () {
    alert("Formulário enviado!");
    document.getElementById("formulario").reset();
    botaoEnviar.disabled = true;
    inputNome.style.border = "";
    inputEmail.style.border = "";
    inputTelefone.style.border = "";
    inputMensagem.style.border = "";
    nomeOk = false;
    emailOk = false;
    telefoneOk = false;
    mensagemOk = false;
});
