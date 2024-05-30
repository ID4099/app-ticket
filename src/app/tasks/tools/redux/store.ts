import { configureStore } from '@reduxjs/toolkit';
import elementosReducer from './slice';

const store = configureStore({
  reducer: {
    elementos: elementosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
