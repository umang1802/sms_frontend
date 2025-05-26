import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Button,
  TextField,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

const mockStudent = {
  id: 1,
  name: 'John Doe',
  class: '10A',
  fees: {
    tuition: { amount: 30000, paid: 20000 },
    library: { amount: 5000, paid: 3000 },
    sports: { amount: 5000, paid: 2000 },
    technology: { amount: 10000, paid: 5000 },
  },
};

export default function StudentPayment() {
  const [amount, setAmount] = useState('');

  const handlePayment = async () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY',
      amount: amount * 100,
      name: 'School Fee Payment',
      description: `Fee payment for ${mockStudent.name}`,
      handler: function(response) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: mockStudent.name,
      },
      theme: {
        color: '#3f51b5',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Fee Payment
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6">Student Details</Typography>
            <Typography>Name: {mockStudent.name}</Typography>
            <Typography>Class: {mockStudent.class}</Typography>
          </Grid>

          <Grid item xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Fee Type</TableCell>
                    <TableCell align="right">Total Amount</TableCell>
                    <TableCell align="right">Paid</TableCell>
                    <TableCell align="right">Due</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(mockStudent.fees).map(([type, { amount, paid }]) => (
                    <TableRow key={type}>
                      <TableCell>{type}</TableCell>
                      <TableCell align="right">{amount}</TableCell>
                      <TableCell align="right">{paid}</TableCell>
                      <TableCell align="right">{amount - paid}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Payment Amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handlePayment}
              disabled={!amount}
              fullWidth
            >
              Pay Now
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}