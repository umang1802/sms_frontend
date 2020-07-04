import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/login/login';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Router>
        <Route path="/" exact render={(props) => <Login user="admin" pass="admin"  {...props}/>}/>
        <Route path="/dashboard" render = {(props) => <Dashboard {...props} />} />
      </Router>
  );
}

export default App;
