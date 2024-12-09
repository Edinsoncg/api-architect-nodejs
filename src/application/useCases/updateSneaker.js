module.exports = async (id, sneakerData, sneakerRepository) => {
    return await sneakerRepository.update(id, sneakerData);
};