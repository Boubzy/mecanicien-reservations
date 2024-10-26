import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAppointment } from '../redux/slices/appointmentSlice';

const Appointments = () => {
  const [date, setDate] = useState('');
  const [vehicle, setVehicle] = useState('');
  const dispatch = useDispatch();
  const { vehicles } = useSelector((state) => state.vehicles);
  const { appointments } = useSelector((state) => state.appointments);

  const handleAddAppointment = () => {
    dispatch(addAppointment({ date, vehicle }));
    setDate('');
    setVehicle('');
  };

  return (
    <div className="container">
      <h2>Gestion des Rendez-vous</h2>
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <select value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
        <option value="">Choisissez un véhicule</option>
        {vehicles.map((v, index) => (
          <option key={index} value={v.id}>
            {v.make} {v.model} - {v.year}
          </option>
        ))}
      </select>
      <button onClick={handleAddAppointment}>Prendre rendez-vous</button>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            {appointment.date} - {appointment.vehicle}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
