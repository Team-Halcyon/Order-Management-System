
import './App.css';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Navbar from "./components/navbar.js";
import Inventory_item from './components/inventory_item.js';
// import Shop from "./pages/shop.js";
import Cart from "./pages/cart.js";



function App() {
  return (
    <Router>
      <Navbar/>
      {/* <Inventory_item/> */}
      <div>
        <Routes>
          <Route path="/" element={<Inventory_item/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>      
      </div>
    </Router>

  );
}

export default App;
