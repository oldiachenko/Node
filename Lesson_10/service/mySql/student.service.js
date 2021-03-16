const db = require('../../dataBase/MySql').getInstance();

module.exports = {
    findAll: () => {
        const Student = db.getModel('Student');

        return Student.findAll();
    },

    createStudent: (studentObject) => {
        const Student = db.getModel('Student');

        return Student.create(studentObject);
    }
};
