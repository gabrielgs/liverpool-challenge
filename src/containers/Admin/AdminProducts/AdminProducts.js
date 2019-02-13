import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductList from '../../../components/Product/ProductList/ProductList'

import {
  AdminProductsNav,
  AdminProductsNavContainer,
  AdminProductsLink,
  AdminProductsHeader,
  AdminProductsHeaderContainer,
  AdminProductsButton
} from './AdminProducts.styled';

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
      <>
        <AdminProductsNav>
          <AdminProductsNavContainer>
            <AdminProductsLink as={Link} to="/">Buscar Productos</AdminProductsLink>
          </AdminProductsNavContainer>
        </AdminProductsNav>
        <AdminProductsHeader>
          <AdminProductsHeaderContainer>
            <h1>Productos</h1>
            <AdminProductsButton as={Link} to="/admin/crear-producto">Nuevo Producto</AdminProductsButton>
          </AdminProductsHeaderContainer>
        </AdminProductsHeader>
        <main>
          <ProductList
            data={products}
            handlerClickEdit={this.handlerClickEdit}
            handlerDeleteProduct={this.handlerDeleteProduct}
            actions={true}/>
        </main>
      </>
    );
  }
}

export default AdminProducts;