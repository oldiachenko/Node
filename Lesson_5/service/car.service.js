const { models: { carModel } } = require('../dataBase');
require('../dataBase/model/User');

module.exports = {
    getCars: (query) => carModel.find(query),

    findCarById: (carId) => carModel.findById(carId),

    createCar: (carObject) => carModel.create(carObject),

    deleteCar: (carId) => carModel.deleteOne(carId)
};
