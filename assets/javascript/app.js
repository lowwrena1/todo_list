//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click', addTodo);

//functions

function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"><i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //check delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-delete"><i>'
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(DeleteButton);

    console.log('test1');
}