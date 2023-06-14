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
      }, 5000);
      //loader timer

      const response = await axios(
        `https://pokeapi.co/api/v2/pokemon-form/${searchInput}/?limit=10`
      )
        .then((response) => {
          if (!response) throw setError(error);
          setSearchInput("");
          setData(response.data);
          setError(null);
          console.log(response);
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
      {searchInput ? (
        <div className="text-slate-500/70  overflow-y-scroll absolute z-50 backdrop-blur-md bg-white/30 mt-28 mx-16 h-64 w-[25em] bg-white ">
          {loading && (
            <BeatLoader
              className="absolute top-32 left-44 md:left-80  "
              size={15}
              color="#4338ca"
            />
          )}
          {!loading && error && (
            <h3 className="absolute md:left-44 left-4 w-5/6 font-medium items-center text-center text-rose-600">{`Something went wrong! ${error}`}</h3>
          )}

          <ul className="mx-10">
            {!loading && data && data.length > 0
              ? data.map((pokemon) => {
                  return (
                    <li
                      className="cursor-pointer hover:text-indigo-800"
                      key={pokemon.id}
                    >
                      {pokemon.name}
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      ) : null}
      <Listing loader={loading} error={error} />
    </>
  );
};

export default Search;
