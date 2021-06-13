import React, { Component } from 'react';
import {storeProducts,detailProduct} from './data';


const  ProductContext = React.createContext();
//provider for providing information for all our application
//consumer using the above information
 

class ProductProvider extends Component {
    state ={
        products:[],
        detailProduct:detailProduct
    }
    handleDetail = ()=>{
        console.log('hello detail');
    }

    addToCart = ()=>{
        console.log('hello cart');
    }
     setProducts = ()=>{
         let tempProducts = [];
         storeProducts.forEach(item=>{
             const singleItem = {...item};
             products = [...products,singleItem];

         })
         this.setState(()=>{
             return {products:tempProducts}
         })
     }

    render() {
        return (
           <ProductContext.Provider value={{
...this.state,
handleDetail:this.handleDetail,
addToCart:this.addToCart
           }}>
               {this.props.children}
           </ProductContext.Provider>
        )
    }
}
//create consumer and export the class base component
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};
