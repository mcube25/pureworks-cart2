import React, {Component} from "react";
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
  </React.Fragment> 
      );
  }
 
}

export default App;
