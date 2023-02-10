import { Col, Button,Row } from "react-bootstrap"
import {TbArrowLeft} from "react-icons/tb"
const Total = () => {
  return (
      <Row className=' align-items-end'>
                 <Col >
                  <Button className='align-self-end border border-dark bg-light text-dark mb-2' >
                      <TbArrowLeft className='text-center' style={{ marginRight: "5px" }} />
                  Continue shopping
                  </Button>
                  
              </Col>
              <Col className='ms-auto'>
                  
                  <p className='fs-5 '><span className="fw-bold fs-5">Subtotal:</span> <span style={{color:"goldenrod",fontSize:"20px"}} >1200000Tsh</span></p>
                   <p className='fs-5'><span className="fw-bold fs-5">Transport cost:</span> <span style={{ color: "goldenrod", fontSize: "20px" }}>40000tsh</span></p>
                  <span className="divider"></span>
                  <p className='fs-4'><span className="fw-bold fs-4">Total:</span> <span style={{color:"goldenrod",fontSize:"20px"}}>1600000Tsh</span> </p>
                  
              </Col>
    </Row>
  )
}

export default Total