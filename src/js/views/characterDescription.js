import React , {useState, useEffect, useContext} from 'react'
import { Context } from '../store/appContext'
import { useParams } from 'react-router'

export default function CharacterDescription() {
  const {id} = useParams()
  const [character, setCharacter] = useState({});
  const {store, actions} = useContext(Context);

  useEffect (() => {
    async function getCharacter() {
      let response = await fetch(`https://www.swapi.tech/api/people/${id}`)
      let data = await response.json();
      setCharacter(data.result.properties);
    }
    getCharacter()
  }, [id]);
  console.log(character)

  return (
    <div>
      <h1>{character.name}</h1>
      <p>Gender: {character.gender}</p>
      <p>Hair Color: {character.hair_color}</p>
      <p>Height: {character.height}</p>
      <p>Birth Year: {character.birth_year}</p>
    </div>
  )
}
