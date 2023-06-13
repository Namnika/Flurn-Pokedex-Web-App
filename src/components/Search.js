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
      <div className="   mx-10 my-10 ">
        <input
          type="search"
          placeholder="Search Pokemons, Movies, Ability etc."
          defaultValue={searchInput}
          className="border-2 placeholder:text-slate-400 block w-96 rounded-full h-16 bg-gray-300 border-gray-200"
          id="search-pokemon"
        />
      </div>

      <button
        onClick={(e) => setSearchInput(e.target.value)}
        type="submit"
        className=" p-3 flex flex-wrap bg-indigo-200"
      >
        Search
      </button>
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
