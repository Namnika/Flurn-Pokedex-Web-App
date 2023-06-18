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
  const [pokemonDetails, setPokemonDetails] = useState([]);
  // console.log(pokemonDetails);
  const location = useLocation();
  pokemonDetails.map((poke) => {
    const name = poke.name;
  });
  // console.log(name)

  const [dispatch] = useReducer(
    cardReducer,
    [],
    (initial) => JSON.parse(localStorage.getItem(storageKey)) || initial
  );
  const [pokeAbilities, setAbilities] = useState([]);
  // console.log(pokeAbilities);
  const fetchDetails = async () => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    try {
      await sleep(7000);
      const res = await axios("https://pokeapi.co/api/v2/pokemon-species/");

      await sleep(7000);
      const response = await Promise.all(
        res.data.results.map((t) => axios.get(t.url + "?limit100&offset=0"))
      );
      setPokemonDetails(response.map((i) => i.data));
    } catch (err) {
      setError(err.message.response);
    }
  };

  useEffect(() => {
    fetchDetails();
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

          <Space className="flex flex-col items-start" size={[0, "small"]} wrap>
            {/* {location.state.abilities.map((tag) => ( */}
            <Tag
              // key={tag.id}
              className="border-0 my-3 px-2 py-1  rounded-full bg-indigo-400/25 text-indigo-600/90 text-sm"
            >
              hfg
            </Tag>
            {/* ))} */}
          </Space>

          <Flex mt={-36} minWidth="max-content" alignItems="center" gap="2">
            <Link to="/pokemon-listing">
              <IoChevronBack size={30} className="text-black/90" />
            </Link>
            <Spacer />

            {/* add or remove card only dispatching actions should go here*/}

            <TbHeart
              // key={index}
              // onClick={() => addCardHandler()}
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
          <Tabs className="text-gray-400 md:mt-44 mt-38 font-semibold">
            <TabList>
              <Tab
                _selected={{ color: "black", borderBottomColor: "black" }}
                className="hover:text-black"
              >
                One
              </Tab>
              <Tab
                _selected={{ color: "black", borderBottomColor: "black" }}
                className="hover:text-black"
              >
                Two
              </Tab>
              <Tab
                _selected={{ color: "black", borderBottomColor: "black" }}
                className="hover:text-black"
              >
                Three
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </div>
    </>
  );
}
