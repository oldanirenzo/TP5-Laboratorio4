import React from 'react';
import './assets/css/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import DondeEstamos from './components/DondeEstamos';
import Productos from './components/Productos';
import DetalleProducto from './components/DetalleProducto';
import Form from './components/Form';

function App() {
  return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/dondeEstamos" component={DondeEstamos} />
            <Route exact path="/productos" component={Productos} />
            <Route exact path="/detalleProducto/:id" component={DetalleProducto} />
            <Route exact path="/formulario" component={Form} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
