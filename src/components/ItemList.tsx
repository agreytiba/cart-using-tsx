import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import Item from './Item'
import items from "../Data/items.json"

import Total from './Total'
const ItemList = () => {
  return (
      <Container className='mb-4'>
    <div className=' rounded' style={{padding:"10px"}} >
    <Row className='mb-2 fw-bold fs-4'>
        <Col >Product</Col>
        <Col >Color</Col>
        <Col >Quantity</Col>
        <Col >Total Price</Col>
          </Row>
          {
              items.map(item =>
                  <Item  {...item} key={item.id } /> 
                )
              }
          </div>
          <div >
              <Total/>
       
              </div>
         
    </Container>
  )
}

export default ItemList