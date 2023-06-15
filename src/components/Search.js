// searching and filtering pokemons
import { useState, useEffect } from "react";
import axios from "axios";
import { BiSearch } from "react-icons/bi";
import BeatLoader from "react-spinners/BeatLoader";
import { Button, Heading } from "@chakra-ui/react";
import {
  Card,
  Stack,
  Image,
  Text,
  CardBody,
  StackDivider
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Search = () => {
  const allQueries = [
    "ability",
    "characteristic",
    "evolution-chain",
    "generation",
    "growth-rate",
    "pokemon",
    "pokedex",
    "pokemon-species",
    "pokemon-shape",
    "pokemon-habitat",
    "version",
    "pokemon-color",
    "pokemon-form",
    "version-group",
    "nature",
    "location"
  ];

  const [pokeData, setPokeData] = useState(allQueries);
  const [allData, setAllData] = useState({
    abilities: [],
    characteristic: [],
    evolutionchain: [],
    generation: [],
    growthrate: [],
    pokemon: [],
    pokedex: [],
    pokemonspecies: [],
    pokemonshape: [],
    pokemonhabitat: [],
    version: [],
    pokemoncolor: [],
    pokemonform: [],
    versiongroup: [],
    nature: [],
    location: []
  });

  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const fetchPokemon = async () => {
    try {
      const response = await Promise.all(
        pokeData.map((endpoint) =>
          axios
            .get("https://pokeapi.co/api/v2/" + endpoint)
            .then(
              ([
                { data: ability },
                { data: characteristic },
                { data: evolutionchain },
                { data: generation },
                { data: growthrate },
                { data: pokemon },
                { data: pokedex },
                { data: pokemonspecies },
                { data: pokemonshape },
                { data: pokemonhabitat },
                { data: version },
                { data: pokemoncolor },
                { data: pokemonform },
                { data: versiongroup },
                { data: nature },
                { data: location }
              ]) => {
                setAllData({
                  abilities: ability,
                  characteristic: characteristic,
                  evolutionchain: evolutionchain,
                  generation: generation,
                  growthrate: growthrate,
                  pokemon: pokemon,
                  pokedex: pokedex,
                  pokemonspecies: pokemonspecies,
                  pokemonshape: pokemonshape,
                  pokemonhabitat: pokemonhabitat,
                  version: version,
                  pokemoncolor: pokemoncolor,
                  pokemonform: pokemonform,
                  versiongroup: versiongroup,
                  nature: nature,
                  location: location
                });
              }
            )
        )
      );
      if (!response) throw setError(error);
      setSearchInput("");
      setPokeData(response.data);
      setError(null);
      console.log(response);
    } catch (err) {
      setError(err.message);
      setPokeData(null);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchPokemon();
    const id = setInterval(() => {
      setLoading(false);
    }, 5000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const filtersButton = [
    {
      id: 1,
      color: "teal-500",
      shadowColor: "teal-400",
      path: "/pokemon-listing/pokédex",
      name: "Pokédex"
    },
    {
      id: 2,
      color: "rose-500",
      shadowColor: "rose-400",
      path: "/pokemon-listing/movies",
      name: "Movies"
    },
    {
      id: 3,
      color: "indigo-500",
      shadowColor: "indigo-400",
      path: "/pokemon-listing/abilities",
      name: "Abilities"
    },
    {
      id: 4,
      color: "sky-500",
      shadowColor: "sky-400",
      path: "/pokemon-listing/items",
      name: "Items"
    },
    {
      id: 5,
      color: "amber-500",
      shadowColor: "[#FFC26F]",
      path: "/pokemon-listing/locations",
      name: "Locations"
    },
    {
      id: 6,
      color: "amber-900",
      shadowColor: "amber-800",
      path: "/pokemon-listing/habitat",
      name: "Habitat"
    }
  ];

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
        <div className="text-slate-500/70 overscroll-contain absolute z-50 backdrop-blur-md bg-white/30 mt-28 mx-16 h-64 w-[25em] bg-white ">
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
            {!loading && pokeName && pokeName.length > 0
              ? pokeName.map((pokemon) => {
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
      <div className="grid max-w-[28em] relative my-36 mx-10 grid-cols-2 gap-4">
        {filtersButton.map((filter) => {
          return (
            <Link to={filter.path}>
              <button
                className={`rounded-xl shadow-lg shadow-${filter.shadowColor} text-white
         font-medium text-start  px-6 text-lg 
         bg-${filter.color} py-4`}
              >
                {filter.name}
              </button>
            </Link>
          );
        })}
      </div>
      <div className="mx-10 mt-72 relative items-center flex  md:flex-wrap flex-wrap">
        <h3 className="font-black text-xl  text-slate-900/90 ">Pokemon News</h3>
        <Button
          className=" absolute ml-36 md:-right-[30em] -right-32"
          colorScheme="purple"
          variant="ghost"
        >
          View All
        </Button>

        {/* listing news */}
        <div>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="none"
            mt={5}
          >
            <Stack divider={<StackDivider />} spacing="5">
              <CardBody>
                <Heading
                  className="text-slate-800/90"
                  fontWeight="extrabold"
                  size="md"
                >
                  The perfect latte
                </Heading>
                <Text py="2" className="text-slate-500/80" fontSize="sm">
                  Caffè latte is a coffee beverage of Italian origin made with
                  espresso and steamed milk.
                </Text>
              </CardBody>
            </Stack>
            <Image
              borderRadius="10px"
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Search;
