import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Listing from "./components/Listing";
import Details from "./components/Details";
import BookmarkScreen from "./components/BookmarkScreen";
import { FavPokemonProvider } from "./FavPokemonProvider";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <FavPokemonProvider>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/pokemon-listing" element={<Listing />} />
            <Route path="/pokemon-listing/:name" element={<Listing />} />
            <Route path="/details/:name" element={<Details />} />
            <Route path="/bookmarks" element={<BookmarkScreen />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </FavPokemonProvider>
  </StrictMode>
);
