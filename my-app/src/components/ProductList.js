import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';

export default class ProductList extends Component {
    state={
products: storeProducts
    }

    render() {
        console.log(this.state.products);
        return (
            <React.Fragment>
                <div className="py-5">
                <div className="container">
                    <Title name="our" title="products"/>
                <div className="row">
            
                </div>
                </div>
                </div>
            </React.Fragment>
               // <Product/>
        );
    }
}
//what is a context api 
//it is a single source of truth that can be accessed from anywhere in our app
//similar to redux
