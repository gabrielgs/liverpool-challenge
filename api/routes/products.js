import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET REQUEST TO /products'
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Handling POST REQUEST TO /products'
  });
});

router.get('/:productId', (req, res, next) => {
  const { productId } = req.params;

  if (productId === 'special') {
    res.status(200).json({
      message: 'You discovered the special ID',
      id: productId
    });
  } else {
    res.status(200).json({
      message: 'You passed in ID'
    });
  }
});

router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Updated product!'
  });
});

router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted product!'
  });
});

export default router;