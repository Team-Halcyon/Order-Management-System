import { useState, useEffect } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Button 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function OrderList({ onOrderSelect }) {
  const [orders, setOrders] = useState([
    // Mock data - replace with API call
    {
      id: 1,
      customerName: 'John Doe',
      items: 'Product A',
      status: 'Processing',
      date: '2024-03-20'
    },
    // Add more mock orders as needed
  ]);

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Items</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customerName}</TableCell>
              <TableCell>{order.items}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>
                <Button 
                  variant="contained" 
                  size="small"
                  onClick={() => onOrderSelect(order.id)}
                >
                  Track
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OrderList; 