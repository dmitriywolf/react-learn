
export const reducer = ( state = 15, action ) => {

  if(state === undefined) {
    return 0;
  }

  switch (action.type) {
    case "RND" : 
      return state + action.payload;
    case "INC" : 
      return state + 1;
    case "DEC": 
      return state -1;
    default: 
      return state;
  }
};