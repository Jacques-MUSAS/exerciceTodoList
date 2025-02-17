// LES SELECTEURS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

// LES ECOUTEURS
todoButton.addEventListener('click', addTodo);


// LES FONCTIONS
function addTodo(event){
    event.preventDefault();

     // Créer une div
     const todoDiv = document.createElement('div');
     todoDiv.classList.add('todo-div');

    // Créer un li
    const todoItem = document.createElement('li');
    todoItem.innerText = todoInput.value.trim();
    todoItem.classList.add('todo-item');
    todoDiv.appendChild(todoItem);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(deleteButton);

    

    todoList.appendChild(todoDiv);
    todoInput.value = '';

    deleteButton.addEventListener('click', deleteTodo);

    function deleteTodo(){
        todoDiv.remove();
    }
    
}

