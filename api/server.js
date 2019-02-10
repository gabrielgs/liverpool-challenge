import express    from 'express';
import bodyParser from 'body-parser';
import logger     from 'morgan';
import dotenv     from 'dotenv/config';
import mongoose   from 'mongoose';

import productRoutes from './routes/products'

const app = express();
const port = process.env.PORT;

// Config MongoDB
const dbURI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

mongoose.connect(
  dbURI,
  {useNewUrlParser: true, useCreateIndex: true}
);

//Allow JSON and URL encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// Allow CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if(req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({})
  }
  next();
});

// Routes which should handle requests
app.use('/api/v1/products', productRoutes);

// Handling Errors
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

// Initialize Server
app.listen(port, () => {
  console.log(`Api is running on PORT ${port}.`);
});

export default app;