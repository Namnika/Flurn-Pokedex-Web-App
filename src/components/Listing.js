import { Heading, Container } from "@chakra-ui/react";
import { Space, Tag, Tooltip } from "antd";
import { IoChevronBack } from "react-icons/io5";
import { TbHeart } from "react-icons/tb";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Listing = () => {
  return (
    <>
      {/* listing all pokemons in grid format design */}
      <div className="bg-green-200">
        <Container maxW="container.lg" mt={10}>
          <Heading align="center" mt={24} as="h3" size="xl">
            Pokédex
          </Heading>
          {/* routing to go back */}
          <Link to="/">
            <IoChevronBack
              size={30}
              className="text-gray-400  hover:text-gray-700"
            />
          </Link>

          <div
            className="mt-24 grid text-start
          gap-x-8 grid-flow-col gap-y-4 grid-cols-5"
          >
            {/* mapping all pokemons */}
            <Link to="/details/pokemon-name">
              <div className="rounded-lg shadow-lg  bg-no-repeat bg-left-top bg-blend-darken hover:opacity-90 bg-[url('https://images.unsplash.com/photo-1642534270237-ae57b321c5bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBva2Vtb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60')] py-16 bg-slate-200 w-64 h-40">
                <h2 className="-mt-10 ml-5 text-xl font-medium">
                  Pokemon Name
                </h2>
                <Space
                  className="flex flex-col items-start"
                  size={[0, "small"]}
                  wrap
                >
                  <Tag className="border-0 ml-5 my-2 text-sm" color="blue">
                    Pokemon tag
                  </Tag>
                  <Tooltip
                    title="Bookmark"
                    placement="leftBottom"
                    color="#4338ca"
                  >
                    <button>
                      <TbHeart
                        size={20}
                        className="mt-6 hover:fill-indigo-700 hover:scale-[1.11] text-indigo-700 ml-5"
                      />
                    </button>
                  </Tooltip>
                </Space>
              </div>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

// https://images.unsplash.com/photo-1642534270237-ae57b321c5bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBva2Vtb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60

export default Listing;
