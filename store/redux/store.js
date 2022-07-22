import { configureStore } from '@reduxjs/toolkit';
import favortesReducer from './favorites';

export const store = configureStore({
  reducer: {
    favoriteMeals: favortesReducer
  }
});
