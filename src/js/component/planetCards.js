import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export default function PlanetCard() {
  const [planets, setPlanet] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    async function getCharacter() {
      let reponse = await fetch("https://www.swapi.tech/api/planets");
      let data = await reponse.json();
      setPlanet(data.results);
    }
    getCharacter();
  }, []);

  const handleFavorites = (e, planet) => {
    e.preventDefault();
    if (store.favs.includes(planet)) {
      actions.removeFavs(planet);
    } else {
      actions.addFavs(planet);
    }
  };

  return (
    <div className="d-flex col-10 overflow-auto mt-5 mx-auto">
      {planets?.map((planet, index) => (
        <div
          key={index}
          className="card"
          style={{ minWidth: "18rem", "background-color": "transparent" }}
        >
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
            className="img-fluid rounded"
          />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "white" }}>
              {planet.name}
            </h5>
            {/* <p className="card-text">{planet.affiliation}</p> */}
            <div className="d-flex flex-row justify-content-between">
              <Link
                to={`/planets/${planet.uid}`}
                href="#"
                className="btn btn-warning "
              >
                Learn More
              </Link>
              <span onClick={(e) => handleFavorites(e, planet.name)}>
              <i className="fa-solid fa-star"></i>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}