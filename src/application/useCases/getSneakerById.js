module.exports = async (id, sneakerRepository) => {
    return await sneakerRepository.getById(id);
};