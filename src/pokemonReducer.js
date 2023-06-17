const initialState = [];

export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("pokemonalldata")) || initialValue;

export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state.find((card) => card.name === action.card.name)
        ? state.map((card) =>
            card.name === action.card.name ? { ...card, id: card.id + 1 } : card
          )
        : [...state, { ...action.card, id: 1 }];
    case "REMOVE":
      return state.filter((card) => card.id !== action.card.id);
    default:
      return state;
  }
};

export const addFavourites = (card) => ({
  type: "ADD",
  card
});

export const removeFavourite = (card) => ({
  type: "REMOVE",
  card
});
