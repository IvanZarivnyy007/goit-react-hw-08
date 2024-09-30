import { createSelector, createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations.js';
import { selectNameFilter } from '../filters/filtersSlice';
import { fetchUserLogout } from './../auth/operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = (state, { payload }) => {
  state.loading = true;
  state.error = null;
};
const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex((el) => el.id == action);
        state.items.splice(index, 1);
      })
      .addCase(fetchUserLogout.fulfilled, (state) => {
        state.items = [];
      })
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected);
  },
});
export default contactsSlice.reducer;
