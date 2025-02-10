import React, { useState } from 'react';
import axios from 'axios';

const OrderPage = () => {
  const [formData, setFormData] = useState({ user_id: '', product_id: '', quantity: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/createOrder', formData);
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage('Error creating order: ' + error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Order Creation</h2>
      <form onSubmit={handleSubmit}>
        <input name="user_id" placeholder="User ID" onChange={handleChange} required />
        <input name="product_id" placeholder="Product ID" onChange={handleChange} required />
        <input name="quantity" placeholder="Quantity" type="number" onChange={handleChange} required />
        <button type="submit">Create Order</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default OrderPage;
