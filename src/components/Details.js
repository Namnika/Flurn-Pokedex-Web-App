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
import { IoChevronBack } from "react-icons/io5";
import { Space, Tag } from "antd";
import { TbHeart } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useReducer } from "react";
import cardReducer, { addFavorite, removeFavorite } from "../pokemonReducer";
const storageKey = "Favorites";

export default function Details() {
  const [favorite, setFavorite] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const [dispatch] = useReducer(
    cardReducer,
    [],
    (initial) => JSON.parse(localStorage.getItem(storageKey)) || initial
  );

  const addCardHandler = (cardToAdd) => {
    dispatch(addFavorite(cardToAdd));
    setFavorite(true);
  };
  // const removeCardHandler = (cardToRemove) => {
  //   dispatch(removeFavorite(cardToRemove));
  //   setFavorite(false);
  // };

  return (
    <>
      <div
        key={location.state.id}
        style={{ backgroundPositionY: "-8em" }}
        className={`bg-contain bg-indigo-200 opacity-95 bg-no-repeat bg-blend-darken bg-top drop-shadow-2xl bg-fixed 
       h-96 rounded-b-3xl w-full bg-[url(${location.state.img})]`}
      >
        <Container maxW="container.md" px={10} pt={10}>
          <Flex>
            <Heading
              className="text-indigo-600/90 capitalize font-bold"
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
            <div
              onClick={() => {
                navigate("/pokemon-listing");
              }}
            >
              <IoChevronBack
                size={30}
                className="text-black/90 cursor-pointer"
              />
            </div>
            <Spacer />

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

          <Spacer mt={50} />
          <Tabs className="py-24 mx-5 text-gray-400 md:mt-64 mt-80 font-semibold">
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
                  Types
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
                <Heading size="sm" className=" flex inline-flex">
                  &bull; Base Experience:{" "}
                  <Text className="text-gray-500 px-3">
                    {" "}
                    {location.state.exp}
                  </Text>
                </Heading>
              </TabPanel>
              <TabPanel>
                <Heading size="sm">
                  &bull; Moves:
                  <ul className="grid grid-cols-3 px-5 py-3 gap-2">
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
                  &bull; Types:
                  <ul className="grid grid-cols-3 px-5 py-3 gap-2">
                    {location.state.types.map((i) => (
                      <Text className="text-slate-500 text-gray-500">
                        {i.type.name}
                      </Text>
                    ))}
                  </ul>
                </Heading>
              </TabPanel>
              <TabPanel>
                <Heading size="sm" className=" flex inline-flex">
                  &bull; Height:{" "}
                  <Text className="text-gray-500 px-3">
                    {location.state.height}
                  </Text>
                </Heading>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </div>
    </>
  );
}
