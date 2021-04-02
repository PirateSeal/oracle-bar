import express from 'express';


import { Sequelize } from 'sequelize-typescript'

const sequelize = new Sequelize({
  database: 'ORACLE_DB',
  dialect: 'postgres',
  username: 'DB_USER',
  password: 'azertyuiop',
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
app.listen(port, () => {console.log("The app is running on port 3001");});