import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function index() {
  const [cardData, setCardData] = useState([]);
  const [visible,setVisible] = useState(10);

  const allCardData = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=1000")
    setCardData(response.data.results)
  }

  const loadMore = ()=>{
    setVisible(visible+10)
  }
  
  useEffect(() => {
    allCardData()
    console.log("these are my all card data",cardData)
  }, [])

  
  
  const renderCard = (person,index) =>{
    return (
      <Container >
      <Row>
        <Col xs>
        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={person.picture.large} />
        <Card.Body>
          <Card.Title>
            {person.name.first} {person.name.last}
          </Card.Title>
          <Card.Text>
            <ul>
              <li>{person.email}</li>
              <li>{person.cell}</li>
              <li>{person.gender}</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        
      </Row>
    </Container>



      
    );
    
  }

  return (
    <>
      <div className="App">
      <div className="wrapper">
        <div className="cards">
          {cardData.slice(0, visible).map(renderCard)}
        </div>
      </div>
      {visible < cardData.length && (
        // <button onClick={loadMore}>Load 10 More</button>
        <Button variant="primary" onClick={loadMore}>Load More 10 Data</Button>
      )}
    </div>
    </>
  )
}

export default index