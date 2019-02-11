import express            from 'express';
import multer             from 'multer';
import ProductsController from '../controllers/products';

const router = express.Router();

// Config multer to upload images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// Filter files to control which files should be uploaded
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    // Accept file
    cb(null, true);
  } else {
    // Reject File
    cb(null, false);
  }
};

const upload = multer({
  storage,
  fileFilter
});

// Routes which handle requests
router.get('/', ProductsController.products_get_all);

router.post('/', upload.single('productImage'), ProductsController.products_create_product);

router.get('/:productId', ProductsController.products_get_product);

router.patch('/:productId', ProductsController.products_update_product);

router.delete('/:productId', ProductsController.products_delete_product);

export default router;