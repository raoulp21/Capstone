import React from "react";
import { Link } from "react-router-dom";

function Cart({ cartItems }) {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <Link to="/Checkout"> {/* Update the path here */}
                <button>Proceed to Checkout</button>
            </Link>
        </div>
    );
}

export default Cart;

