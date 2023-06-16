import { Heading, Container, Text, Flex, Spacer } from "@chakra-ui/react";
import { Space, Tag } from "antd";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Listing = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    if (window.localStorage !== undefined) {
      const data = window.localStorage.getItem("pokemon");
      data !== null ? setPokemonData(JSON.parse(data)) : null;
    }
  }, []);

  console.log(pokemonData);

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
                        <Text className={`before:content-['#00']`}>
                          {index + 1}
                        </Text>
                      </Flex>
                      <Space
                        className="flex flex-col items-start"
                        size={[0, "small"]}
                        wrap
                      >
                        {/* mapp all tags */}
                        <Tag
                          className="border-0 my-3 px-2 py-1 mx-5 rounded-full bg-white/25 text-white/90 text-sm"
                          color="blue"
                        >
                          Pokemon tag
                        </Tag>
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
