import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const mockData = {
  collections: [
    { month: 'Jan', amount: 250000 },
    { month: 'Feb', amount: 300000 },
    { month: 'Mar', amount: 280000 },
    { month: 'Apr', amount: 320000 },
  ],
  summary: {
    totalCollected: 1150000,
    totalDue: 350000,
    defaulters: 25,
  },
};

export default function FinanceDashboard() {
  const handleExport = (format) => {
    alert(`Exporting report in ${format} format`);
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Finance Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} style={{ padding: '15px', textAlign: 'center' }}>
              <Typography variant="h6">Total Collections</Typography>
              <Typography variant="h4">₹{mockData.summary.totalCollected}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} style={{ padding: '15px', textAlign: 'center' }}>
              <Typography variant="h6">Total Due</Typography>
              <Typography variant="h4">₹{mockData.summary.totalDue}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} style={{ padding: '15px', textAlign: 'center' }}>
              <Typography variant="h6">Defaulters</Typography>
              <Typography variant="h4">{mockData.summary.defaulters}</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>Collection Trend</Typography>
            <LineChart
              width={800}
              height={300}
              data={mockData.collections}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="amount" stroke="#8884d8" />
            </LineChart>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: '10px' }}
              onClick={() => handleExport('PDF')}
            >
              Export PDF
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleExport('Excel')}
            >
              Export Excel
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}