import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Order Service Base URL

export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${BASE_URL}/createOrder`, orderData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Server Error');
  }
};

export const checkStock = async (productId) => {
  try {
    const response = await axios.get(`${BASE_URL}/checkStock/${productId}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Server Error');
  }
};
