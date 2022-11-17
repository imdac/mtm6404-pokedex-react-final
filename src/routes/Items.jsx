import { useEffect, useState } from 'react'
import ItemCard from '../components/ItemCard'
import Col from '../components/Col'
import Row from '../components/Row'

function Items () {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/item/')
      .then(response => response.json())
      .then(json => { setItems(json.results) })
  }, [])

  return (
    <>
      <Row>
        <Col>
          <h1 className="display-4 py-3">Items</h1>
        </Col>
      </Row>
      <Row>
        {items.map(item => <ItemCard key={item.name} item={item} />)}
      </Row>
    </>
  )
}

export default Items