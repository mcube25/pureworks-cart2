import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                <div className="container">
                    <Title name="our" title="products"/>
                <div className="row">
            <ProductConsumer>
                {
                    (value)=>{
          console.log(value);
          return value.products.map(product =>{
              return <Product key={product.id} product={product}/>
          })
                    }
                }
            </ProductConsumer>
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
