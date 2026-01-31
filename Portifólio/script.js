const botao = document.getElementById("ThemeToggle")
console.log(botao)

botao.addEventListener('click', function() {
    console.log("botao clicado");
        document.body.classList.toggle('dark-mode')
});

const nomeInput = document.getElementById("nameInput")
console.log("nomeInput")

const displayName = document.getElementById("display-name")
console.log("displayName")

nomeInput.addEventListener('input', function(e){
    displayName.textContent =e.target.value
});
