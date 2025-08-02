import { configureStore } from '@reduxjs/toolkit'

// Simple store for Next.js - can be expanded as needed
export const store = configureStore({
  reducer: {
    // Add reducers as needed
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch