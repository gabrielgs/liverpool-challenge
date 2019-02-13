import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
  Main,
  Header,
  HeaderTitle,
  Section,
  FormWrapper,
  FormGroup,
  Input,
  Label,
  ButtonGroup,
  ButtonSubmit,
  ButtonCancel
} from '../Shared.styled';
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
        const { history } = this.props

        history.push(`/admin/productos`);
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
      <Main>
        <Header>
          <HeaderTitle>Editar Producto</HeaderTitle>
        </Header>
        <Section>
          <FormWrapper>
            <form onSubmit={this.handlerSubmit}>
              <FormGroup>
                <Label htmlFor="">Nombre</Label>
                <Input
                  defaultValue={product.name}
                  name="name"
                  type="text"
                  placeholder="Xbox One"
                  onChange={this.handlerInputChange}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="">Precio</Label>
                <Input
                  defaultValue={product.price}
                  name="price"
                  type="text"
                  placeholder="1200.99"
                  onChange={this.handlerInputChange}/>
              </FormGroup>
              <ButtonGroup>
                <ButtonSubmit type="submit" value="Guardar"/>
                <ButtonCancel as={Link} to="/admin/productos">Cancelar</ButtonCancel>
              </ButtonGroup>
            </form>
          </FormWrapper>
        </Section>
      </Main>
    );
  }
}

export default AdminEditProduct;