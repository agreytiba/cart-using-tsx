import { Container, Navbar as NavbarBs } from 'react-bootstrap';
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'

function Navbar() {
  return (
    <NavbarBs className='mb-5' style={{backgroundColor:"aliceblue"}}>
      <Container>
        <NavbarBs.Brand href="#home" className='fw-bold fs-1'>cart</NavbarBs.Brand>
        <NavbarBs.Toggle />
        <NavbarBs.Collapse className="justify-content-end">
          <NavbarBs.Text className='position-relative' >
                      <input type="search" name="search" id="" height={50} placeholder="search" className='rounded-1 p-2 bg-light' style={{border:"none"}}/>
                     <AiOutlineSearch className='text-dark' style={{position:"absolute",right:"10px",top:"40%"}}/>
          </NavbarBs.Text>
        <NavbarBs.Text className='position-relative mx-5 '>
                      < AiOutlineShoppingCart className='fs-3'/>
                      <span className='position-absolute  p-1 rounded-circle bg-danger text-light'
                      style={{fontSize:"10px",right:"2px",bottom:"0px"}}>
                          2
                      </span>
          </NavbarBs.Text>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;