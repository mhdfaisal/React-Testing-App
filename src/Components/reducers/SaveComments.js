const SaveComments = (state = [], action) => {
  switch (action.type) {
    case "SAVE_COMMENTS":
      return [...state, action.payload];

    default:
      return state;
  }
};
export default SaveComments;
