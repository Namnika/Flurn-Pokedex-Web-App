const initialState = [];

export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("pokemonalldata")) || initialValue;

export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state.find((card) =>
        card.name === action.card.name
          ? [...state, { ...action.card, id: 1 }]
          : state
      );
    case "REMOVE":
      return state.filter((card) => card.id !== action.card.id);
    default:
      return state;
  }
};

export const addFavorites = (card) => ({
  type: "ADD",
  card
});

export const removeFavorite = (card) => ({
  type: "REMOVE",
  card
});
