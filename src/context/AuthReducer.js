const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      // Case for login action
      return {
        currentUser: action.payload,
      };
    }
    case "LOGOUT": {
      // Case for logout action
      return {
        currentUser: null,
      };
    }
    default:
      return state; // Return current state without making any changes
  }
};

export default AuthReducer;
