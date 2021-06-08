import React, { Component } from 'react'


const  ProductContext = React.createContext();
//provider for providing information for all our application
//consumer using the above information
 

class ProductProvider extends Component {
    render() {
        return (
           <ProductContext.Provider value="hello from me">
               {this.props.children}
           </ProductContext.Provider>
        )
    }
}
//create consumer and export the class base component
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};
