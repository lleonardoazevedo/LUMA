const themeToggle = document.getElementById("theme-toggle");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const body = document.body
const cross = document.querySelector(".cross");
const inputTarefa = document.querySelector('input-tarefa');
const tarefas = document.querySelector('tarefas');

var enterButton = document.getElementById("enter");
var input = document.getElementById("task");
var ul = document.getElementById("list");
var item = document.getElementsByTagName("li");
var p = document.getElementById("title");


function creatLi() {
    const li = document.createElement(li);
    return li;

}


function createTarefa(textoInput) {
    const li = document.createElement()
    li.innerHTML = textoInput
    tarefas.appendChild(li)
}

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");

    // var ul = document.createElement("list")

    var p = document.createElement("p");
    li.appendChild(
        p.appendChild(document.createTextNode(input.value)));

    ul.appendChild(li);
    input.value = "";

    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);
    li.innerHTML += ' ';
    li.appendChild(X);

    function deleteListItem() {
        li.classList.add("delete");
    }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress() {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
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