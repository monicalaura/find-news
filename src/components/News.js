import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


const News = ({title, image, description, date, link}) => {
    return(
      
     <CardDeck>
  <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
      {description} <em><a href={link} target ="_blank"> Read more...</a></em>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Publibhed at:{date}</small>
    </Card.Footer>
  </Card>
</CardDeck>

    )
  }

  export default News

