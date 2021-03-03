const { models } = require('../dataBase');
require('../dataBase/model/User');

module.exports = {
    getCars: async (query) => {
        const cars = await models.carModel.find(query);

        return cars;
    },

    findCarById: async (carId) => {
        const car = await models.carModel.findById(carId);

        return car;
    },

    createCar: async (carObject) => {
        await models.carModel.create(carObject);
    },

    deleteCar: async (carId) => {
        await models.carModel.deleteOne(carId);
    }
};
