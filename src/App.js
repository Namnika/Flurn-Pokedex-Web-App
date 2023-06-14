import Search from "./components/Search";
import "./index.css";
import { Link, Flex, Spacer } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link as ReachLink } from "@reach/router";

export default function App() {
  return (
    <>
      <div
        className="
      bg-cover antialiased
      relative rounded-b-3xl bg-slate-300 
      w-full h-[43em] "
      >
        <div className="container">
          <div className="h-0 absolute">
            <Flex minWidth="max-content" align="center">
              <h1
                className="font-bold my-10 flex flex-wrap  mx-10 justify-start  
           text-5xl text-indigo-600"
              >
                Pokédex
              </h1>
              <Spacer />
              <Link
                className="font-bold"
                color="#09090b"
                alignItems="flex-end"
                as={ReachLink}
                to="/bookmarks"
              >
                BookMarks <ExternalLinkIcon mx="2px" />
              </Link>
            </Flex>
            {/* label with search input */}
            <div className=" w-72 ">
              <label
                htmlFor="search-pokemon"
                className="text-2xl flex mx-10
                 text-slate-800/90 font-bold"
              >
                Which Pokemon do you want?
              </label>
            </div>
            {/* search input */}
            <Search />
          </div>
          <div className="absolute opacity-60 h-3/4 w-[56%] bottom-24 z-40 right-0 bg-cover bg-no-repeat bg-right bg-[url('https://o.remove.bg/downloads/24524da7-7575-4d12-8073-c75d96b4547c/Cute-Pikachu-Pokemon-Character-iphone-11-pro-removebg-preview.png')]"></div>
        </div>
      </div>
    </>
  );
}
