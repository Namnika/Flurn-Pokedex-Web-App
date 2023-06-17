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
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Details() {
  return (
    <>
      <div
        className="bg-cover opacity-95 bg-no-repeat bg-blend-darken bg-center drop-shadow-2xl bg-fixed 
      h-96 rounded-b-3xl w-full bg-[url('https://images.unsplash.com/photo-1642534270237-ae57b321c5bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBva2Vtb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60')]"
      >
        <Container maxW="container.md" px={10} pt={10}>
          <Flex>
            <Heading
              className="text-white/90 "
              align="start"
              mt={24}
              as="h3"
              size="xl"
            >
              Bulbasur
            </Heading>

            <Spacer />
            <Text className="mt-[6.5rem] text-black/90" fontSize="lg">
              #001
            </Text>
          </Flex>

          <Space className="flex flex-col items-start" size={[0, "small"]} wrap>
            {/* map all tags if there is an array otherwise no */}
            <Tag className="border-0 my-3 px-2 py-1  rounded-full bg-white/25 text-white/90 text-sm">
              Pokemon tag
            </Tag>
          </Space>

          <Flex mt={-36} minWidth="max-content" alignItems="center" gap="2">
            {/* routing should be check once */}
            <Link to="/pokemon-listing">
              <IoChevronBack size={30} className="text-white/90" />
            </Link>
            <Spacer />
            <button>
              <TbHeart
                size={20}
                className=" stroke-2 hover:fill-white/90 hover:scale-[1.11] stroke-white/90 ml-5"
              />
            </button>
          </Flex>
          <Text mt={36} className="text-white font-medium">
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
