import { Container, Flex, Spacer, Text, Heading } from "@chakra-ui/react";
import { IoChevronBack } from "react-icons/io5";
import { TbHeart } from "react-icons/tb";
import { Link, useNavigate, useLocation } from "react-router-dom";

const BookmarkScreen = () => {
  return (
    <>
      <div>
        <Container maxW="container.lg" px={10} pt={10}>
          <Flex alignItems="center">
            <Link to="/">
              <IoChevronBack size={30} className="mt-14 text-slate-800/90 " />
            </Link>
            <Spacer />
            <Heading
              className="text-slate-800/90 "
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
          {/* map all bookmarks pokemon */}
          <div className="grid  mt-20 ml-10 gap-5 grid-flow-col grid-cols-3">
            <div className="shadow-lg  text-white rounded-lg bg-slate-500 py-16 w-64 h-40">
              <Flex>
                <button>
                  <TbHeart
                    size={20}
                    className=" stroke-2 ml-52  -mt-9 hover:fill-white/90 hover:scale-[1.11] stroke-white/90 ml-5"
                  />
                </button>
              </Flex>
              <Flex>
                <Heading ml={4} mt={9} size="md" as="h3" align="start">
                  Pokemon Name
                </Heading>
              </Flex>
              <Text align="start" ml={4} className="text-sm text-white/90">
                desc
              </Text>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BookmarkScreen;
