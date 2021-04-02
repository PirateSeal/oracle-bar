import express from 'express';
import {Sequelize} from 'sequelize-typescript'

require('dotenv')

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    dialect: 'postgres',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    port: 5432,
    models: [__dirname + '/models'] // or [Player, Team],
})

sequelize.addModels(['./models/*.ts'])


const app = express();
const port = 3001;
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, () => {
    console.log("The app is running on port 3001");
});
