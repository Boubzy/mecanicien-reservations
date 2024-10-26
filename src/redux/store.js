import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import vehicleReducer from './slices/vehicleSlice';
import appointmentReducer from './slices/appointmentSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    vehicles: vehicleReducer,
    appointments: appointmentReducer,
  },
});