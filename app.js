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

    e.preventDefault();

}