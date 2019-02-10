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

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(port, () => {
  console.log(`Api is running on PORT ${port}.`);
});

export default app;