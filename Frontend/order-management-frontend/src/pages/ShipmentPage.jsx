import React, { useState } from 'react';
import axios from 'axios';

const ShipmentPage = () => {
  const [shipmentId, setShipmentId] = useState('');
  const [shipmentStatus, setShipmentStatus] = useState('');

  const checkStatus = async () => {
    try {
      const response = await axios.post('http://localhost:5003/checkCustomerStatus', { shipment_id: shipmentId });
      setShipmentStatus(`Status: ${response.data.status}`);
    } catch (error) {
      setShipmentStatus('Error fetching shipment status.');
    }
  };

  return (
    <div>
      <h2>Shipment Management</h2>
      <input placeholder="Shipment ID" onChange={(e) => setShipmentId(e.target.value)} />
      <button onClick={checkStatus}>Check Status</button>
      {shipmentStatus && <p>{shipmentStatus}</p>}
    </div>
  );
};

export default ShipmentPage;
