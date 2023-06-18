import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Listing from "./components/Listing";
import Details from "./components/Details";
import BookmarkScreen from "./components/BookmarkScreen";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokemon-listing" element={<Listing />} />
        <Route path="/pokemon-listing/pokedex" element={<Listing />} />
        <Route path="/details/:name" element={<Details />} />
        <Route path="/favorites" element={<BookmarkScreen />} />
      </Routes>
    </Router>
  </ChakraProvider>
);
