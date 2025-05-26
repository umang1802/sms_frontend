import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Tabs,
  Tab,
  Box,
} from '@material-ui/core';
import StudentList from './StudentList';
import FeeStructure from './FeeStructure';
import OfflinePayment from './OfflinePayment';

const mockStudents = [
  { id: 1, name: 'John Doe', class: '10A', totalFees: 50000, paid: 30000, due: 20000 },
  { id: 2, name: 'Jane Smith', class: '10B', totalFees: 50000, paid: 45000, due: 5000 },
];

const mockFeeStructure = {
  '10A': { tuition: 30000, library: 5000, sports: 5000, technology: 10000 },
  '10B': { tuition: 30000, library: 5000, sports: 5000, technology: 10000 },
};

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

export default function FeeManagement() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container>
      <Paper elevation={3}>
        <Typography variant="h4" component="h1" align="center" gutterBottom style={{ padding: '20px' }}>
          Fee Management
        </Typography>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Student List" />
          <Tab label="Fee Structure" />
          <Tab label="Offline Payments" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <StudentList students={mockStudents} />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <FeeStructure feeStructure={mockFeeStructure} />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <OfflinePayment students={mockStudents} />
        </TabPanel>
      </Paper>
    </Container>
  );
}