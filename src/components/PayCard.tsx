import { Card, Col, Row } from 'react-bootstrap';
import CredictCard from './CredictCard';

function PayCard() {
	return (
		<Card style={{  backgroundColor:'#051434'}}  className="text-light">
			<Card.Body>
                <Card.Title style={{ fontSize: "15px" }}>Payment method</Card.Title>
              
				<Row>
					<Col>
                        <Card.Subtitle className="my-2 text-muted ">Credict card</Card.Subtitle>
                        <CredictCard/>
        
					</Col>
					<Col>
						<Card.Subtitle className="my-2  text-muted">PayPal</Card.Subtitle>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
}

export default PayCard;
