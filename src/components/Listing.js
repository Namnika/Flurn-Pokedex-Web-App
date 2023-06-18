import { Space, Tag } from "antd";
import { Heading, Container, Text, Flex, Spacer } from "@chakra-ui/react";
import { IoChevronBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const Listing = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonAllData, setPokemonAllData] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [hasMore, setHasMore] = useState(true);
  const [newPokemonData, setNewPokemonData] = useState(
    pokemonAllData.slice(0, 10)
  );

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAbilities = async () => {
      try {
        // fetching  pokemons data as per the cond.
        const response = await Promise.all(
          pokemonData.map((t) => axios(t.url))
        );
        // storing in localstorage
        setPokemonAllData(response.map((res) => res.data));
        window.localStorage.setItem(
          "alldata",
          JSON.stringify(response.map((res) => res.data.abilities))
        );
      } catch (error) {
        setError(error.response);
      }
    };
    fetchAbilities();

    if (window.localStorage !== undefined) {
      const data = window.localStorage.getItem("pokemon");
      data !== null ? setPokemonData(JSON.parse(data)) : null;
    }
    //  infinite scroll
    window.addEventListener("scroll", handleInfiniteScroll);

    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, []);

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
          {pokemonAllData.map((poke, index) => {
            return (
              <>
                <Link key={index} to={`/details/${poke.species.name}`}>
                  <div
                    onClick={() =>
                      navigate(`/details/${poke.species.name}`, {
                        state: { pokemonAllData }
                      })
                    }
                    key={index}
                    className={`rounded-lg shadow-lg  bg-no-repeat
               bg-right-bottom bg-blend-darken bg-emerald-300
                hover:opacity-90
                 bg-[url(${poke.sprites.front_shiny})]
                  py-16 w-64 h-44`}
                  >
                    <Flex>
                      <h2 className="-mt-10 ml-5 text-2xl text-white/90  capitalize font-semibold">
                        {poke.name}
                      </h2>
                      <Spacer />
                      <Text
                        className={`text-white/90 -mt-7 mr-9 font-medium before:content-['#00']`}
                      >
                        {index + 1}
                      </Text>
                    </Flex>
                    <div className="mr-16  -space-x-2">
                      <Space
                        className="grid gap-2 mr-3 -mt-3  grid-cols-1   justify-between order-1 -space-y-5 items-start"
                        size={[0, "small"]}
                        wrap
                      >
                        {/* <div className="flex flex-row space-x-5 mx-0 flex-wrap"> */}
                        {poke.abilities.map((tags, index) => (
                          <Tag
                            key={index}
                            id={index}
                            className="border-0 my-3 px-2  py-1 mx-5 rounded-full bg-white/25 text-white/90 text-sm"
                            color="blue"
                          >
                            {tags.ability.name}
                          </Tag>
                        ))}
                        {/* </div> */}
                      </Space>
                    </div>
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
