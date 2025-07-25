import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import subDomainServices from '@/services/subDomainService';

export const checkDomainExists = createAsyncThunk('check/domain/exists', async (post, { rejectWithValue }) => {
  try {
    const response = await subDomainServices.checkDomainExists(post);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const subDomainActionSlice = createSlice({
  name: 'subDomainAction',
  initialState: {
    checkDomainExistsData: [],
    checkDomainExistsDataStatus: 'idle',
    checkDomainExistsDataError: null,

    status: 'idle',
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkDomainExists.pending, (state) => {
        state.checkDomainExistsData = [];
        state.checkDomainExistsDataStatus = 'loading';
        state.checkDomainExistsDataError = null;
      })
      .addCase(checkDomainExists.fulfilled, (state, action) => {
        state.checkDomainExistsData = action.payload;
        state.checkDomainExistsDataStatus = 'succeeded';
        state.checkDomainExistsDataError = null;
      })
      .addCase(checkDomainExists.rejected, (state, action) => {
        state.checkDomainExistsData = [];
        state.checkDomainExistsDataStatus = 'failed';
        state.checkDomainExistsDataError = action.payload || action.error.message;
      })
  },
});

export const {  } = subDomainActionSlice.actions;
export default subDomainActionSlice.reducer;