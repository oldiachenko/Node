const db = require('../../dataBase/MySql').getInstance();

const { constants } = require('../../constant');

module.exports = {
    findAll: () => {
        const Student = db.getModel(constants.StudentModelName);

        return Student.findAll();
    },

    createStudent: (studentObject) => {
        const Student = db.getModel(constants.StudentModelName);

        return Student.create(studentObject);
    }
};
