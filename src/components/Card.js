import React from 'react'
import { Card, Button } from 'react-bootstrap'

export const MyCard = (props) => {
  return (
    <Card style={{ width: '18rem', margin: '30px 10px'}}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <a href={props.url} style={{ textDecoration: 'none' }}> <Button variant='primary'>Go to GitHub</Button> </a>
      </Card.Body>
    </Card>
  )
}
