const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/tasks.json');

// Función auxiliar para leer tareas
const readTasks = () => {
    const data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
};

// Función auxiliar para escribir tareas
const writeTasks = (tasks) => {
    fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
};

// GET /tasks - Listar todas
router.get('/', (req, res) => {
    const tasks = readTasks();
    res.json(tasks);
});

// POST /tasks - Agregar nueva
router.post('/', (req, res) => {
    const tasks = readTasks();
    const { title, description } = req.body;

     // Validación de campos vacíos
    if (!title || title.trim() === "") {
        return res.status(400).json({ error: "El título es obligatorio." });
    }

    const newTask = {
        id: Date.now(), // ID simple basado en tiempo
        title,
        description: description || "",
        completed: false
    };

    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
});

// PUT /tasks/:id - Editar
router.put('/:id', (req, res) => {
    const tasks = readTasks();
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) return res.status(404).json({ error: "No se encontró la tarea." });

    const { title, description, completed } = req.body;
    
    tasks[index] = {
        ...tasks[index],
        title: title !== undefined ? title : tasks[index].title,
        description: description !== undefined ? description : tasks[index].description,
        completed: completed !== undefined ? completed : tasks[index].completed
    };

    writeTasks(tasks);
    res.json(tasks[index]);
});

// DELETE /tasks/:id - Eliminar
router.delete('/:id', (req, res) => {
    let tasks = readTasks();
    const id = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== id);
    writeTasks(tasks);
    res.json({ message: "Tarea eliminada" });
});

module.exports = router;