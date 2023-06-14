import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import App from "./App";
import Listing from "./components/Listing";
import BookmarkScreen from "./components/BookmarkScreen";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/pokemon-listing/:name" element={<Listing />} />
          <Route path="/bookmarks" element={<BookmarkScreen />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </StrictMode>
);
