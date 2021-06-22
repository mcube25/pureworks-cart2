import React, {Component} from "react";
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCartPlus, faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Modal from './components/Modal';

library.add(fab, faCheckSquare, faCoffee, faCartPlus);

class App extends Component {
  render() {
    return (
      //react fragment allows us simulate the html tags
  <React.Fragment>
<Navbar></Navbar>
<Switch>
  <Route exact path="/" component={ProductList}/>
  <Route path="/cart" component={Cart}/>
  <Route path="/details" component={Details}/>
  <Route component={Default}/>
</Switch>
<Modal/>
  </React.Fragment> 
      );
  }
 
}

export default App;
