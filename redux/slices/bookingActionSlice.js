import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import bookingServices from '@/services/bookingService';

// export const addAppointment = createAsyncThunk('appointments/addAppointment', async (post, { rejectWithValue }) => {
//   try {
//     const response = await appointmentServices.addAppointment(post);
//     return response;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// });

// Create the appointment actions slice
const bookingActionSlice = createSlice({
  name: 'bookingAction',
  initialState: {
    // addAppointmentData: [],
    // addAppointmentDataStatus: 'idle',
    // addAppointmentDataError: null,

    status: 'idle',
    error: null,
  },
  reducers: {
    // clearAppointmentDetails: (state) => {
    //   state.appointmentDetails = [];
    // }
  },
  extraReducers: (builder) => {
    builder
    //   .addCase(addAppointment.pending, (state) => {
    //     state.addAppointmentData = [];
    //     state.addAppointmentDataStatus = 'loading';
    //     state.addAppointmentDataError = null;
    //   })
    //   .addCase(addAppointment.fulfilled, (state, action) => {
    //     state.addAppointmentDataStatus = 'succeeded';
    //     state.addAppointmentData = action.payload;
    //   })
    //   .addCase(addAppointment.rejected, (state, action) => {
    //     state.addAppointmentData = [];
    //     state.addAppointmentDataStatus = 'failed';
    //     state.addAppointmentDataError = action.payload || action.error.message;
    //   })
  },
});

export const {  } = bookingActionSlice.actions;
export default bookingActionSlice.reducer;