import express from 'express';
import {Sequelize} from 'sequelize-typescript'

(async() => {    
const sequelize = new Sequelize({
    database: 'postgres',
    dialect: 'postgres',
    username: 'DB_USER',
    password: 'azertyuiop',
    host: 'localhost',
    port: 5432,
    models: [__dirname + "/models"] // or [Player, Team],
})

await sequelize.sync({force: true})


const app = express();
const port = 3001;
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, () => {
    console.log("The app is running on port 3001");
});

})()