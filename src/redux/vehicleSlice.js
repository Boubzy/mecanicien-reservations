import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  vehicles: [],
  loading: false,
  error: null,
};

const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    setVehicles: (state, action) => {
      state.vehicles = action.payload;
    },
    addVehicle: (state, action) => {
      state.vehicles.push(action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setVehicles, addVehicle, setLoading, setError } = vehicleSlice.actions;

export const fetchVehicleInfo = (vin) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vin}?format=json`);
    dispatch(addVehicle(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default vehicleSlice.reducer;
