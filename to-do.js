const todoInput= document.querySelector('.todo-input');
const addTodoItem= document.querySelector('.todo-button');
const todoList= document.querySelector('.todo-list');

addTodoItem.addEventListener("click",addTodo);


function addTodo(event){
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");


    const newTodo = document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    todoInput.value="";

    const completedButton = document.createElement('button');
    completedButton.innerHTML='Completed';
    completedButton.classList.add('complete-btn');
    completedButton.onclick = check
    todoDiv.appendChild(completedButton);


    const trash = document.createElement('button');
    trash.innerHTML='Delete';
    trash.classList.add('trash-btn');
    todoDiv.appendChild(trash);
    trash.onclick= deleteItem;
    
    todoList.appendChild(todoDiv);
    
}

function check(e){
    e.target.parentElement.firstChild.classList.toggle("completed");
}

function deleteItem(e){
    e.target.parentElement.remove()    
}