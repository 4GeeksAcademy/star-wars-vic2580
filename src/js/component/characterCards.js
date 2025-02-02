import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export default function CharacterCard() {
  const [characters, setCharacters] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    async function getCharacter() {
      let reponse = await fetch("https://www.swapi.tech/api/people");
      let data = await reponse.json();
      setCharacters(data.results);
    }
    getCharacter();
  }, []);

  const handleFavorites = (e, name) => {
    e.preventDefault();
    if (store.favs.includes(name)) {
      actions.removeFavs(name);
    } else {
      actions.addFavs(name);
    }
  };

  return (
    <div className="d-flex col-10 overflow-auto mt-5 mx-auto">
      {characters?.map((character, index) => (
        <div
          key={index}
          className="card"
          style={{ minWidth: "18rem", "background-color": "transparent" }}
        >
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
            className="img-fluid rounded"
          />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "white" }}>
              {character.name}
            </h5>
            {/* <p className="card-text">{character.affiliation}</p> */}
            <div className="d-flex flex-row justify-content-between">
              <Link
                to={`/character/${character.uid}`}
                href="#"
                className="btn btn-warning"
              >
                Learn More
              </Link>
              <span onClick={(e) => handleFavorites(e, character.name)}>
              <i className="fa-solid fa-star"></i>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}