// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
// import { useEffect, useState } from 'react'
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// import { Box, Grid } from '@mui/material';
// import { flexbox } from '@mui/system';

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   const [data,setData] = useState([]);
//   const [currentPage,setCurrentPage] = useState(1);


//   useEffect(() => {
//    async function fetchData() {
//     const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
//     const json = await res.json();
//       setData(json);
//    }
//    fetchData();
//   }, [currentPage])

//   // console.log("These are my all posts",data)


//   const array1 = [];
//   array1.push({data})
//   console.log("These are my array of posts",array1);

//   return (
//     <>
//     {data.slice(0,10).map((currElm)=>{
//       return (
//         <div key={currElm.id}>
//           <h3>{currElm.id}</h3>
//           <h2>{currElm.title}</h2>
//         </div>
//       )
//     })}
    

    
//     <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
//       Previous
//     </button>
//     <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
 
//     </>
//   )
// }


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