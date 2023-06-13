import { useState, useEffect } from "react";
import axios from "axios";
import { BiSearch } from "react-icons/bi";
import Listing from "./Listing";
import BeatLoader from "react-spinners/BeatLoader";

const Search = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      const id = setInterval(() => {
        setLoading(false);
      }, 3500);
      //loader timer

      const response = await axios(
        `https://pokeapi.co/api/v/pokedex/${searchInput}?limit=10`
      )
        .then((response) => {
          if (!response) throw setError(error);
          setSearchInput("");
          setData(response.data.results);
          setError(null);
          // console.log(response.data.results);
        })
        .catch((err) => {
          setError(err.message);
          setData(null);
        });
      return () => {
        clearInterval(id);
      };
    };

    fetchPokemon();
  }, [searchInput, error]);

  return (
    <>
      <div className="mx-10 my-10 ">
        <BiSearch
          className="fill-slate-700 z-50 absolute my-4 
        mx-6 w-7 h-7"
        />
        <input
          type="search"
          placeholder="Search Pokemons, Movies, Ability etc."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="border-2 flex flex-wrap absolute focus:ring-2 focus:ring-indigo-300 focus:outline-none caret-slate-400
          placeholder:text-slate-400 placeholder:font-medium block 
          w-[26em] px-14 placeholder:text-base
          rounded-full h-14 text-slate-800 bg-gray-200 shadow-sm 
          border-gray-200"
          id="search-pokemon"
        />
      </div>

      <Listing />

      {loading && (
        <BeatLoader
          className="absolute inset-y-96 inset-x-20 "
          size={15}
          color="#ADA2FF"
        />
      )}
      {error && (
        <h3 className="relative font-medium top-26 mx-10 text-center w-68 text-rose-600">{`Something went wrong! ${error}`}</h3>
      )}
      <ul>
        {/* {!loading && data && data.length > 0
          ? data.map((pokemon) => {
              return <li key={pokemon.id}>{pokemon.url}</li>;
            })
          : "no pokemon"} */}
      </ul>
    </>
  );
};

export default Search;
