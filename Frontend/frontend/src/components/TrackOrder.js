import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Paper, 
  Typography, 
  Stepper, 
  Step, 
  StepLabel, 
  Box 
} from '@mui/material';

function TrackOrder() {
  const { orderId } = useParams();
  const [activeStep, setActiveStep] = useState(1);
  const steps = ['Order Placed', 'Processing', 'Shipped', 'Delivered'];

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Track Order #{orderId}
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 4 }}>
          <Typography variant="body1">
            Current Status: {steps[activeStep]}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Last Updated: {new Date().toLocaleDateString()}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default TrackOrder; 