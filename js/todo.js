const todoForm = document.getElementById("todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");


const TODOS_KEY = "todos";
let todos = [];


function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo)=> parseInt(li.id) !== todo.id);
    saveTodos();
}
function saveTodos(){
    //save todos in a localStorage, and use stringify to make it into a string.
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

//add li tag inside ul tag
function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    span.classList.add("fadeIn");
    const button = document.createElement("button");
    button.classList.add("list-button");
    button.innerText = "❌";
    button.classList.add("fadeIn");
    button.addEventListener("click", deleteTodo);
    const lineButton = document.createElement("button");
    lineButton.classList.add("list-button-check");
    lineButton.innerText = "✔️";
    lineButton.classList.add("fadeIn");
    lineButton.addEventListener("click", slashText);
    li.appendChild(span);
    li.appendChild(lineButton);
    li.appendChild(button);
    todoList.appendChild(li);
}

function slashText(event){
    const li = event.target.parentElement;
    for(i = 0; i < todos.length; i++){
        if((parseInt(li.id) === todos[i].id) && li.classList.contains("slashText")){
            li.classList.remove("slashText");
        }
        else if(parseInt(li.id) === todos[i].id){
            li.classList.add("slashText");
        }
        
    }
}
function handleTodoSubmit(event){
    event.preventDefault();
    //save the input
    const newTodo = todoInput.value;
    //then, empty the input.
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    todos.push(newTodoObj);
    saveTodos();
    paintTodo(newTodoObj);

}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    //save old todos when refreshed.
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
