import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {
  Main,
  Header,
  HeaderTitle,
  Section,
  FormWrapper,
  FormGroup,
  Input,
  InputFile,
  Label,
  ButtonGroup,
  ButtonCancel,
  ButtonSubmit
} from '../Shared.styled';

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
    const formData = new FormData();

    event.preventDefault();

    formData.append('name', name);
    formData.append('price', price);
    formData.append('productImage', productImage, productImage.name);

    axios.post(url, formData)
      .then( res => {
        console.log(res.data)
        const { history } = this.props

        history.push(`/admin/productos`);

      })
      .catch( err => console.log(err.response));
  }

  render () {
    return (
      <Main>
        <Header>
          <HeaderTitle>Crear Producto</HeaderTitle>
        </Header>
        <Section>
          <FormWrapper>
            <form onSubmit={this.handlerSubmit}>
              <FormGroup>
                <Label htmlFor="">Nombre</Label>
                <Input
                  name="name"
                  type="text"
                  placeholder="Xbox One"
                  onChange={this.handlerInputChange}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="">Precio</Label>
                <Input
                  name="price"
                  type="text"
                  placeholder="1200.99"
                  onChange={this.handlerInputChange}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="">Imagen</Label>
                <InputFile
                  name="productImage"
                  type="file"
                  onChange={this.handlerInputChange}/>
              </FormGroup>
              <ButtonGroup>
                <ButtonSubmit type="submit" value="Crear Producto"/>
                <ButtonCancel as={Link} to="/admin/productos">Cancelar</ButtonCancel>
              </ButtonGroup>
            </form>
          </FormWrapper>
        </Section>
      </Main>
    );
  }
};

export default AdminCreateProduct;