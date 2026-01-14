const API_URL = '/tasks';

//Obtener y Listar
async function fetchTasks() {
	try {
		const response = await fetch(API_URL);
		const tasks = await response.json();
		const listElement = document.getElementById('taskList');
		listElement.innerHTML = '';

		tasks.forEach((task) => {
			const item = document.createElement('div');
			item.className = 'task-item';
			item.innerHTML = `
                    <div class="check-btn ${
						task.completed ? 'done' : ''
					}" onclick="toggleTask(${task.id}, ${task.completed})">
                        ${task.completed ? '✓' : ''}
                    </div>
                    <div class="task-info ${task.completed ? 'completed' : ''}">
                        <span class="task-title">${task.title}</span>
                        <span class="task-desc">${task.description}</span>
                    </div>
                    <button class="btn-delete" onclick="deleteTask(${
						task.id
					})">🗑️</button>
                `;
			listElement.appendChild(item);
		});
	} catch (error) {
		console.error('Error al cargar tareas:', error);
	}
}

// Agregar Tarea
async function addTask() {
	const title = document.getElementById('taskTitle').value;
	const description = document.getElementById('taskDesc').value;

	if (!title.trim()) {
		alert('¡El título es necesario!');
		return;
	}

	await fetch(API_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ title, description }),
	});

	document.getElementById('taskTitle').value = '';
	document.getElementById('taskDesc').value = '';
	fetchTasks();
}

// Marcar como Completado/Pendiente 
async function toggleTask(id, currentStatus) {
	await fetch(`${API_URL}/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ completed: !currentStatus }),
	});
	fetchTasks();
}

// Eliminar
async function deleteTask(id) {
	if (confirm('¿Seguro que quieres eliminar esta tarea?')) {
		await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
		fetchTasks();
	}
}

// Inicializar
fetchTasks();
