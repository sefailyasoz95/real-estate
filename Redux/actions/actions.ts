import { createAsyncThunk } from '@reduxjs/toolkit'
import { coreService } from '../services/services'

export const getSomeData = createAsyncThunk(
  'core/getSomeData',
  async (data, thunkAPI) => {
    try {
      return await coreService.GetSomeDataAsync(data)
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
