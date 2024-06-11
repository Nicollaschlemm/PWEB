document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("taskForm");
    const tasksDiv = document.getElementById("tasks");

    let tasks = [];
    let currentEditTaskIndex = null;

    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const newTask = {
            title: document.getElementById("title").value,
            description: document.getElementById("description").value,
            dueDate: document.getElementById("dueDate").value,
            priority: document.getElementById("priority").value,
            status: document.getElementById("status").value,
            category: document.getElementById("category").value,
            color: document.getElementById("color").value,
        };
        tasks.push(newTask);
        displayTasks();
        taskForm.reset();
    });

    function displayTasks() {
        tasksDiv.innerHTML = "";
        tasks.forEach((task, index) => {
            const taskDiv = document.createElement("div");
            taskDiv.className = "task";
            taskDiv.style.backgroundColor = task.color;  // Aplica a cor de fundo escolhida
            taskDiv.innerHTML = `
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p>Data de Vencimento: ${task.dueDate}</p>
                <p>Prioridade: ${task.priority}</p>
                <p>Status: ${task.status}</p>
                <p>Categoria: ${task.category}</p>
                <button onclick="editTask(${index})">Editar</button>
                <button onclick="confirmDeleteTask(${index})">Excluir</button>
            `;
            tasksDiv.appendChild(taskDiv);
        });
    }

    window.editTask = function(index) {
        currentEditTaskIndex = index;
        const task = tasks[index];

        document.getElementById("editTitle").value = task.title;
        document.getElementById("editDescription").value = task.description;
        document.getElementById("editDueDate").value = task.dueDate;
        document.getElementById("editPriority").value = task.priority;
        document.getElementById("editStatus").value = task.status;
        document.getElementById("editCategory").value = task.category;
        document.getElementById("editColor").value = task.color;

        document.getElementById("editModal").style.display = "block";
    };

    document.getElementById("editTaskForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const editedTask = {
            title: document.getElementById("editTitle").value,
            description: document.getElementById("editDescription").value,
            dueDate: document.getElementById("editDueDate").value,
            priority: document.getElementById("editPriority").value,
            status: document.getElementById("editStatus").value,
            category: document.getElementById("editCategory").value,
            color: document.getElementById("editColor").value,
        };
        tasks[currentEditTaskIndex] = editedTask;
        displayTasks();
        document.getElementById("editModal").style.display = "none";
    });

    document.getElementById("closeEditModal").onclick = function() {
        document.getElementById("editModal").style.display = "none";
    };

    window.confirmDeleteTask = function(index) {
        currentEditTaskIndex = index;
        document.getElementById("deleteModal").style.display = "block";
    };

    document.getElementById("confirmDelete").onclick = function() {
        tasks.splice(currentEditTaskIndex, 1);
        displayTasks();
        document.getElementById("deleteModal").style.display = "none";
    };

    document.getElementById("closeDeleteModal").onclick = function() {
        document.getElementById("deleteModal").style.display = "none";
    };

    document.getElementById("cancelDelete").onclick = function() {
        document.getElementById("deleteModal").style.display = "none";
    };
});
