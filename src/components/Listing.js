// filter pokemons
import { Button, filter } from "@chakra-ui/react";
import BeatLoader from "react-spinners/BeatLoader";

const Listing = () => {
  const filters = [
    {
      id: 1,
      color: "teal-500",
      shadowColor: "teal-400",
      name: "Pokédex"
    },
    {
      id: 2,
      color: "rose-500",
      shadowColor: "rose-400",
      name: "Movies"
    },
    {
      id: 3,
      color: "indigo-500",
      shadowColor: "indigo-400",
      name: "Abilities"
    },
    {
      id: 4,
      color: "sky-500",
      shadowColor: "sky-400",
      name: "Items"
    },
    {
      id: 5,
      color: "amber-500",
      shadowColor: "yellow-500",
      name: "Locations"
    },
    {
      id: 6,
      color: "amber-900",
      shadowColor: "amber-800",
      name: "Habitat"
    }
  ];

  return (
    <>
      <div className="grid z-[150] relative my-44 mx-10 grid-cols-2 gap-4">
        {filters.map((filter) => {
          return (
            <button
              className={`rounded-xl shadow-lg shadow-${filter.shadowColor} text-white
         font-medium text-start px-6 text-lg 
         bg-${filter.color} py-4`}
            >
              {filter.name}
            </button>
          );
        })}
      </div>
      <div className="mx-10 my-24 relative items-center flex  md:flex-wrap lg:flex-nowrap">
        <h3 className="font-black text-xl  text-slate-800/90">Pokemon News</h3>
        <Button
          className=" absolute ml-36 md:-right-[30em]"
          colorScheme="purple"
          variant="ghost"
        >
          View All
        </Button>
      </div>
    </>
  );
};

export default Listing;
