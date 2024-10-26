import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './MechanicDashboard.css';

const MechanicDashboard = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="container">
      <h1>Dashboard du Mécanicien</h1>
      <p>Bienvenue sur le tableau de bord du mécanicien. Vous pouvez voir ici vos rendez-vous, les informations des clients, et gérer votre emploi du temps.</p>
      
      <div className="appointment-list">
        <h2>Rendez-vous à venir</h2>
        <p>Aucun rendez-vous pour le moment.</p>
      </div>
    </div>
  );
};

export default MechanicDashboard;
