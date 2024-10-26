import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVehicleInfo, addVehicle } from '../redux/slices/vehicleSlice';

const Vehicles = () => {
  const [vin, setVin] = useState('');
  const [vehicle, setVehicle] = useState({});
  const dispatch = useDispatch();
  const { vehicles, loading } = useSelector((state) => state.vehicles);

  const handleFetchVehicle = () => {
    dispatch(fetchVehicleInfo(vin));
  };

  const handleAddVehicle = () => {
    dispatch(addVehicle(vehicle));
    setVehicle({});
  };

  return (
    <div className="container">
      <h2>Gestion des Véhicules</h2>
      <input
        type="text"
        placeholder="Numéro VIN"
        value={vin}
        onChange={(e) => setVin(e.target.value)}
      />
      <button onClick={handleFetchVehicle} disabled={loading}>
        {loading ? 'Chargement...' : 'Rechercher'}
      </button>
      <div>
        <button onClick={handleAddVehicle}>Ajouter le véhicule</button>
      </div>
      <ul>
        {vehicles.map((v, index) => (
          <li key={index}>
            {v.make} {v.model} - {v.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vehicles;
