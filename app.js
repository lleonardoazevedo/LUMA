const themeToggle = document.getElementById("theme-toggle")
const moon = document.querySelector(".moon")
const sun = document.querySelector(".sun")
const body = document.body

const elementoLista = document.querySelector('ul') /* ou trocar por ul*/
const elementoInput = document.querySelector('input')
const elementoBotao = document.querySelector('button')

const tarefas = []

function mostraTarefas() {

    elementoLista.innerHTML = ''

    for (tarefa of tarefas) {
        const elementoTarefa = document.createElement('li') /* aqui usa li*/
        const textoTarefa = document.createTextNode(tarefa)

        const elementoLink = document.createElement('a')
        const pos = tarefas.indexOf(tarefa)

        elementoLink.setAttribute('onclick', `deletaTarefa($ { pos })`)


        elementoTarefa.appendChild(textoTarefa)
        elementoLista.appendChild(elementoTarefa)
        elementoTarefa.appendChild(elementoLink)
    }
}


mostraTarefas()

function addTarefa() {
    const textoTarefa = elementoInput.value
    tarefas.push(textoTarefa)
    elementoInput.value = ''

    mostraTarefas()
}

elementoBotao.setAttribute('onclick', 'addTarefa()')

function deletaTarefa(pos) {
    tarefas.splice(pos, 1)
    mostraTarefas()
}

/* dark mode*/
themeToggle.addEventListener("click", () => {
    body.classList.contains("dark-mode") ?
        LightMode() :
        DarkMode();
})

sun.addEventListener("click", () => {
    body.classList.contains("dark-mode") ?
        LightMode() :
        DarkMode();
})

function DarkMode() {
    body.classList.remove("light-mode")
    body.classList.add("dark-mode")
}

function LightMode() {
    body.classList.remove("dark-mode")
    body.classList.add("light-mode")
}