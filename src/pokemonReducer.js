const cardReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const card = action.payload;
      let index = state.findIndex((i) => card.name === i.name);
      if (index >= 0) {
        const newState = [...state];
        newState.splice(index, 1, {
          ...state[index],
          id: state[index].id + 1
        });
        return newState;
      } else {
        return [...state, { ...card, id: 1 }];
      }
    }
    case "REMOVE": {
      let index = state.findIndex((i) => action.payload.name === i.name);
      if (index >= 0) {
        const newState = [...state];
        newState.splice(index, 1);
        return newState;
      }
      return state;
    }
    default:
      throw new Error();
  }
};

export default cardReducer;
