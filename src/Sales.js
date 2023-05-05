import React from "react";

function Sales({ salesData }) {
    return (
        <div>
            <h1>Sales</h1>
            {salesData.length === 0 && <p>No sales data available.</p>}
            {salesData.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesData.map((sale, index) => (
                            <tr key={index}>
                                <td>{sale.username}</td>
                                <td>{sale.address}</td>
                                <td>${sale.totalPrice.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Sales;
