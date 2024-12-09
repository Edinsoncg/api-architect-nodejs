class SneakerRepository {
    async getAll() {
        throw new Error('El método getAll no está implementado en SneakerRepository');
    } 

    async getById(id) {
        throw new Error('El método getById no está implementado en SneakerRepository');
    }

    async create(sneaker) {
        throw new Error('El método create no está implementado en SneakerRepository');
    }

    async update(id, sneaker) {
        throw new Error('El método update no está implementado en SneakerRepository');
    }

    async delete(id) {
        throw new Error('El método delete no está implementado en SneakerRepository');
    }
}

module.exports = SneakerRepository;