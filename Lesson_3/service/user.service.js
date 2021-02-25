const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const users = require('../dataBase/usersDB.json');

const pathUsersDB = path.join(__dirname, '../', 'dataBase', 'usersDB.json');
const readFilePromise = promisify(fs.readFile);
const writeFilePromise = promisify(fs.writeFile);

module.exports = {
    findAllUsers: async () => {
        const usersFound = await readFilePromise(pathUsersDB);

        return JSON.parse(usersFound.toString());
    },

    findUserByName: (name) => {
        const userByName = users.find((value) => value.name.toUpperCase().toLowerCase() === name.toUpperCase().toLowerCase());

        return userByName;
    },

    createUser: (userObject) => {
        users.push(userObject);

        return writeFilePromise(pathUsersDB, JSON.stringify(users));
    },

    deleteUser: (userId) => {
        users.splice(userId, 1);

        return writeFilePromise(pathUsersDB, JSON.stringify(users));
    }
};
