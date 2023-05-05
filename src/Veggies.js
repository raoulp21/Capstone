import React from "react";
import { Link } from "react-router-dom";
import "./Veggies.css";
import veggiesList from "./VeggiesList";

function Veggies({ addToCart }) {
    const handleClick = (veggie) => {
        addToCart(veggie);
        alert(`${veggie.name} added to cart.`);
    };

    return (
        <div>
            <h1 className="heading">Vegetables</h1>
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
                <Link to="/dashboard">
                    <button>Dashboard</button>
                </Link>
                <Link to="/cart">
                    <button>View Cart</button>
                </Link>
            </div>
        </div>
    );
}

export default Veggies;
