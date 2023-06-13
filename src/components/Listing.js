// filter pokemons
import { Button, Heading } from "@chakra-ui/react";
import {
  Card,
  Stack,
  Image,
  Text,
  CardBody,
  StackDivider
} from "@chakra-ui/react";
const Listing = ({ loader, error }) => {
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
      shadowColor: "[#FFC26F]",
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
      <div className="grid max-w-[28em] relative my-36 mx-10 grid-cols-2 gap-4">
        {filters.map((filter) => {
          return (
            <button
              className={`rounded-xl shadow-lg shadow-${filter.shadowColor} text-white
         font-medium text-start  px-6 text-lg 
         bg-${filter.color} py-4`}
            >
              {filter.name}
            </button>
          );
        })}
      </div>
      <div className="mx-10 mt-72 relative items-center flex  md:flex-wrap flex-wrap">
        <h3 className="font-black text-xl  text-slate-900/90 ">Pokemon News</h3>
        <Button
          className=" absolute ml-36 md:-right-[30em] -right-32"
          colorScheme="purple"
          variant="ghost"
        >
          View All
        </Button>

        {/* listing news */}
        <div>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant='none'
            mt={5}
          >
            <Stack divider={<StackDivider />} spacing="5">
              <CardBody>
                <Heading
                  className="text-slate-800/90"
                  fontWeight="extrabold"
                  size="md"
                >
                  The perfect latte
                </Heading>
                <Text py="2" className="text-slate-500/80" fontSize="sm">
                  Caffè latte is a coffee beverage of Italian origin made with
                  espresso and steamed milk.
                </Text>
              </CardBody>
            </Stack>
            <Image
              borderRadius="10px"
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Listing;
