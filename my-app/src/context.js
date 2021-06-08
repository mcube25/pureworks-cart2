import React, { Component } from 'react'


const  ProductContext = React.createContext();

 

class ProductProvider extends Component {
    render() {
        return (
           <ProductContext.Provider value="hello from me">
               {this.props.children}
           </ProductContext.Provider>
        )
    }
}
