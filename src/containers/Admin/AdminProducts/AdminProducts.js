import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductList from '../../../components/Product/ProductList/ProductList'

const BASE_URL = 'http://localhost:8020/api/v1';

class AdminProducts extends Component {

  state = {
    products: []
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    const url = `${BASE_URL}/products`
    axios.get(url)
      .then( res => {
        const { products } = res.data;
        this.setState({
          products
        })
      })
      .catch( err => console.log(err.response) );
  }

  handlerClickEdit = productId => {
    const { history } = this.props

    history.push(`/admin/editar-producto/${productId}`);

    console.log(productId);
  }

  handlerDeleteProduct = productId => {
    const url = `${BASE_URL}/products/${productId}`
    axios.delete(url)
      .then(res => {
        console.log(res.data);
        this.fetchProducts();
      })
      .catch(err => console.log(err.response));
  }

  render () {
    const { products } = this.state
    return (
      <section>
        <header>
          <h1>Productos</h1>
          <Link to="/admin/crear-producto">Nuevo Producto</Link>
        </header>
        <ProductList
          data={products}
          handlerClickEdit={this.handlerClickEdit}
          handlerDeleteProduct={this.handlerDeleteProduct}/>
      </section>
    );
  }
}

export default AdminProducts;