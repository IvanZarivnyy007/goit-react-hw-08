import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contact/contactsSlice';
import filtersReducer from './filters/filtersSlice';
import authReducer from './auth/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
