// References to elements
const addButton = document.getElementById('add-button');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add new to-do item
addButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if (taskText) {
        addTodoItem(taskText);
        todoInput.value = ''; // Clear input field
    }
});

// Function to create and append a to-do item
function addTodoItem(taskText) {
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        listItem.classList.toggle('completed');
        moveCompletedToBottom();
    });

    // Task text
    const task = document.createElement('span');
    task.textContent = taskText;

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', () => {
        listItem.style.backgroundColor = 'red';
        setTimeout(() => listItem.remove(), 300);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(task);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
}

// Move completed tasks to the bottom
function moveCompletedToBottom() {
    const items = Array.from(todoList.children);
    items.sort((a, b) => {
        return a.classList.contains('completed') - b.classList.contains('completed');
    });
    items.forEach(item => todoList.appendChild(item));
}
