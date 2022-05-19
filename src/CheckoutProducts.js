import React from 'react'
import "./checkoutProducts.css"
import reducer from "./reducer"
import { useStatevalue } from './StateProvider';

function CheckoutProducts({id,image,title,price,rating}) {
    const [{basket} , dispatch ]=useStatevalue();
    const RemovefromBasket =()=>{
        //remove item from basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
             id:id,


        })
    }
    
    return (
        <div className="CheckoutProduct">
            <img src={image} alt="" className="checkoutProduct_image"/>
            <div className="checkoutProducts_info">
                <p className="checkoutProducts_title">{title}</p>
                <p className="checkoutProducts_price">
                <small>$</small>
                <strong>{price}</strong></p>
                <p className="checkoutProducts_rating">
                { Array(rating)
                .fill()
                .map((_ ,i)=>(
                    <p>⭐</p>

                ))}
                </p>
                <button onClick={RemovefromBasket} >Remove the basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProducts
 