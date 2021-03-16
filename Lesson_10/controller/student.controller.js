const { studentService } = require('../service');

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const students = await studentService.findAll();

            res.json(students);
        } catch (e) {
            next(e);
        }
    },

    createStudent: async (req, res, next) => {
        try {
            await studentService.createStudent(req.body);

            res.json('Student was created');
        } catch (e) {
            next(e);
        }
    }
};
