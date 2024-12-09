module.exports = async (id, sneakerRepository) => {
    return await sneakerRepository.delete(id);
};