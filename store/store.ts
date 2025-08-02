import { configureStore, createSlice } from '@reduxjs/toolkit'

// Simple content slice for Ekaant website
const contentSlice = createSlice({
  name: 'content',
  initialState: {
    loaded: true,
  },
  reducers: {
    setLoaded: (state, action) => {
      state.loaded = action.payload
    },
  },
})

export const { setLoaded } = contentSlice.actions

export const store = configureStore({
  reducer: {
    content: contentSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch