import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import OrderManagement from './pages/OrderManagement';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <OrderManagement />
      </div>
    </Router>
  );
}

export default App; 