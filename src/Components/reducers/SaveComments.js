const SaveComments = (state = [], action) => {
  switch (action.type) {
    case "SAVE_COMMENTS":
      return [...state, action.payload];
    case "FETCH_COMMENTS" : const comments = action.payload.map((item,index)=>{
                                return item.title;
                            })
              return [...state, ...comments]
    default:
      return state;
  }
};
export default SaveComments;
