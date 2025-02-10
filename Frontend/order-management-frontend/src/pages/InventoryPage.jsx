import React, { useState } from 'react';
import axios from 'axios';

const InventoryPage = () => {
  const [productId, setProductId] = useState('');
  const [stockStatus, setStockStatus] = useState('');

  const checkStock = async () => {
    try {
      const response = await axios.post('http://localhost:5001/check-stock', { itemId: productId });
      setStockStatus(`Available Quantity: ${response.data.quantity}`);
    } catch (error) {
      setStockStatus('Stock not available or error occurred.');
    }
  };

  return (
    <div>
      <h2>Inventory Management</h2>
      <input placeholder="Product ID" onChange={(e) => setProductId(e.target.value)} />
      <button onClick={checkStock}>Check Stock</button>
      {stockStatus && <p>{stockStatus}</p>}
    </div>
  );
};

export default InventoryPage;
