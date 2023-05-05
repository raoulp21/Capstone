import React from "react";
import { Link } from "react-router-dom";
import "./Meats.css";
import meatsList from "./MeatsList";

function Meats({ addToCart }) {
    const handleClick = (meat) => {
        addToCart(meat);
        alert(`${meat.name} added to cart.`);
    };

    return (
        <div>
            <h1 className="heading">Meats</h1>
            <ul className="item-list">
                {meatsList.map((meat) => (
                    <li key={meat.name} onClick={() => handleClick(meat)}>
                        <img src={meat.img} alt={meat.name} />
                        <p>{meat.name}</p>
                        <p>Price: ${meat.price.toFixed(2)}</p>
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

export default Meats;
