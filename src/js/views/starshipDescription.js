import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function StarshipDescription() {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    async function getInfo() {
      let response = await fetch(`https://www.swapi.tech/api/starships/${id}`);
      let data = await response.json();
      setInfo(data.result);
    }
    getInfo();
  }, [id]);

  return (
    <div className="d-flex justify-content-center mx-4 my-auto">
      <div className="card mb-5" style={{ "background-color": "transparent" }}>
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src={`https://starwars-visualguide.com/assets/img/starships/${info.uid}.jpg`}
              className=" object-fit-fill rounded"
            />
          </div>
          <div className="col-md-8">
            <div
              className="card-body"
              style={{ float: "right", "padding-left": "250px" }}
            >
              <h1 className="planetName card-title">
                {info.properties?.model}
              </h1>
              <p className="card-text ">
                Starship Class:
                {info.properties?.starship_class}
              </p>
              <p className=" card-text">
                Manufacturer:
                {info.properties?.manufacturer}
              </p>
              <p className=" card-text">
                Length:
                {info.properties?.length}
              </p>
              <p className=" card-text">
                Crew:
                {info.properties?.crew}
              </p>
              <p className=" card-text">
                Passengers:
                {info.properties?.passengers}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}