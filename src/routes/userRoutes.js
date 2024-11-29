const express = require('express');
const User = require('../models/user');
const router = express.Router();

function validarDatosUsuarios(request, response, next){
    const {name,last_name, email, age} = request.body; 
    if (!name) {
        return response.status(422).json({"message": "name es obligatorio"});
    } else if (typeof name !== 'string') {
        return response.status(422).json({"message": "name debe estar en texto"});
    }
    
    if (!last_name) {
        return response.status(422).json({"message": "last_name es obligatorio"});
    } else if (typeof last_name !== 'string') {
        return response.status(422).json({"message": "last_name debe estar en texto"});
    }
    
    if (!email) {
        return response.status(422).json({"message": "email es obligatorio"});
    } else if (typeof email !== 'string') {
        return response.status(422).json({"message": "email debe estar en texto"});
    }

    if (!age) {
        return response.status(422).json({"message": "age es obligatorio"});
    } else if (typeof age !== 'number'){
        return response.status(422).json({"message": "age debe estar en numero"});
    }

    next();
}

router.get('/users', async (request, response) => {
    try {
        const users = await User.findAll();
        response.json(users);
    } catch (error) {
        console.error(error);
        response.status(500).json({
            "message": "Error al obtener la informacion de los usuarios"
        });
    }
})

router.get('/user/:id', async (request, response) => {
    try {
        const {id} = request.params;
        const user = await User.findByPk(id);
        if (user) {
            response.json(user);
        } else {
            response.status(404).json({
                "message": "Usuario no encontrado"
            })
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({
            "message": "Error al obtener el usuario"
        });
    }
})

router.post('/users', validarDatosUsuarios, async (request, response) => {
    try {
        const {name, last_name, age, email} = request.body;
        const newUser = await User.create({name, last_name, age, email});
        response.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        response.status(500).json({ 
            "message": "Error al crear el usuario"    
        });
    }
})

router.put('/user/:id', validarDatosUsuarios, async (request, response) => {
    try {
        const {id} = request.params;
        const {name, last_name, age, email} = request.body;

        const user = await User.findByPk(id);
        if (user) {
            await user.update({name, last_name, age, email});
            response.json(user);
        } else {
            response.status(404).json({
                "message": "Usuario no encontrado"
            })
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({
            "message": "Error al actualizar el usuario"
        });
    }
})

router.delete('/user/:id', async (request, response) => {
    try {
        const {id} = request.params;
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            response.json({
                "message": "Usuario eliminado"
            });
        } else {
            response.status(404).json({
                "message": "Usuario no encontrado"
            })
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({
            "message": "Error al eliminar el usuario"
        });
    }
})

module.exports = router;