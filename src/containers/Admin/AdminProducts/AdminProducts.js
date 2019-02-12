import React, { Component } from 'react';
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

  render () {
    const { products } = this.state
    return (
      <section>
        <header>
          <h1>Productos</h1>
          <a href="#Nuevo Producto">Nuevo Producto</a>
        </header>
        <ProductList data={products}/>
      </section>
    );
  }
}

export default AdminProducts;