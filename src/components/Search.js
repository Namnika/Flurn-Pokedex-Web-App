import { useState, useEffect } from "react";
import axios from "axios";
import { BiSearch } from "react-icons/bi";
import { Button, Space } from "antd";

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
      }, 3000);
      //loader timer

      const response = await axios(
        `https://pokeapi.co/api/v2/pokedex/${searchInput}?limit=10`
      )
        .then((response) => {
          if (!response) throw setError(error);
          setData(response.data.results);
          setError(null);
          console.log(response.data.results);
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
      <div className="mx-10 my-10  ">
        <BiSearch
          className="fill-slate-700 z-50 absolute my-4 
        mx-6 w-7 h-7"
        />
        <input
          type="search"
          placeholder="Search Pokemons, Movies, Ability etc."
          defaultValue={searchInput}
          className="border-2 flex flex-wrap absolute focus:ring-2 focus:ring-indigo-300 focus:outline-none caret-slate-400
          placeholder:text-slate-400 placeholder:font-medium block 
          w-[26em] px-14 placeholder:text-base
          rounded-full h-14 bg-gray-200 shadow-sm 
          border-gray-200"
          id="search-pokemon"
        />
        <Button
          onClick={(e) => setSearchInput(e.target.value)}
          className=" py-6 border-none drop-shadow-lg shadow-md shadow-indigo-200 focus:ring-1 focus:ring-indigo-300
           px-14 rounded-md
             -right-[33em]
            bg-indigo-600/90 z-50"
        >
          <span
            className="text-lg tracking-wide 
            top-2.5 left-8 absolute  font-semibold
              text-slate-50"
          >
            Search
          </span>
        </Button>
      </div>

      {loading && <h3 className="text-3xl font-medium">Loading... </h3>}
      <ul>
        {error && (
          <h3 className="text-rose-600">{`Something went wrong! ${error}`}</h3>
        )}
        {!loading && data && data.length > 0
          ? data.map((pokemon) => {
              return <li key={pokemon.id}>{pokemon.url}</li>;
            })
          : "no pokemon"}
      </ul>
    </>
  );
};

export default Search;
