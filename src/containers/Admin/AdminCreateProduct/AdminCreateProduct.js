import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BASE_URL = 'http://localhost:8020/api/v1';

class AdminCreateProduct extends Component {
  state = {
    name: '',
    price: '',
    productImage: ''
  }

  handlerInputChange = event => {
    let {name, value} = event.target;

    if (name === 'productImage')
      value = event.target.files[0];

    this.setState({
      [name]: value
    });
  }

  handlerSubmit = event => {
    const url = `${BASE_URL}/products`;
    const { name, price, productImage } = this.state;
    const formData = new FormData()

    event.preventDefault();

    formData.append('name', name);
    formData.append('price', price);
    formData.append('productImage', productImage, productImage.name);

    axios.post(url, formData)
      .then( res => console.log(res.data))
      .catch( err => console.log(err.response));
  }

  render () {
    return (
      <main>
        <header>
          <h1>Crear Producto</h1>
        </header>
        <section>
          <div>
            <form onSubmit={this.handlerSubmit}>
              <div>
                <label htmlFor="">Nombre</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Xbox One"
                  onChange={this.handlerInputChange}/>
              </div>
              <div>
                <label htmlFor="">Precio</label>
                <input
                  name="price"
                  type="text"
                  placeholder="1200.99"
                  onChange={this.handlerInputChange}/>
              </div>
              <div>
                <label htmlFor="">Imagen</label>
                <input
                  name="productImage"
                  type="file"
                  onChange={this.handlerInputChange}/>
              </div>
              <div>
                <Link to="/admin/productos">Cancelar</Link>
                <input type="submit" value="Crear Token"/>
              </div>
            </form>
          </div>
        </section>
      </main>
    );
  }
};

export default AdminCreateProduct;