import express from 'express';

const app = express();
const port = 3001;
app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, () => {console.log("The app is running on port 3001");});