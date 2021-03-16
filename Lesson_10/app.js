const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const db = require('./dataBase/MySql').getInstance();

dotenv.config({ path: path.join(process.cwd(), '../.env') });

db.setModels();

const { MONGO_URL, PORT } = require('./config/config');
const apiRouter = require('./router/api.router');

const app = express();

dotenv.config();

_connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouter);

app.listen(PORT, () => {
    console.log(`App listen ${PORT}`);
});

function _connectDB() {
    mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    const { connection } = mongoose;

    connection.on('error', (error) => {
        console.log(error);
    });
}
