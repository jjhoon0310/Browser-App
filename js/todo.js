const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let todos = [];

const TODOS_KEY = "todos";

function addingTodo(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    todoSubmit(newTodoObj);
    saveTodo();
}

function todoSubmit(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = newTodo.id;
    span.innerText = newTodo.text;
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    // Arrow funtions: Arrow means 'return'
    // let sum = (a, b) => a + b;

    // let sum = function(a, b) {
    // return a + b;
    //} ;
    saveTodo();
}

todoForm.addEventListener("submit", addingTodo);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (saveTodo !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(todoSubmit);
}
