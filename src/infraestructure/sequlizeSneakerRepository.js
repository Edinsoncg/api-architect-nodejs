const SneakerRepository = require('../../domain/repositories/sneakerRepository');
const SneakerModel = require('./models/sneakerModel');

class SequelizeSneakerRepository extends SneakerRepository {
    async getAll() {
        return await SneakerModel.findAll();
    }

    async getById(id) {
        return await SneakerModel.findByPk(id);
    }

    async create(sneaker) {
        return await SneakerModel.create(sneaker);
    }

    async update(id, sneaker) {
        const sneakerToUpdate = await SneakerModel.findByPk(id);
        if (sneakerToUpdate) {
            return await sneakerToUpdate.update(sneaker);
        }
    }

    async delete(id) {
        const sneakerToDelete = await SneakerModel.findByPk(id);
        if (sneakerToDelete) {
            return await sneakerToDelete.destroy();
        }
    }
}

module.exports = SequelizeSneakerRepository;
