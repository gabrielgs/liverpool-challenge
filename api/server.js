import express    from 'express';
import bodyParser from 'body-parser';
import logger     from 'morgan';
import dotenv     from 'dotenv/config';
import mongoose   from 'mongoose';

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.json({'tutorial': 'Build Rest API with node'});
});

app.listen(port, () => {
  console.log(`Api is running on PORT ${port}.`);
});

export default app;