import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from 'react-router-dom'
import Col from "../components/Col"
import Row from "../components/Row"

function Pokemon () {
  const params = useParams()
  const navigate = useNavigate()

  const [pokemon, setPokemon] = useState({
    name: '',
    id: '',
    image: '',
    abilities: []
  })

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + params.name)
      .then(response => response.status === 200 ? response.json() : navigate('/'))
      .then(json => {
        setPokemon({
          name: json.name,
          id: json.id,
          image: json.sprites.other['official-artwork'].front_default,
          abilities: json.abilities
        })
      })
  })


  return (
    <>
      <Row>
        <Col>
          <h1 className="display-4 py-3 text-capitalize">{pokemon.name}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <img className="img-fluid" src={pokemon.image} alt={pokemon.name} />
        </Col>
        <Col>
          <ul>
            {pokemon.abilities.map((ability, index) => <li key={index}>{ability.ability.name}</li>)}
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/" className="text-decoration-none">&lt; Back</Link>
        </Col>
      </Row>
    </>
  )
}

export default Pokemon