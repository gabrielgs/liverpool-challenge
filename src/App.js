import React, { Component } from 'react';
import { Route, Switch, Link }    from 'react-router-dom';
import AdminProducts from './containers/Admin/AdminProducts/AdminProducts'
import AdminCreateProduct from './containers/Admin/AdminCreateProduct/AdminCreateProduct'
import AdminEditProduct from './containers/Admin/AdminEditProduct/AdminEditProduct'
import Store from './containers/Store/Store';

import { GlobalStyle } from './index.styled';
import logo from './logo.svg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Switch>
          <Route path="/admin/productos" component={AdminProducts}/>
          <Route path="/admin/crear-producto" component={AdminCreateProduct}/>
          <Route path="/admin/editar-producto/:productId" component={AdminEditProduct}/>
          <Route path="/" component={Store}/>
        </Switch>
      </div>
    );
  }
}

export default App;
