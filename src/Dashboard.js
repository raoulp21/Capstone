import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import fruitsList from "./FruitList";
import veggiesList from "./VeggiesList";
import meatsList from "./MeatsList";
import "./Dashboard.css";

function Dashboard({ loggedInUser, addToCart }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const navigate = useNavigate();

    const allItems = [...fruitsList, ...veggiesList, ...meatsList];

    const handleSearch = () => {
        const result = allItems.find(
            (item) => item.name.toLowerCase() === searchTerm.toLowerCase()
        );
        setSearchResult(result);
    };

    const handleAddToCartClick = () => {
        if (searchResult) {
            addToCart(searchResult);
            alert(`${searchResult.name} added to cart.`);
        }
    };

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <div className="dashboard-container">
            <button className="logout-button" onClick={handleLogout}>
                Logout
            </button>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {searchResult && (
                <div>
                    <button onClick={handleAddToCartClick}>
                        <img
                            src={searchResult.img}
                            alt={searchResult.name}
                            className="item-image" // Add the new class here
                        />
                        <div>
                            {searchResult.name} - ${searchResult.price.toFixed(2)}
                        </div>
                    </button>
                </div>
            )}
            {!searchResult && (
                <div>
                    <h2 className="category-heading">Categories</h2>
                    <div className="category-buttons">
                        <Link to="/fruits">
                            <button>Fruits</button>
                        </Link>
                        <Link to="/veggies">
                            <button>Veggies</button>
                        </Link>
                        <Link to="/meats">
                            <button>Meats</button>
                        </Link>
                    </div>
                </div>
            )}
            <Link to="/cart" className="cart-link">
                <button className="view-cart-button">View Cart</button>
            </Link>
        </div>
    );
}

export default Dashboard;
