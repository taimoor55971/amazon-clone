import React from 'react'
import "./Checkout.css"
import SubTotal from './SubTotal'
import CheckoutProducts from './CheckoutProducts'
import { useStatevalue } from './StateProvider';
  
function Checkout() {
    const [{basket,user}]=useStatevalue();
    return (
        <div className="checkout">
                
        <div className="checkout_left">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG" 
            alt="Ad_image" className="checkoutad"/>
            <div>
            
                <h2 className="checkout_title">
                {!user ? "" : user?.email}<br/> 
                Your shopping basket</h2>

                 {basket.map(item=>(
                     <CheckoutProducts
                         id={item.id}
                         title={item.title}
                         image={item.image}
                         price={item.price}
                         rating={item.rating}
                     />
                 ))}
                
                {/*   */}
            </div>
        </div>
        <div className="checkout_right">

        <SubTotal />

        </div>
            
        </div>
    )
}

export default Checkout
