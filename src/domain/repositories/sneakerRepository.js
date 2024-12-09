class SneakerRepository {
    async getAll() {
        throw new Error('El método getAll no está implementado en SneakerRepository');
    }

    async getById(id) {
        if (!id) {
            throw new Error('El parámetro id es obligatorio para getById');
        }
        throw new Error('El método getById no está implementado en SneakerRepository');
    }

    async create(sneaker) {
        if (!sneaker || typeof sneaker !== 'object') {
            throw new Error('Se requiere un objeto sneaker válido para create');
        }
        throw new Error('El método create no está implementado en SneakerRepository');
    }

    async update(id, sneaker) {
        if (!id || !sneaker || typeof sneaker !== 'object') {
            throw new Error('Se requieren id y un objeto sneaker válido para update');
        }
        throw new Error('El método update no está implementado en SneakerRepository');
    }

    async delete(id) {
        if (!id) {
            throw new Error('El parámetro id es obligatorio para delete');
        }
        throw new Error('El método delete no está implementado en SneakerRepository');
    }
}

module.exports = SneakerRepository;