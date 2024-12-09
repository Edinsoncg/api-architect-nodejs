module.exports = async (sneakerData, sneakerRepository) => {
    return await sneakerRepository.create(sneakerData);
};
