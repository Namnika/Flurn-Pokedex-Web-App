import { Container, Flex, Spacer, Text, Heading } from "@chakra-ui/react";
import { IoChevronBack } from "react-icons/io5";
import { TbHeart } from "react-icons/tb";
import { Link } from "react-router-dom";
import { removeFavorite } from "../pokemonReducer";
import { Space, Tag } from "antd";
import cardReducer from "../pokemonReducer";
import { useReducer } from "react";

const BookmarkScreen = () => {
  const removeCardHandler = (card) => {
    dispatch(removeFavorite(card));
  };

  const storageKey = "Favorites";
  const [card, dispatch] = useReducer(
    cardReducer,
    [],
    (initial) => JSON.parse(localStorage.getItem(storageKey)) || initial
  );

  return (
    <>
      <Container maxW="container.lg" px={10} pt={10}>
        <Flex alignItems="center">
          <Link to="/">
            <IoChevronBack size={30} className="mt-14 text-slate-800/90 " />
          </Link>
          <Spacer />
          <Heading
            className="text-slate-800/90"
            align="end"
            mt={14}
            as="h3"
            size="xl"
          >
            Your Favourite Pokemons
          </Heading>
        </Flex>
        <Text mt={4} align="end" className="text-gray-500" fontSize="md">
          Find all your pokemons you have liked!
        </Text>
        <Spacer />

        <div className="grid  mt-20 ml-10 gap-5 grid-flow-col grid-cols-3">
          {/* map all bookmarks pokemon */}
          {card.map((favpoke, id) => {
            return (
              <div
                className="rounded-lg shadow-lg  bg-no-repeat
               bg-left-top bg-blend-darken
                hover:opacity-90
                 bg-[url('https://images.unsplash.com/photo-1642534270237-ae57b321c5bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBva2Vtb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60')]
                  py-16 w-64 h-40"
              >
                <Flex>
                  <h2 className="-mt-10 ml-5 text-xl text-white/90 font-medium">
                    {favpoke.name}
                  </h2>
                  <Spacer />
                  <Text className={`text-gray-700 before:content-['#00']`}>
                    {id + 1}
                  </Text>
                </Flex>
                <TbHeart
                  key={id}
                  onClick={() => removeCardHandler(card)}
                  size={20}
                  className="cursor-pointer stroke-2
                 hover:fill-white/90 fill-white
                 hover:scale-[1.11]
                  stroke-white/90 ml-5"
                />
                <Space
                  className="flex flex-col items-start"
                  size={[0, "small"]}
                  wrap
                >
                  {favpoke.abilities.map((tags) => (
                    <Tag
                      key={id}
                      id={id}
                      className="border-0 my-3 px-2 py-1 mx-5 rounded-full bg-white/25 text-white/90 text-sm"
                      color="blue"
                    >
                      {tags.ability.name}
                    </Tag>
                  ))}
                </Space>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default BookmarkScreen;
