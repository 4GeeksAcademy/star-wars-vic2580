import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function CharacterDecription() {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    async function getInfo() {
      let response = await fetch(`https://www.swapi.tech/api/people/${id}`);
      let data = await response.json();
      setInfo(data.result);
    }

    getInfo();
  }, [id]);

  return (
    <div className="charCard d-flex justify-content-center my-auto">
      <div className="card mb-5" style={{ "background-color": "transparent" }}>
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${info.uid}.jpg`}
              className="object-fit-fill rounded"
            />
          </div>
          <div className="col-md-8">
            <div
              className="card-body"
              style={{ float: "right", "padding-left": "100px" }}
            >
              <h1 className=" charName">{info.properties?.name}</h1>
              <p className="card-text">Gender: {info.properties?.gender}</p>
              <p className="card-text">
                Birth Year: {info.properties?.birth_year}
              </p>
              <p className="card-text">
                {/* API has a typo */}
                Hair Color: {info.properties?.hair_color}
              </p>
              <p className="card-text">
                Eye color: {info.properties?.eye_color}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}