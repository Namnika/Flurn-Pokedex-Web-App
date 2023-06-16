import Search from "./components/Search";
import "./index.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function App() {
  const [state, setState] = useState({
    includes: false,
    abilities: [],
    characteristics: [],
    evolutionchains: [],
    generations: [],
    growthrates: [],
    pokemon: [],
    pokedex: [],
    pokemonspecies: [],
    pokemonshapes: [],
    pokemonhabitats: [],
    versions: [],
    pokemoncolors: [],
    pokemonforms: [],
    versiongroups: [],
    natures: [],
    locations: []
  });

  const [pokemon, setPokemon] = useState();
  const [error, setError] = useState({});

  const ec = "evolution chain".replace(/\s+/g, "-");
  const gr = "growth rate".replace(/\s+/g, "-");
  const psp = "pokemon species".replace(/\s+/g, "-");
  const psh = "pokemon shape".replace(/\s+/g, "-");
  const ph = "pokemon habitat".replace(/\s+/g, "-");
  const pf = "pokemon form".replace(/\s+/g, "-");
  const pc = "pokemon color".replace(/\s+/g, "-");
  const vg = "version group".replace(/\s+/g, "-");

  const fetchPokemon = async () => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    try {
      await sleep(7000);
      const res = await axios("https://pokeapi.co/api/v2/");

      // await sleep(7000);
      // const ability = await axios(data.ability);
      // setState({ abilities: ability.data.results });

      // await sleep(7000);
      // const characteristic = await axios(data.characteristic);
      // setState({ characteristics: characteristic.data.results });

      // await sleep(7000);
      // const evolutionchain = await axios(data[ec]);
      // setState({ evolutionchains: evolutionchain.data.results });

      // await sleep(7000);
      // const generation = await axios(data.generation);
      // setState({ generations: generation.data.results });

      // await sleep(7000);
      // const growthrate = await axios(data[gr]);
      // setState({ growthrates: growthrate.data.results });

      // await sleep(7000);
      // should be res.data...
      const pokemon = await axios(res.data.pokemon);
      setState({ pokemon: pokemon.data.results });
      localStorage.setItem("pokemon", JSON.stringify(pokemon.data.results));
      setPokemon(pokemon.data.results);
      // await sleep(7000);
      // const pokedex = await axios(data.pokedex);
      // setState({ pokedex: pokedex.data.results });

      // await sleep(7000);
      // const pokemonspecies = await axios(data[psp]);
      // setState({ pokemonspecies: pokemonspecies.data.results });

      // await sleep(7000);
      // const pokemonshape = await axios(data[psh]);
      // setState({ pokemonshapes: pokemonshape.data.results });

      // await sleep(7000);
      // const pokemonhabitat = await axios(data[ph]);
      // setState({ pokemonhabitats: pokemonhabitat.data.results });

      // await sleep(7000);
      // const pokemonform = await axios(data[pf]);
      // setState({ pokemonforms: pokemonform.data.results });

      // await sleep(7000);
      // const pokemoncolor = await axios(data[pc]);
      // setState({ pokemoncolors: pokemoncolor.data.results });

      // await sleep(7000);
      // const version = await axios(data.version);
      // setState({ versions: version.data.results });

      // await sleep(7000);
      // const location = await axios(data.location);
      // setState({ locations: location.data.results });

      // await sleep(7000);
      // const versiongroup = await axios(data[vg]);
      // setState({ versiongroups: versiongroup.data.results });

      // await sleep(7000);
      // const nature = await axios(data.nature);
      // setState({ natures: nature.data.results });
      // setError(null)
    } catch (err) {
      setError(err.message.response);
      // setError(error);
      // setState(null);
    }
  };

  console.log(state.pokemon);

  useEffect(() => {
    fetchPokemon();
    if (window.localStorage !== undefined) {
      const pokemonData = window.localStorage.getItem("pokemon");
      pokemonData !== null ? setPokemon(JSON.parse(pokemonData)) : null;
    }
  }, []);

  return (
    <>
      <div
        className="
      bg-cover antialiased drop-shadow-2xl
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
                className="font-bold hover:decoration-2 hover:underline"
                color="#09090b"
                alignItems="flex-end"
                to="/bookmarks"
                target="_blank"
                rel="noopener noreferrer"
              >
                BookMarks <ExternalLinkIcon mx="2px" />
              </Link>
            </Flex>

            <div className=" w-72 ">
              <label
                htmlFor="search-pokemon"
                className="text-2xl flex mx-10
                 text-slate-800/90 font-bold"
              >
                Which Pokemon do you want?
              </label>
            </div>
            <Search
              includes={state.includes}
              pokemonNames={state.pokemon}
              error={error}
            />
          </div>
          <div className="absolute opacity-60 h-3/4 w-[56%] bottom-24 z-40 right-0 bg-cover bg-no-repeat bg-right bg-[url('https://o.remove.bg/downloads/24524da7-7575-4d12-8073-c75d96b4547c/Cute-Pikachu-Pokemon-Character-iphone-11-pro-removebg-preview.png')]"></div>
        </div>
      </div>
    </>
  );
}
