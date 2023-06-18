import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import BeatLoader from "react-spinners/BeatLoader";
import { Button, Heading } from "@chakra-ui/react";
import {
  Card,
  Stack,
  Image,
  Divider,
  Text,
  CardBody,
  StackDivider
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Search = ({ pokemonNames, error, includes }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchShow, setSearchShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    setLoading(true);
    const id = setInterval(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
      setErr(false);
    } else {
      setSearchShow(true);
    }
  };

  const filteredNames = pokemonNames.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  function searchList() {
    if (searchShow) {
      return (
        <div
          className="text-slate-800 font-medium 
         overflow-y-scroll absolute z-50 rounded-lg shadow-lg border-gray-300 border-[1px]
         backdrop-blur-lg bg-white/60 mt-20 mx-16 h-72 w-[25em] bg-white "
        >
          {loading && (
            <BeatLoader
              className="absolute top-32 left-44 md:left-80  "
              size={15}
              color="#4338ca"
            />
          )}

          {filteredNames.length <= 0 && (
            <h3
              className={`absolute md:left-44 
  left-4 w-5/6 items-center 
  text-center text-rose-600`}
            >
              {`Something went wrong! ${error.response}`}
            </h3>
          )}
          {error && (
            <ul className={`mx-10  my-5`}>
              <SearchList filteredNames={filteredNames} />
            </ul>
          )}
        </div>
      );
    }
  }

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
          onChange={handleChange}
          className="border-2 flex flex-wrap absolute focus:ring-2 focus:ring-indigo-300 focus:outline-none caret-slate-400
          placeholder:text-slate-400 placeholder:font-medium block 
          w-[26em] px-14 placeholder:text-base
          rounded-full h-14 text-slate-800 bg-gray-200 shadow-sm 
          border-gray-200"
          id="search-pokemon"
        />
      </div>

      {searchList()}
      <div className="grid max-w-[28em] relative my-36 mx-10 grid-cols-2 gap-4">
        {filtersButton.map((filter, index) => {
          return (
            <>
              <Link to={filter.path}>
                <button
                  key={index}
                  className={`rounded-xl shadow-lg shadow-${filter.shadowColor} text-white
         font-medium text-start  px-6 text-lg 
         bg-${filter.color} py-4`}
                >
                  {filter.name}
                </button>
              </Link>
            </>
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
                  Pokémon the Movie 2000
                </Heading>
                <Text py="2" className="text-slate-500/80" fontSize="sm">
                  Pocket Monsters the Movie: The Phantom Pokémon – Lugia's
                  Explosive Birth
                </Text>
              </CardBody>
            </Stack>
            <Image
              borderRadius="10px"
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="data:image/jpeg;base64,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"
              alt="Caffe Latte"
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Search;

export function SearchList({ filteredNames }) {
  const filtered = filteredNames.map((pokemon) => (
    <>
      <li className="cursor-pointer py-3 hover:text-slate-800">
        {pokemon.name}
      </li>
      <Divider borderColor="#94a3b8" />
    </>
  ));

  return filtered;
}
