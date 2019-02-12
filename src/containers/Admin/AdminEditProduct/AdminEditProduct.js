import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'http://localhost:8020/api/v1';

class AdminEditProduct extends Component {

  state = {
    product: [],
    name: '',
    price: '',
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct() {
    const { productId } = this.props.match.params;
    const url = `${BASE_URL}/products/${productId}`;
    axios.get(url)
      .then(res => {
        const { product } = res.data;
        this.setState({
          product,
          name: product.name,
          price: product.price
        })
      })
      .catch(err => console.log(err.response));
  }

  updateProduct() {
    const { productId } = this.props.match.params;
    const { name, price } = this.state
    const url = `${BASE_URL}/products/${productId}`;

    axios.patch(url, {name, price})
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err.response));
  }

  handlerInputChange = event => {
    let {name, value} = event.target;

    this.setState({
      [name]: value,
    });
  }

  handlerSubmit = event => {
    event.preventDefault();

    this.updateProduct();

  }

  render() {
    const { product } = this.state;
    return (
      <main>
        <header>
          <h1>Editar Producto</h1>
        </header>
        <section>
          <div>
            <form onSubmit={this.handlerSubmit}>
              <div>
                <label htmlFor="">Nombre</label>
                <input
                  defaultValue={product.name}
                  name="name"
                  type="text"
                  placeholder="Xbox One"
                  onChange={this.handlerInputChange}/>
              </div>
              <div>
                <label htmlFor="">Precio</label>
                <input
                  defaultValue={product.price}
                  name="price"
                  type="text"
                  placeholder="1200.99"
                  onChange={this.handlerInputChange}/>
              </div>
              <div>
                <Link to="/admin/productos">Cancelar</Link>
                <input type="submit" value="Guardar"/>
              </div>
            </form>
          </div>
        </section>
      </main>
    );
  }
}

export default AdminEditProduct;