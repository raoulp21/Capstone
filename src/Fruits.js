import React from "react";
import { Link } from "react-router-dom";
import "./Fruits.css";
import fruitsList from "./FruitList";

function Fruits({ addToCart }) {
    const handleClick = (fruit) => {
        addToCart(fruit);
        alert(`${fruit.name} added to cart.`);
    };

    return (
        <div>
            <h1 className="heading">Fruits</h1> 
            <ul className="item-list">
                {fruitsList.map((fruit) => (
                    <li key={fruit.name} onClick={() => handleClick(fruit)}>
                        <img src={fruit.img} alt={fruit.name} />
                        <p>{fruit.name}</p>
                        <p>Price: ${fruit.price.toFixed(2)}</p>
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

export default Fruits;
