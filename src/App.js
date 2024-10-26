import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import Vehicles from './pages/Vehicles';
import Appointments from './pages/Appointments';
import MechanicDashboard from './pages/MechanicDashboard';
import Payment from './pages/Payment';
import Navigation from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/mechanic-dashboard" element={<MechanicDashboard />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
