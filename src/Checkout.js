import React, { useState } from "react";

function Checkout({ cartItems, onPlaceOrder }) {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const handleSubmit = (e) => {
        e.preventDefault();

        const sale = {
            username: name,
            address,
            totalPrice,
            items: cartItems,
        };

        onPlaceOrder(sale);
        alert("Order placed successfully!");
        setName("");
        setAddress("");
    };

    return (
        <div>
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <p>Total: ${totalPrice.toFixed(2)}</p>
                </div>
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
}

export default Checkout;
