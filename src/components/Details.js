import {
  Heading,
  Container,
  Text,
  Flex,
  Spacer,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from "@chakra-ui/react";
import axios from "axios";
import { IoChevronBack } from "react-icons/io5";
import { Space, Tag } from "antd";
import { TbHeart } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import cardReducer from "../pokemonReducer";
const storageKey = "Favorites";

export default function Details() {
  const [favorite, setFavorite] = useState(false);
  const [error, setError] = useState({});
  // console.log(pokemonDetails);
  const location = useLocation();

  const [dispatch] = useReducer(
    cardReducer,
    [],
    (initial) => JSON.parse(localStorage.getItem(storageKey)) || initial
  );
  const [pokeAbilities, setAbilities] = useState([]);
  // console.log(pokeAbilities);
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    if (window.localStorage !== undefined) {
      const data = window.localStorage.getItem("alldata");
      data !== null ? setAbilities(JSON.parse(data)) : null;
    }
  }, []);

  const addCardHandler = (cardToAdd) => {
    dispatch({ type: "ADD" });
    setFavorite(true);
  };
  const removeCardHandler = (cardToRemove) => {
    dispatch({ type: "REMOVE" });
    setFavorite(false);
  };

  return (
    <>
      <div
        key={location.state.id}
        className={`bg-contain bg-indigo-200 opacity-95 bg-no-repeat bg-blend-darken bg-center drop-shadow-2xl bg-fixed 
       h-96 rounded-b-3xl w-full bg-[url(${location.state.img})]`}
      >
        <Container maxW="container.md" px={10} pt={10}>
          <Flex>
            <Heading
              className="text-indigo-600/90 font-bold"
              align="start"
              mt={24}
              as="h3"
              size="2xl"
            >
              {location.state.name}
            </Heading>

            <Spacer />
            <Text
              className={`mt-[6.5rem] text-indigo-600/90 before:content-['#00']`}
              fontSize="lg"
            >
              {location.state.id}
            </Text>
          </Flex>

          <Space className="flex flex-row items-start" size={[0, "small"]} wrap>
            {location.state.abilities.map((poke) => (
              <Tag
                key={poke.id}
                className="border-0 my-3 space-x-3 px-2 py-1  rounded-full bg-indigo-400/25 text-indigo-600/90 text-sm"
              >
                {poke.ability.name}
              </Tag>
            ))}
          </Space>

          <Flex mt={-36} minWidth="max-content" alignItems="center" gap="2">
            <Link to="/pokemon-listing">
              <IoChevronBack size={30} className="text-black/90" />
            </Link>
            <Spacer />

            {/* add or remove card only dispatching actions should go here*/}

            <TbHeart
              key={location.state.id}
              onClick={() => addCardHandler()}
              size={20}
              className={`cursor-pointer stroke-2
                 hover:fill-indigo-600/90
                 ${favorite ? "fill-indigo-600" : "fill-none"}
                 hover:scale-[1.11]
                  stroke-indigo-600/90 ml-5`}
            />
          </Flex>
          <Text mt={36} className="text-indigo-600 font-medium">
            "The quick brown fox jumps over the lazy dog" is an English-language
            pangram—a sentence that contains all of the letters of the English
            alphabet. Owing to its existence, Chakra was created.
          </Text>
          <Spacer mt={75} />
          <Tabs className=" mx-5 text-gray-400 md:mt-44 mt-38 font-semibold">
            <TabList>
              <Tab
                _selected={{
                  color: "black",
                  borderWidth: "3px",
                  borderBottomColor: "black"
                }}
                className=" hover:text-black"
              >
                <Heading size="sm" as="h4">
                  Experience
                </Heading>
              </Tab>
              <Tab
                _selected={{
                  color: "black",
                  borderWidth: "3px",
                  borderBottomColor: "black"
                }}
                className="hover:text-black"
              >
                <Heading size="sm" as="h4">
                  Moves
                </Heading>
              </Tab>
              <Tab
                _selected={{
                  color: "black",
                  borderWidth: "3px",
                  borderBottomColor: "black"
                }}
                className="hover:text-black"
              >
                <Heading size="sm" as="h4">
                  Held Items
                </Heading>
              </Tab>
              <Tab
                _selected={{
                  color: "black",
                  borderWidth: "3px",
                  borderBottomColor: "black"
                }}
                className="hover:text-black"
              >
                <Heading size="sm" as="h4">
                  Height
                </Heading>
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Heading size="sm">
                  Base Experience:{" "}
                  <Text className="text-gray-500">{location.state.exp}</Text>
                </Heading>
              </TabPanel>
              <TabPanel>
                <Heading size="sm">
                  Moves:
                  <ul className="grid grid-cols-2 gap-2">
                    {location.state.moves.map((i) => (
                      <Text className="text-slate-500 text-gray-500">
                        {i.move.name}
                      </Text>
                    ))}
                  </ul>
                </Heading>
              </TabPanel>
              <TabPanel>
                <Heading size="sm">
                  Held Items:
                  <ul className="grid grid-cols-2 gap-2">
                    {location.state.held_items.map((i) => (
                      <Text className="text-slate-500 text-gray-500">
                        {i.item.name}
                      </Text>
                    ))}
                  </ul>
                </Heading>
              </TabPanel>
              <TabPanel>
                <Heading size="sm">
                  Height:{" "}
                  <Text className="text-gray-500">{location.state.height}</Text>
                </Heading>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </div>
    </>
  );
}
