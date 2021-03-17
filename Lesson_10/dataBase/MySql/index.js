const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

const { constants } = require('../../constant');

module.exports = (() => {
    let instance;

    const initConnection = () => {
        const client = new Sequelize(constants.DataBaseName, constants.UserName, constants.UserPassword, { dialect: 'mysql' });

        const models = {};
        const modelsPath = path.join(process.cwd(), 'dataBase', 'MySql', 'models');

        const getModels = () => {
            fs.readdir(modelsPath, (err, files) => {
                files.forEach((file) => {
                    const [model] = file.split('.');
                    // eslint-disable-next-line import/no-dynamic-require
                    const modelFile = require(path.join(modelsPath, model));

                    models[model] = modelFile(client, DataTypes);
                });
            });
        };

        return {
            setModels: () => getModels(),
            getModel: (modelName) => models[modelName]
        };
    };

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }

            return instance;
        }
    };
})();
