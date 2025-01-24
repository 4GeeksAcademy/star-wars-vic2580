import React from "react";
import CharacterCard from "../component/characterCards";
import PlanetCard from "../component/planetCards";
import StarshipCard from "../component/starshipCards";

export const Home = () => (
  <div className="text-center mt-5">
    <CharacterCard/>
    <PlanetCard />
    <StarshipCard />
  </div>
);