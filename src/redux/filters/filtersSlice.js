import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

export const selectNameFilter = (state) => {
  return state.filters.name;
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter(state, { payload }) {
      state.name = payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
