import axios from 'axios';

const BASE_URL = 'http://localhost:5001'; // Inventory Service Base URL

export const checkInventory = async (itemId) => {
  try {
    const response = await axios.post(`${BASE_URL}/check-stock`, { itemId });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Server Error');
  }
};
