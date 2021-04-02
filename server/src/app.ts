import express from 'express';


import { Sequelize } from 'sequelize-typescript'
import { People } from './models/people';
import { TableRef } from './models/table';

const sequelize = new Sequelize({
  database: 'some_db',
  dialect: 'sqlite',
  username: 'root',
  password: '',
  storage: ':memory:',
  models: [__dirname + '/models'] // or [Player, Team],
})

sequelize.addModels([People, TableRef])


const app = express();
const port = 3001;
app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, () => {console.log("The app is running on port 3001");});