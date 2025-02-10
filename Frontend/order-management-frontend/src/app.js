import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import OrderPage from './pages/OrderPage';
import InventoryPage from './pages/InventoryPage';
import ShipmentPage from './pages/ShipmentPage';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<OrderPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/shipment" element={<ShipmentPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
