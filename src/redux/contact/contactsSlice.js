import { createSelector, createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOps';
import { selectNameFilter } from '../filters/filtersSlice';

const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  loading: false,
  error: null,
};

export const selectContacts = (state) => {
  return state.contacts.items;
};
export const selectLoading = (state) => {
  return state.contacts.loading;
};
export const selectError = (state) => {
  return state.contacts.error;
};

const handlePending = (state, { payload }) => {
  state.loading = true;
  state.error = null;
};
const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contact, filters) => {
    return contact.filter((el) =>
      el.name.toLowerCase().includes(filters.toLowerCase())
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
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected);
  },
});
export default contactsSlice.reducer;
