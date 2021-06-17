import React, { Component } from 'react';
import {storeProducts,detailProduct} from './data';


const  ProductContext = React.createContext();
//provider for providing information for all our application
//consumer using the above information
 

class ProductProvider extends Component {
    state = {
        products:[],
        detailProduct:detailProduct,
        cart:[]
    };

    //life circle method next
    //we get our set of values instead of referencing them by the setProducts method
    componentDidMount(){
        this.setProducts();
    }
    setProducts = ()=>{
        let tempProducts = [];
        storeProducts.forEach(item=>{
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];

        })
        this.setState(()=>{
            return {products:tempProducts}
        });
    };

    getItem = (id) =>{
        const product = this.state.products.find(item=>item.id ===id);
        return product;
    }

    handleDetail = (id)=>{
       const product = this.getItem(id);
       this.setState(()=>{
           return {detailProduct:product}
       }) 
    }

    addToCart = (id)=>{
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=>{
            return {products:tempProducts};
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
