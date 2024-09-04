export const selectUser = (state) => {
  return state.auth.user;
};
export const selectIsLoggedIn = (state) => {
  return state.auth.isLoggedIn;
};
