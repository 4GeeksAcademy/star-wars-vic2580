import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export default function StarshipCard() {
  const [starships, setstarships] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    async function getstarships() {
      let reponse = await fetch("https://www.swapi.tech/api/starships");
      let data = await reponse.json();
      setstarships(data.results);
    }
    getstarships();
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
      {starships?.map((starship, index) => (
        <div
          key={index}
          className="card"
          style={{ minWidth: "18rem", "background-color": "transparent" }}
        >
          <img
            src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
            className="img-fluid rounded"
          />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "white" }}>
              {starship.name}
            </h5>
            <div className="d-flex flex-row justify-content-between">
              <Link
                to={`/starships/${starship.uid}`}
                href="#"
                className="btn btn-warning"
              >
                Learn More
              </Link>
              <span onClick={(e) => handleFavorites(e, starship.name)}>
              <i className="fa-solid fa-star"></i>              
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}