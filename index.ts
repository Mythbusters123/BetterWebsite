import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('This site is in progress');
});

app.listen(3001, () => {
  console.log(`App listening on Port 3001`);
});
