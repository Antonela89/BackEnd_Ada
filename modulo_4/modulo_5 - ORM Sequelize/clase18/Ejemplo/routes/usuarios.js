const express = require("express");
const Usuario = require('../models/Usuario');
const Router  = require('express')

const router = express.Router();

// POST - Crear usuario
router.post("/", async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// GET - Obtener todos los usuarios
router.get("/", async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
});

// GET - Obtener usuario por ID
router.get("/:id", async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) res.json(usuario);
    else res.status(404).json({ error: "Usuario no encontrado" });
});

// PUT - Actualizar un usario por ID
router.put("/:id", async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
        await usuario.update(req.body);
        res.json(usuario)
    } else {
        res.status(404).json({ error: "Usuario no encontrado." });
    }
});

// DELETE - Eliminar usuario por su ID
router.delete("/:id", async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
        await usuario.destroy();
        res.json({ mensaje: "Usuario eliminado." });
    } else {
        res.status(404).json({ error: "Usuario no encontrado" });
    }
});

module.exports = router;