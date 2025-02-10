import axios from 'axios';

const BASE_URL = 'http://localhost:5003'; // Shipment Service Base URL

export const checkCustomerShipmentStatus = async (shipmentId) => {
  try {
    const response = await axios.post(`${BASE_URL}/checkCustomerStatus`, { shipment_id: shipmentId });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Server Error');
  }
};

export const createCustomerShipment = async (orderId) => {
  try {
    const response = await axios.post(`${BASE_URL}/createCustomerShipment`, { order_id: orderId });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Server Error');
  }
};
