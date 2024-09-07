import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './redux/contact/contactsSlice';
import filtersReducer from './redux/filters/filtersSlice';
import authReducer from './redux/auth/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
