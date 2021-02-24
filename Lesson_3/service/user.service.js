const fs = require('fs');
const path = require('path');
const {promisify} = require('util');

const users = require('../dataBase/usersDB.json');

const pathUsersDB = path.join(__dirname, '../', 'dataBase', 'usersDB.json');
const readFilePromise = promisify(fs.readFile);
const writeFilePromise = promisify(fs.writeFile);

module.exports = {
  findAllUsers: async () => {
    const users = await readFilePromise(pathUsersDB);

    return JSON.parse(users.toString());
  },

  findUserByName: async (name) => {
    const userByName = users.find((users) => users.name.toUpperCase().toLowerCase() === name.toUpperCase().toLowerCase());

    return await userByName;
  },

  createUser: async (userObject) => {
    users.push(userObject);

    return await writeFilePromise(pathUsersDB, JSON.stringify(users));
  },

  deleteUser: async (userId) => {
    users.splice(userId,1);

    return await writeFilePromise(pathUsersDB, JSON.stringify(users));
  }
}
