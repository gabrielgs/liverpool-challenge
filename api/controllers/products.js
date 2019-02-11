import Product from '../db/models/product'

exports.products_get_all = async (req, res, next) => {
  try {
    const getAllProducts = await Product.find();

    if (getAllProducts.length === 0)
      return res.status(400).json({ message: 'No hay productos registrados' });

    res.status(200).json({ products: getAllProducts });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

exports.products_create_product = async (req, res, next) => {
  try {
    console.log(req.file);
    const newProduct = {
      name: req.body.name,
      price: req.body.price,
      productImage: req.file.path
    }

    const isProductExist = await Product.findOne(newProduct);

    if (isProductExist)
      return res.status(400).json({ message: 'El producto ya esta registrado' });

    const product = await Product.create(newProduct);

    res.status(201).json({
      message: 'Producto creado satisfactoriamente',
      createdProduc: product
    });

  } catch (err) {
    res.status(500).json({ error: err })
  }
}

exports.products_get_product = async (req, res, next) => {
  try {
    const { productId } = req.params;

    const getProduct = await Product.findById({ _id: productId });

    if (!getProduct)
      return res.status(400).json({ message: "Producto no encontrado" });

    res.status(200).json({ product: getProduct });
  } catch (err) {
    res.status(500).json({ error: err });
  }

}

exports.products_update_product = async (req, res, next) => {
  try {
    const { productId } = req.params;
    let updateFields = {};

    for (const field of req.body) {
      updateFields[field.propName] = field.value;
    }

    const updateProduct = await Product.findOneAndUpdate(
      { _id: productId },
      { $set: updateFields },
      { new: true }
    );

    if (!updateProduct)
      return res.status(400).json({ message: 'Producto no encontrado' });

    res.status(200).json({
      message: 'Updated product!',
      product: updateProduct
    });
  } catch (err) {
    res.status(500).json({ error: 'Something Wrong happened' });
  }
}

exports.products_delete_product = async (req, res, next) => {
  try {
    const { productId } = req.params

    const productDeleted = await Product.findByIdAndRemove({ _id: productId });

    if (!productDeleted)
      return res.status(400).json({ message: 'Producto no encontrado' });

    res.status(200).json({
      message: 'Deleted product!',
      product: productDeleted
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}