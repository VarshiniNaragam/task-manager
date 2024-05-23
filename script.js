document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
      addTodoItem(todoText);
      todoInput.value = '';
      todoInput.focus();
    }
  });

  function addTodoItem(text) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', toggleTodoItem);
    const span = document.createElement('span');
    span.textContent = text;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteTodoItem);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  }

  function toggleTodoItem(e) {
    const listItem = e.target.parentElement;
    listItem.classList.toggle('completed');
  }

  function deleteTodoItem(e) {
    const listItem = e.target.parentElement;
    todoList.removeChild(listItem);
  }
});
