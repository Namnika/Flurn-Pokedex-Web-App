import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const response = await axios(
          `https://pokeapi.co/api/v2/pokedex/${searchInput}?limit=10`
        );
        // console.log(response.data.results);
        setData(response.data.results);
      } catch (err) {
        setError(err.message); //err
      }
      setLoading(false);
    };

    fetchPokemon();
  }, [searchInput]);

  return (
    <>
      <h1 className="font-medium text-3xl text-indigo-600">Pokédex</h1>
      <label htmlFor="search-pokemon" className="text-lg">
        Which Pokemon do you want?
      </label>
      <input
        type="search"
        defaultValue={searchInput}
        className="border-2 border-slate-600"
        id="search-pokemon"
      />
      <button
        onClick={(e) => setSearchInput(e.target.value)}
        type="submit"
        className=" p-3 flex flex-wrap bg-indigo-200"
      >
        Search
      </button>

      <ul>
        {loading ? (
          <h3>Loading... </h3>
        ) : (
          data.length &&
          data.map((pokemon) => {
            return <li key={pokemon.id}>{pokemon.name}</li>;
          })
        )}
      </ul>
    </>
  );
};

export default Search;
