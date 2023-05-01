import React from "react";
import { Link } from "react-router-dom"; // Add this import
import "./Veggies.css";
import veggiesList from "./VeggiesList";

function Veggies({ addToCart }) {
    const handleClick = (veggie) => {
        addToCart(veggie);
        alert(`${veggie.name} added to cart.`);
    };

    return (
        <div>
            <h1>Veggies</h1>
            <ul className="item-list">
                {veggiesList.map((veggie) => (
                    <li key={veggie.name} onClick={() => handleClick(veggie)}>
                        <img src={veggie.img} alt={veggie.name} />
                        <p>{veggie.name}</p>
                        <p>Price: ${veggie.price.toFixed(2)}</p>
                    </li>
                ))}
            </ul>
            <div className="button-container">
                <Link to="/cart">
                    <button>View Cart</button>
                </Link>
                <Link to="/dashboard">
                    <button>Back to Dashboard</button>
                </Link>
            </div>
        </div>
    );
}

export default Veggies;
