export const selectorsContacts = (state) => {
  console.log(state);

  return state.contacts.items;
};
export const selectorsLoading = (state) => {
  return state.contacts.loading;
};
export const selectorsError = (state) => {
  return state.contacts.error;
};
