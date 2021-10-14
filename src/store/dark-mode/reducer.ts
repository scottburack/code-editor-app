import { createSlice } from '@redux.js/toolkit';

export const initialState = false;

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      return !state;
    },
  },
})

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;