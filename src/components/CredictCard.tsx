import React from 'react'
import {Form, Button} from "react-bootstrap"
const CredictCard = () => {
  return (
        <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name On Card</Form.Label>
        <Form.Control type="name" />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCard">
        <Form.Label>Card Number</Form.Label>
        <Form.Control type="number"  />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Expiration Date</Form.Label>
        <Form.Control type="Date"  />
      </Form.Group>
    
      <Button variant="primary" type="submit">
        checkout
      </Button>
    </Form>

  )
}

export default CredictCard