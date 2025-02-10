
import './App.css';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Navbar from "./components/navbar.js";
import Shop from "./pages/shop.js";
import Cart from "./pages/cart.js";



function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>      
      </div>
    </Router>

  );
}

export default App;
