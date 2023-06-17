import { Space, Tag } from "antd";
import { Heading, Container, Text, Flex, Spacer } from "@chakra-ui/react";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const Listing = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonAllData, setPokemonAllData] = useState([]);
  const [error, setError] = useState({});
  const [hasMore, setHasMore] = useState(true);
  const [newPokemonData, setNewPokemonData] = useState(
    pokemonData.slice(0, 10)
  );
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAbilities = async () => {
      try {
        // fetching  pokemons data as per the cond.
        const response = await Promise.all(
          pokemonData.map((t) => axios.get(t.url))
        );
        // storing in localstorage
        setPokemonAllData(response.map((res) => res.data));
        localStorage.setItem(
          "pokemonalldata",
          JSON.stringify(response.map((res) => res.data))
        );
        //  infinite scroll
      } catch (error) {
        setError(error.response);
      }
    };
    fetchAbilities();

    window.addEventListener("scroll", handleInfiniteScroll);

    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, []);

  if (window.localStorage !== undefined) {
    const data = window.localStorage.getItem("pokemon");
    data !== null ? setPokemonData(JSON.parse(data)) : null;
  }

  function handleInfiniteScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight || hasMore ? (
        <BeatLoader />
      ) : null
    ) {
      const newarr = pokemonAllData.slice(0, 10).map((t) => {
        return t;
      });
      setNewPokemonData((prev) => [...prev, newarr]);
    }
  }

  return (
    <>
      <Container maxW="container.lg" mt={10}>
        <Heading align="center" mt={24} as="h3" size="xl">
          Pokédex
        </Heading>
        <Link to="/">
          <IoChevronBack size={30} className="text-slate-800/90" />
        </Link>

        <div
          className="mt-24 grid  text-start
            gap-4 gap-y-7 mx-5 justify-center justify-items-center  grid-cols-3"
        >
          {newPokemonData.map((poke, index) => {
            return (
              <>
                <Link to={`/details/poke-name`}>
                  <div
                    className="rounded-lg shadow-lg  bg-no-repeat
               bg-left-top bg-blend-darken
                hover:opacity-90
                 bg-[url('https://images.unsplash.com/photo-1642534270237-ae57b321c5bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBva2Vtb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60')]
                  py-16 w-64 h-40"
                  >
                    <Flex>
                      <h2 className="-mt-10 ml-5 text-xl text-white/90 font-medium">
                        {poke.name}
                      </h2>
                      <Spacer />
                      <Text className={`text-gray-700 before:content-['#00']`}>
                        {index + 1}
                      </Text>
                    </Flex>
                    <Space
                      className="flex flex-col items-start"
                      size={[0, "small"]}
                      wrap
                    >
                      {/* map all tags */}
                      {poke.abilities.map((tags) => (
                        <Tag
                          key={index}
                          id={index}
                          className="border-0 my-3 px-2 py-1 mx-5 rounded-full bg-white/25 text-white/90 text-sm"
                          color="blue"
                        >
                          {tags.ability.name}
                        </Tag>
                      ))}
                    </Space>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Listing;
