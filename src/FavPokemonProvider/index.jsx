import { createContext, useEffect, useReducer } from "react";
import { pokemonReducer, initializer } from "../pokemonReducer";

export const CardContext = createContext();

export const FavPokemonProvider = ({ children }) => {
  const [card, dispatch] = useReducer(pokemonReducer, [], initializer);

  useEffect(() => {
    console.log("Added to favourites locally", card);
    localStorage.setItem("favourites", JSON.stringify(card));
  }, [card]);

  return (
    <FavPokemonProvider
      value={{
        card,
        dispatch
      }}
    >
      {children}
    </FavPokemonProvider>
  );
};