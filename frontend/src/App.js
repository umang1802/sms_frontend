import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/login/login';
import Dashboard from './components/dashboard/Dashboard';
import FeeManagement from './components/feeManagement/FeeManagement';
import StudentPayment from './components/studentPayment/StudentPayment';
import FinanceDashboard from './components/financeDashboard/FinanceDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={(props) => <Login user="admin" pass="admin" {...props}/>}/>
        <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
        <Route path="/fee-management" render={(props) => <FeeManagement {...props} />} />
        <Route path="/student-payment" render={(props) => <StudentPayment {...props} />} />
        <Route path="/finance-dashboard" render={(props) => <FinanceDashboard {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;