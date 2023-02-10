import ItemList from "./components/ItemList";
import Navbar from "./components/Navbar";
import {Row,Col, Container} from "react-bootstrap"
import PaymentInfo from "./components/PaymentInfo";


function App() {
  return (
    <Container className="App">
      <Navbar />
      <Row>
        <Col  xs={12} md={8}><ItemList /></Col>
        <Col xs={12} md={4} className="justify-self-center">
           <PaymentInfo/> 
        </Col>  
      
      </Row>
      
    </Container>
  );
}

export default App;
