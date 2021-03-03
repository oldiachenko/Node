const { errorCodesEnum, responseCodesEnum } = require('../constant');
const { responseMessages } = require('../message');
const { carService } = require('../service');

module.exports = {
    getCars: async (req, res) => {
        try {
            const cars = await carService.getCars(req.query);

            res.json(cars);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    findCarById: async (req, res) => {
        try {
            const { _id } = req.params;

            const car = await carService.findCarById(_id);

            res.json(car);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    createCar: async (req, res) => {
        try {
            const { preferLang = 'en' } = req.body;

            await carService.createCar(req.body);

            res.status(responseCodesEnum.CREATED).json(responseMessages.CAR_CREATED[preferLang]);
        } catch (e) {
            res.json(e.message);
        }
    },

    deleteCar: async (req, res) => {
        try {
            const { preferLang = 'en' } = req.body;

            await carService.deleteCar(req.params);

            res.status(responseCodesEnum.DELETED).json(responseMessages.CAR_DELETED[preferLang]);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    }
};
