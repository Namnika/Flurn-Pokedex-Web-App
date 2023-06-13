import Search from "./components/Search";
import "./index.css";

export default function App() {
  return (
    <>
      <div
        className="
      bg-cover antialiased
      relative  bg-slate-100 
      w-full h-screen "
      >
        <div className="container">
          <div className="h-0 absolute">
            <h1
              className="font-bold my-10 flex flex-wrap  mx-10 justify-start  
           text-5xl text-indigo-600"
            >
              Pokédex
            </h1>
            {/* label with search input */}
            <div className=" w-72 ">
              <label
                htmlFor="search-pokemon"
                className="text-2xl flex mx-10 text-slate-800/90 font-bold"
              >
                Which Pokemon do you want?
              </label>
            </div>
            {/* search input */}
            <Search />
          </div>
          <div className="absolute opacity-75 h-3/4 w-3/4 bottom-24 right-0 bg-cover bg-no-repeat bg-right bg-[url('https://o.remove.bg/downloads/8bf1017a-e81b-474a-87c1-d1c84555b8ff/Cute-Pikachu-Pokemon-Character-iphone-11-pro-removebg-preview.png')]"></div>
        </div>
      </div>
    </>
  );
}
