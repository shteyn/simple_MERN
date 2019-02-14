import config from './config';
import express from 'express';
import apiRouter from './api';
//import fs from 'fs';

const app = express();
const PORT = config.port;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.use(express.static('public'));
app.use('/api', apiRouter);

/*app.get('/about.html', (req, res) => {
  fs.readFile('./about.html', (err, data) => {
    res.send(data.toString());
  });
});*/


app.listen(PORT, () => {
  console.log(`Listen on PORT: ${PORT}`);

});