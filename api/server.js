import express    from 'express';
import bodyParser from 'body-parser';
import logger     from 'morgan';
import dotenv     from 'dotenv/config';
import mongoose   from 'mongoose';

import productRoutes from './routes/products'

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

app.use('/api/v1/products', productRoutes);

app.listen(port, () => {
  console.log(`Api is running on PORT ${port}.`);
});

export default app;