import React from 'react'
import "./product.css"
import { useStatevalue } from './StateProvider';
import reducer from './reducer'

function Product({id,title,image,price,rating}) {
    const [{basket}, dispatch] = useStatevalue();
     


    const addtoBasket=()=>{

        //add item to the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: { 
                id:id,
                title:title,
                price:price,
                rating:rating,
                image:image, 
            },
        });
    }
    return (
        <div className="product">
        <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
        <small>$</small>
        <strong>{price}</strong>

        </p>
        <div className="product_rating">
        { Array(rating)
        .fill()
        .map((_ , i)=>(
            <p>⭐</p>

        ))
        }
        
       


        </div>

        </div>
        <img src={image}/>
        <button onClick= {addtoBasket} >Add to Basket</button>
            
        </div>
    )
}

export default Product
