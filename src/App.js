import React, { Component } from 'react';
import { Route, Switch, Link }    from 'react-router-dom';
import AdminProducts        from './containers/Admin/AdminProducts/AdminProducts'
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/admin/productos">Productos</Link>
        <Switch>
          <Route path="/admin/productos" component={AdminProducts}/>
        </Switch>
      </div>
    );
  }
}

export default App;
