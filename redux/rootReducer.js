// 'use client';
import { combineReducers } from '@reduxjs/toolkit'
import bookingReducer from './slices/bookingActionSlice';
import subDomainReducer from './slices/subDomainActionSlice'

const rootReducer = combineReducers({
  booking: bookingReducer,
  subDomain: subDomainReducer,
});

export default rootReducer
