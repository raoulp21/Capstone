import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import Fruits from "./Fruits";
import Veggies from "./Veggies";
import Meats from "./Meats";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Sales from './Sales';
import "./index.css";

function App() {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [userCarts, setUserCarts] = useState({});
    const [salesData, setSalesData] = useState([]);

    const handleLogin = (username) => {
        setLoggedInUser(username);
        if (!userCarts[username]) {
            setUserCarts({ ...userCarts, [username]: [] });
        }
    };

    const addToCart = (item) => {
        if (loggedInUser) {
            const newUserCarts = {
                ...userCarts,
                [loggedInUser]: [...userCarts[loggedInUser], item],
            };
            setUserCarts(newUserCarts);
        }
    };

    const clearCart = () => {
        if (loggedInUser) {
            setUserCarts(prevUserCarts => ({
                ...prevUserCarts,
                [loggedInUser]: [],
            }));
        }
    };


    const handlePlaceOrder = (sale) => {
        setSalesData([...salesData, sale]);
        setUserCarts({ ...userCarts, [loggedInUser]: [] });  
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<LoginPage onLogin={handleLogin} />}
                />
                <Route
                    path="/dashboard"
                    element={<Dashboard loggedInUser={loggedInUser} addToCart={addToCart} />}
                />
                <Route
                    path="/fruits"
                    element={<Fruits addToCart={addToCart} />}
                />
                <Route
                    path="/veggies"
                    element={<Veggies addToCart={addToCart} />}
                />
                <Route
                    path="/meats"
                    element={<Meats addToCart={addToCart} />}
                />
                <Route
                    path="/cart"
                    element={
                        <Cart cartItems={userCarts[loggedInUser] || []} clearCart={clearCart} />
                    }
                />
                <Route
                    path="/checkout"
                    element={
                        <Checkout
                            cartItems={userCarts[loggedInUser] || []}
                            onPlaceOrder={handlePlaceOrder}
                        />
                    }
                />
                <Route path="/sales" element={<Sales salesData={salesData} />} />
            </Routes>
        </Router>
    );
}

export default App;
