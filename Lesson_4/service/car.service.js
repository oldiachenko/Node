const Car = require('../dataBase/model/Car');
require('../dataBase/model/User');

module.exports = {
    getCars: async (query) => {
        const cars = await Car.find(query);

        return cars;
    },

    findCarById: async (carId) => {
        const car = await Car.findById(carId);

        return car;
    },

    createCar: async (carObject) => {
        await Car.create(carObject);
    },

    deleteCar: async (carId) => {
        await Car.deleteOne(carId);
    }
};
