const form = document.querySelector(".js-to-do"),
    input = document.querySelector(".js-add-to-do"),
    list = document.querySelector(".js-list");

let toDos = [];

function persistToDos() {
    const stringToDo = JSON.stringify(toDos);
    localStorage.setItem("toDos", stringToDo);
}

function saveToDo(text) {
    const toDoObject = {
        id: toDos.length + 1,
        value: text,
    };
    toDos.push(toDoObject);
    persistToDos();
}

function handleDelete(event) {
    const target = event.target;
    const li = target.parentElement;
    const ul = li.parentElement;
    const toDoId = li.id;
    ul.removeChild(li);
    toDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(toDoId);
    });
    persistToDos();
}

function addToDo(text) {
    const toDo = document.createElement("li");
    const label = document.createElement("label");
    const deleteBtn = document.createElement("span");
    toDo.id = toDos.length + 1;
    toDo.style.padding = "3px";
    label.innerHTML = text;
    deleteBtn.innerHTML = "❌";
    deleteBtn.style.position = "fixed";
    deleteBtn.style.right = "50px";
    deleteBtn.addEventListener("click", handleDelete);
    toDo.appendChild(label);
    toDo.appendChild(deleteBtn);
    list.appendChild(toDo);
    saveToDo(text);
}

function onSubmit(event) {
    event.preventDefault();
    const value = input.value;
    input.value = "";
    addToDo(value);
}

function loadToDos() {
    const loadedToDos = localStorage.getItem("toDos");
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            addToDo(toDo.value);
        });
    }
    return;
}

function init() {
    loadToDos();
}

form.addEventListener("submit", onSubmit);

init();
