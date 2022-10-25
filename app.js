// Define UI vars 
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load All Event Listnrs

loadEventListeners();

// Load All Event Listeners

function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
}

// Add Task

function addTask(e) {
    if (taskInput.value === '') {
        alert('add a task');
    }

    // create li element
    const li = document.createElement('li');
    // Add Class
    li.className = ('collection-item');
    // create text node and append to the li
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element 

    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append link to li 
    li.appendChild(link);
    // append li to the ul
    taskList.appendChild(li);

    // clear input

    taskList.value = '';




    e.preventDefault();

}