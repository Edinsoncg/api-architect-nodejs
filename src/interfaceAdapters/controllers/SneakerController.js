const getAllSneakers = require('../../application/useCases/getAllSneaker');
const getSneakerById = require('../../application/useCases/getSneakerById');
const createSneaker = require('../../application/useCases/createSneaker');
const updateSneaker = require('../../application/useCases/updateSneaker');
const deleteSneaker = require('../../application/useCases/deleteSneaker');

module.exports = (sneakerRepository) => ({
    async getAll(request, response) {
        try {
            const sneakers = await getAllSneakers(sneakerRepository);
            response.json(sneakers);
        } catch (error) {
            response.status(500).json({ message: 'Error al obtener las zapatillas' });
        }
    },

    async getById(request, response) {
        try {
            const { id } = request.params;
            const sneaker = await getSneakerById(id, sneakerRepository);
            if (sneaker) {
                response.json(sneaker);
            } else {
                response.status(404).json({ message: 'Zapatilla no encontrada' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error al obtener la zapatilla' });
        }
    },

    async create(request, response) {
        try {
            const sneaker = await createSneaker(request.body, sneakerRepository);
            response.status(201).json(sneaker);
        } catch (error) {
            response.status(500).json({ message: 'Error al crear la zapatilla' });
        }
    },

    async update(request, response) {
        try {
            const { id } = request.params;
            const updatedSneaker = await updateSneaker(id, request.body, sneakerRepository);
            if (updatedSneaker) {
                response.json(updatedSneaker);
            } else {
                response.status(404).json({ message: 'Zapatilla no encontrada' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error al actualizar la zapatilla' });
        }
    },

    async delete(request, response) {
        try {
            const { id } = request.params;
            const responseult = await deleteSneaker(id, sneakerRepository);
            if (responseult) {
                response.json({ message: 'Zapatilla eliminada' });
            } else {
                response.status(404).json({ message: 'Zapatilla no encontrada' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error al eliminar la zapatilla' });
        }
    },
});
