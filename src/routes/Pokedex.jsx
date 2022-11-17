import { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard'
import Col from '../components/Col'
import Row from '../components/Row'


function Pokedex () {
  const [pokedex, setPokedex] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(json => { setPokedex(json.results) })
  }, [])

  return (
    <>
      <Row>
        <Col>
          <h1 className="display-4 py-3">Pokedex</h1>
        </Col>
      </Row>
      <Row>
        {pokedex.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
      </Row>
    </>
    
  )
}

export default Pokedex