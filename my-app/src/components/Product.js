import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className= "col-9 mx-auto col-md-6 col-lg-3 my-3">
               <div className="card">
<div className = "img-container p-5" onClick={()=> console.log('hi u clicked on me img')}>
<Link to="/details">
    <img src={img} alt="product img" className="card-img-top"/>
</Link>
<button className="cart-btn" disabled={inCart ? true : false} onClick={()=>{console.log('add to the cart')}}>
{inCart?(<p className="text-capitalize mb-0" disabled>
    {" "}
    inCart</p>):<i className="fas fa-cart-plus" />}
</button>
</div> 
{/* card for footer*/}
<div className="card-footer d-flex justify-content-between">
<p className="align-self-center mb-0">
    {title}
</p>
<h6 className="text-blue font-italic mb-0">
  <span className="mr-1">$</span>  
  {price}
</h6>
</div>
               </div>
            </ProductWrapper >
        )
    }
}

const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 2s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.3);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgba(247,247,247);
    }
}

`