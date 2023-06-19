import Search from "./components/Search";
import "./index.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function App() {
  const [state, setState] = useState({
    pokemon: []
  });

  const [pokemon, setPokemon] = useState();
  const [error, setError] = useState({});

  const fetchPokemon = async () => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    try {
      await sleep(7000);
      const res = await axios("https://pokeapi.co/api/v2/");

      const pokemon = await axios(res.data.pokemon + "?limit=50&offset=0");
      setState({ pokemon: pokemon.data.results });
      localStorage.setItem("pokemon", JSON.stringify(pokemon.data.results));
      setPokemon(pokemon.data.results);
    } catch (err) {
      setError(err.message.response);
    }
  };

  console.log(pokemon);
  useEffect(() => {
    fetchPokemon();
    if (window.localStorage !== undefined) {
      const pokemonData = window.localStorage.getItem("pokemon");
      pokemonData !== null ? setPokemon(JSON.parse(pokemonData)) : null;
    }
  }, []);

  return (
    <>
      <div
        className="
      bg-contain bg-no-repeat bg-right-bottom antialiased drop-shadow-2xl
      relative rounded-b-3xl bg-slate-300 
      w-full h-[43em] bg-[url('https://imgtr.ee/images/2023/06/18/YuPXx.th.png')]"
      >
        <div className="container">
          <div className="h-0 absolute">
            <Flex minWidth="max-content" align="center">
              <h1
                className="font-bold my-10 flex flex-wrap  mx-10 justify-start  
           text-5xl text-indigo-600"
              >
                Pokédex
              </h1>
              <Spacer />
              <Link
                className="font-bold hover:decoration-2 hover:underline"
                color="#09090b"
                alignItems="flex-end"
                to="/favorites"
              >
                Favorites
              </Link>
            </Flex>

            <div className=" w-72 ">
              <label
                htmlFor="search-pokemon"
                className="text-2xl flex mx-10
                 text-slate-800/90 font-bold"
              >
                What are you looking for?
              </label>
            </div>
            <Search pokemonNames={state.pokemon} error={error} />
          </div>
          <div className="absolute opacity-60 h-3/4 w-[56%] bottom-24 z-40 right-0 bg-cover bg-no-repeat bg-right bg-[url('https://o.remove.bg/downloads/24524da7-7575-4d12-8073-c75d96b4547c/Cute-Pikachu-Pokemon-Character-iphone-11-pro-removebg-preview.png')]"></div>
        </div>
      </div>
    </>
  );
}
