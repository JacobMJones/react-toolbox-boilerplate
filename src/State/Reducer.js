export default (state, action) => {
  switch (action.type) {
    case "changeCounter":
      return {
        ...state,
        globalCounter: action.newGlobalCounter
      };
  }
  switch (action.type) {
    case "changeUserData":
      return {
        ...state,
        userData: action.newUserData
      };
  }
};
