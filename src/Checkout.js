import React, { useState } from "react";
import "./Checkout.css";

function Checkout() {
    const [shippingDetails, setShippingDetails] = useState({
        fullName: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
    });

    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: "",
        cardHolderName: "",
        expiryDate: "",
        cvv: "",
    });

    const handleShippingChange = (event) => {
        setShippingDetails({
            ...shippingDetails,
            [event.target.name]: event.target.value,
        });
    };

    const handlePaymentChange = (event) => {
        setPaymentDetails({
            ...paymentDetails,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Order placed. Thank you for shopping with us!");
    };

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
                <h2>Shipping Details</h2>
                <label htmlFor="fullName">Full Name</label>
                <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={shippingDetails.fullName}
                    onChange={handleShippingChange}
                    required
                />

                {/* More shipping details input fields go here */}

                <h2>Payment Details</h2>
                <label htmlFor="cardNumber">Card Number</label>
                <input
                    type="text"
                    name="cardNumber"
                    id="cardNumber"
                    value={paymentDetails.cardNumber}
                    onChange={handlePaymentChange}
                    required
                />

                {/* More payment details input fields go here */}

                <button type="submit">Place Order</button>
            </form>
        </div>
    );
}

export default Checkout;
