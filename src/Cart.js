import React from "react";
import { Link } from "react-router-dom";

function Cart({ cartItems, clearCart }) {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const buttonStyle = {
        padding: "10px 20px",
        fontSize: "18px",
        cursor: "pointer",
        margin: "10px"
    };

    const isCartEmpty = totalPrice === 0;

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
            {isCartEmpty && <p>You need to add items to the cart.</p>}
            <Link to={isCartEmpty ? "#" : "/Checkout"} style={{ textDecoration: "none" }}>
                <button style={buttonStyle} disabled={isCartEmpty}>Proceed to Checkout</button>
            </Link>
            <button onClick={clearCart} style={buttonStyle}>Clear Cart</button>
        </div>
    );
}

export default Cart;
