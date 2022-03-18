import React from "react";
import './css/Cart.css';
import './font.css';

const Cart = () =>{
    
    return <div> 

        <h3>My Cart</h3>
    
        <div className="sample"></div>

        <div className="itemLabels">
            <label>Title</label>
            <label>Author</label>
            <label>ISBN</label>
            <label>Qty.</label>
            <label>Price</label>
        </div>
        <div className="line1"></div>
    
        <div className="discount">
            <label>Discount Code:</label>
            <input type="text" />
            <button className="applyBtn">Apply Discount</button>
        </div>

        <div className="price">
            <label>Subtotal: </label>
            <label>Discount: </label>
            <label>Tax: </label>
            <label>Total: </label>
            <button className="checkoutBtn">Checkout</button>
        </div>
        


    </div>
   
}

export default Cart;