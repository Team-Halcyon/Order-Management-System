import { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CreateOrder({ onOrderCreated }) {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState({
    customerName: '',
    address: '',
    items: '',
    quantity: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to create the order
    console.log('Order created:', orderData);
    onOrderCreated();
  };

  const handleChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Create New Order
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Customer Name"
            name="customerName"
            value={orderData.customerName}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Shipping Address"
            name="address"
            value={orderData.address}
            onChange={handleChange}
            margin="normal"
            required
            multiline
            rows={3}
          />
          <TextField
            fullWidth
            label="Items"
            name="items"
            value={orderData.items}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Quantity"
            name="quantity"
            type="number"
            value={orderData.quantity}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Create Order
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default CreateOrder; 