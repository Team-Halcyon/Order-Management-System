import { useState } from 'react';
import { 
  Container, 
  Grid, 
  Paper, 
  Box, 
  Typography, 
  Tab, 
  Tabs 
} from '@mui/material';
import CreateOrder from '../components/CreateOrder';
import OrderList from '../components/OrderList';
import TrackOrder from '../components/TrackOrder';

function OrderManagement() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  // Handle tab changes
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Handle order selection for tracking
  const handleOrderSelect = (orderId) => {
    setSelectedOrderId(orderId);
    setSelectedTab(2); // Switch to tracking tab
  };

  // Tab panel component
  function TabPanel({ children, value, index }) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`order-tabpanel-${index}`}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={selectedTab} 
            onChange={handleTabChange}
            aria-label="order management tabs"
            centered
          >
            <Tab label="View Orders" />
            <Tab label="Create Order" />
            <Tab label="Track Order" />
          </Tabs>
        </Box>

        {/* View Orders Tab */}
        <TabPanel value={selectedTab} index={0}>
          <Typography variant="h6" gutterBottom component="div">
            Order List
          </Typography>
          <OrderList onOrderSelect={handleOrderSelect} />
        </TabPanel>

        {/* Create Order Tab */}
        <TabPanel value={selectedTab} index={1}>
          <Typography variant="h6" gutterBottom component="div">
            Create New Order
          </Typography>
          <CreateOrder 
            onOrderCreated={() => {
              setSelectedTab(0); // Switch to order list after creation
            }} 
          />
        </TabPanel>

        {/* Track Order Tab */}
        <TabPanel value={selectedTab} index={2}>
          <Typography variant="h6" gutterBottom component="div">
            Track Order
          </Typography>
          {selectedOrderId ? (
            <TrackOrder orderId={selectedOrderId} />
          ) : (
            <Typography variant="body1" color="text.secondary" align="center">
              Please select an order to track from the Order List
            </Typography>
          )}
        </TabPanel>
      </Paper>

      {/* Dashboard Summary */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
            }}
          >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Total Orders
            </Typography>
            <Typography component="p" variant="h4">
              24 {/* Replace with actual data */}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
            }}
          >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Pending Orders
            </Typography>
            <Typography component="p" variant="h4">
              8 {/* Replace with actual data */}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
            }}
          >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Delivered Orders
            </Typography>
            <Typography component="p" variant="h4">
              16 {/* Replace with actual data */}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OrderManagement; 