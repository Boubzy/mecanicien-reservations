import React from 'react';
import { useSelector } from 'react-redux';

const MechanicDashboard = () => {
  const { appointments } = useSelector((state) => state.appointments);

  return (
    <div className="container">
      <h2>Tableau de bord du Mécanicien</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.date} - {appointment.clientName} - {appointment.vehicle}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MechanicDashboard;
