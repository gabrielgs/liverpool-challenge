import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../../components/Product/ProductList/ProductList';
import axios from 'axios';

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
    const { query } = this.state
    const LIVERPOOL_API = `https://www.liverpool.com.mx/tienda/?s=${query}&d3106047a194921c01969dfdec083925=json`;

    console.log(query, LIVERPOOL_API);

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

        console.log(products);
      })
      .catch(err => console.log(err.response));
  }

  render() {
    const { products } = this.state
    return (
      <>
        <nav>
          <div>
            <input type="text" placeholder="Buscar" onChange={this.inputChange}/>
            <button onClick={this.handleSearch}>Buscar</button>
          </div>
          <Link to="/admin/productos">Administrador</Link>
        </nav>
        <main>
          <section>
            <ProductList data={products}/>
          </section>
        </main>
      < />
    );
  }
}

export default Store;
