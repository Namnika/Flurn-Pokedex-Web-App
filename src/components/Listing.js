import { Space, Tag } from "antd";
import { Heading, Container, Text, Flex, Spacer } from "@chakra-ui/react";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const Listing = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState({});

  const fetchAbilities = async () => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    let url = "";
    try {
      await sleep(7000);
      pokemonData.map((i) => setUrls(i.url.slice(0, -6)));

      await sleep(7000);
      [...Array(1281).keys()].map(async (t) => {
        await sleep(7000);
        console.log(urls[t] + t);
        // const res = await axios(urls[t] + t);
        // setAbilities(res);
        // console.log(res);
      });
    } catch (error) {
      setError(error.response);
    }
  };

  useEffect(() => {
    fetchAbilities();
    if (window.localStorage !== undefined) {
      const data = window.localStorage.getItem("pokemon");
      data !== null ? setPokemonData(JSON.parse(data)) : null;
    }
  }, []);
  console.log(urls);
  console.log(abilities);

  return (
    <>
      {/* background design */}
      <div>
        <Container maxW="container.lg" mt={10}>
          <Heading align="center" mt={24} as="h3" size="xl">
            Pokédex
          </Heading>
          {/* routing to go back */}
          <Link to="/">
            <IoChevronBack size={30} className="text-slate-800/90" />
          </Link>

          <div
            className="mt-24 grid  text-start
            gap-4 gap-y-7 mx-5 justify-center justify-items-center  grid-cols-3"
          >
            {/* mapping all pokemons */}
            {pokemonData.map((poke, index) => {
              return (
                <>
                  <Link to={`/details/${poke.name}`}>
                    <div
                      key={index}
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
                        {/* add id like this: #00{id-no.} */}
                        <Spacer />
                        <Text
                          className={`text-gray-700 before:content-['#00']`}
                        >
                          {index + 1}
                        </Text>
                      </Flex>
                      <Space
                        className="flex flex-col items-start"
                        size={[0, "small"]}
                        wrap
                      >
                        {/* mapp all tags */}
                        {/* {abilities.map((ability) => ( */}
                        <Tag
                          className="border-0 my-3 px-2 py-1 mx-5 rounded-full bg-white/25 text-white/90 text-sm"
                          color="blue"
                        >
                          tag
                        </Tag>
                        {/* ))} */}
                      </Space>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

// https://images.unsplash.com/photo-1642534270237-ae57b321c5bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBva2Vtb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60

export default Listing;
