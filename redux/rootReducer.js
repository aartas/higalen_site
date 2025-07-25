// 'use client';
import { combineReducers } from '@reduxjs/toolkit'
import bookingReducer from './slices/bookingActionSlice'

const rootReducer = combineReducers({
  booking: bookingReducer,
});

export default rootReducer
