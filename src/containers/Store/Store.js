import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../../components/Product/ProductList/ProductList';
import axios from 'axios';

import {
  NavWrapper ,
  NavContainer,
  NavLink,
  InputSearch,
  ButtonSearch
} from './Store.styled';

class Store extends Component {
  state = {
    products: [],
    query: ''
  }

  inputChange = event => {
    const { value } = event.target;

    this.setState({
      query: value
    })
  }

  handleSearch = () => {
    let { query } = this.state
    const LIVERPOOL_API = `https://www.liverpool.com.mx/tienda/?s=${query}&d3106047a194921c01969dfdec083925=json`;

    console.log(query, LIVERPOOL_API);
    console.log(`El query ${query}`);

    if (!!query) {
      axios
      .get(LIVERPOOL_API)
      .then(res => {
        const records = res.data.contents[0].mainContent[3].contents[0].records;

        const products = records.map( record => {
          const {
            productId,
            productPrice,
            thumbnailImage,
            productDisplayName,
            ...rest
          } = record;

          return {
            _id: productId[0],
            price: productPrice[0],
            productImage: thumbnailImage[0],
            name: productDisplayName[0]
          }
        });

        this.setState({
          products
        });
      })
      .catch(err => console.log(err.response));
    }
  }

  render() {
    const { products } = this.state
    return (
      <>
        <NavWrapper>
          <NavContainer>
            <InputSearch type="text" placeholder="Buscar" onChange={this.inputChange}/>
            <ButtonSearch onClick={this.handleSearch}>Buscar</ButtonSearch>
          </NavContainer>
          <NavLink as={Link} to="/admin/productos">Administrador</NavLink>
        </NavWrapper>
        <main>
          <ProductList data={products}/>
        </main>
      < />
    );
  }
}

export default Store;
