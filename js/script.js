const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

// Fungsi Menambah Tugas
todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskInput = document.getElementById('todo-input');
    const dateInput = document.getElementById('date-input');

    // Buat element div tugas
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-item");

    todoDiv.innerHTML = `
        <li class="todo-text"><strong>${taskInput.value}</strong> <br> <small>📅 ${dateInput.value}</small></li>
        <button class="complete-btn" title="Selesai">✅</button>
        <button class="delete-btn" title="Hapus">🗑️</button>
    `;

    todoList.appendChild(todoDiv);
    
    // Kosongkan form setelah isi
    taskInput.value = "";
    dateInput.value = "";
});

// Fungsi Hapus dan Tandai Selesai
todoList.addEventListener('click', function(e) {
    const item = e.target;
    // Hapus
    if (item.classList.contains("delete-btn")) {
        item.parentElement.remove();
    }
    // Centang Selesai
    if (item.classList.contains("complete-btn")) {
        item.parentElement.classList.toggle("completed");
    }
});

// Fungsi Filter (Semua, Selesai, Belum Selesai)
function filterTodo(status) {
    const todos = document.querySelectorAll('.todo-item');
    todos.forEach(function(todo) {
        switch (status) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}