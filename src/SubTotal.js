import React from 'react'
import "./SubTotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStatevalue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function SubTotal() {
    const [{basket}]=useStatevalue();
    const history=useHistory()
   
    return (
        <div className="subTotal">
            <CurrencyFormat
            renderText={(value)=>(
                <>
                {/* Hw */}
                <p>Subtotal({basket?.length} items) :<strong>{value}</strong>
                </p>
                <small className="subTotal_gift">
                <input type="checkbox"/>This order contains a gift
                </small>
                </>
            )}
            decimalScale = {2}
            value = {getBasketTotal(basket)} //HW
            displayType = {"text"}
            thousandsSeparator = {true}
            prefix = {"$"}


            />
            <button onClick={e=>history.push("/payment")}>Proceed to checkout</button>
        </div>
    )
}

export default SubTotal
