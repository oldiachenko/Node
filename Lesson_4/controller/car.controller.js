const carService = require('../service/car.service');
const errorCodes = require('../constant/errorCodes.enum');
const responseCodes = require('../constant/responseCodes.enum');
const responseMessages = require('../message/response.messages');

module.exports = {
    getCars: async (req, res) => {
        try {
            const cars = await carService.getCars(req.query);

            res.json(cars);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    findCarById: async (req, res) => {
        try {
            const { _id } = req.params;

            const car = await carService.findCarById(_id);

            res.json(car);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    createCar: async (req, res) => {
        try {
            const { preferLang = 'en' } = req.body;

            await carService.createCar(req.body);

            res.status(responseCodes.CREATED).json(responseMessages.CAR_CREATED[preferLang]);
        } catch (e) {
            res.json(e.message);
        }
    },

    deleteCar: async (req, res) => {
        try {
            const { preferLang = 'en' } = req.body;

            await carService.deleteCar(req.params);

            res.status(responseCodes.DELETED).json(responseMessages.CAR_DELETED[preferLang]);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
