const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT": {
      // Case for switching to light mode
      return {
        darkMode: false,
      };
    }
    case "DARK": {
      // Case for switching to dark mode
      return {
        darkMode: true,
      };
    }
    // Case for toggling between light and dark modes
    case "TOGGLE": {
      return {
        darkMode: !state.darkMode,
      };
    }
    default:
      return state;
  }
};

export default DarkModeReducer;
